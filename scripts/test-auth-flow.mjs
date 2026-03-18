const baseUrl = process.env.AUTH_TEST_BASE_URL || "http://127.0.0.1:3000";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function mergeCookies(existing, response) {
  const setCookies = response.headers.getSetCookie?.() ?? [];
  if (!setCookies.length) return existing;

  const jar = new Map(
    existing
      .split("; ")
      .filter(Boolean)
      .map((entry) => {
        const [name, ...rest] = entry.split("=");
        return [name, rest.join("=")];
      }),
  );

  for (const value of setCookies) {
    const [pair] = value.split(";");
    const [name, ...rest] = pair.split("=");
    jar.set(name, rest.join("="));
  }

  return [...jar.entries()].map(([name, value]) => `${name}=${value}`).join("; ");
}

async function request(path, init = {}, cookie = "") {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(cookie ? { Cookie: cookie } : {}),
      ...(init.headers || {}),
    },
  });

  const body = await res.json().catch(() => null);
  const nextCookie = mergeCookies(cookie, res);

  return { res, body, cookie: nextCookie };
}

async function run() {
  const stamp = Date.now();
  const email = `auth-test-${stamp}@example.com`;
  const password = `AuthPass${stamp}`;

  let cookie = "";

  const signupPayload = {
    firstName: "Auth",
    lastName: "Tester",
    name: "Auth Tester",
    dateOfBirth: "1992-04-18",
    email,
    phone: "+447700900123",
    street: "221B Baker Street",
    city: "London",
    country: "United Kingdom",
    postcode: "NW1 6XE",
    password,
    acceptedTerms: true,
  };

  const register = await request("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(signupPayload),
  }, cookie);
  cookie = register.cookie;
  assert(register.res.ok, `Register failed: ${JSON.stringify(register.body)}`);
  assert(register.body?.user?.email === email, "Registered user email mismatch");
  assert(cookie.includes("access_token=") || cookie.includes("accessToken=") || cookie.includes("access_token"), "Register did not set auth cookies");

  const meAfterRegister = await request("/api/auth/me", { method: "GET", headers: {} }, cookie);
  assert(meAfterRegister.res.ok, `Me after register failed: ${JSON.stringify(meAfterRegister.body)}`);
  assert(meAfterRegister.body?.user?.email === email, "Me after register returned wrong user");

  const logout = await request("/api/auth/logout", { method: "POST", body: JSON.stringify({}) }, cookie);
  cookie = logout.cookie;
  assert(logout.res.ok, `Logout failed: ${JSON.stringify(logout.body)}`);

  const meAfterLogout = await request("/api/auth/me", { method: "GET", headers: {} }, cookie);
  assert(meAfterLogout.res.status === 401, "Me after logout should be unauthorized");

  const login = await request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }, cookie);
  cookie = login.cookie;
  assert(login.res.ok, `Login failed: ${JSON.stringify(login.body)}`);
  assert(login.body?.user?.email === email, "Login returned wrong user");

  const meAfterLogin = await request("/api/auth/me", { method: "GET", headers: {} }, cookie);
  assert(meAfterLogin.res.ok, `Me after login failed: ${JSON.stringify(meAfterLogin.body)}`);
  assert(meAfterLogin.body?.user?.email === email, "Me after login returned wrong user");

  console.log(JSON.stringify({
    ok: true,
    email,
    steps: ["register", "me", "logout", "login", "me"],
  }));
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
