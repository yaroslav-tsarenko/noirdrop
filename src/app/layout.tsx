import "./globals.css";
import {currentFont} from "@/resources/styles-config";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body style={{ ["--font-family" as string]: currentFont.css }}>
            {children}
        </body>
        </html>
    );
}

export default Layout;
