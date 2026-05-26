import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const cookiePolicyTr: PageSchema = {
    meta: {
        title: `Çerez Politikası – ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} çerezleri nasıl kullanır, amaçları, saklama süreleri ve onayınızı nasıl yönetebileceğiniz hakkında bilgi.`,
        keywords: [
            "çerezler",
            "çerez politikası",
            "gizlilik",
            "takip",
            "onay",
            "kılavuzlar",
            "cihazlar",
            COMPANY_NAME?.toLowerCase() || "kılavuzlar"
        ],
        canonical: "/cerez-politikasi",
        ogImage: {
            title: "Çerez Politikası",
            description: "Çerezler ve onay hakkında şeffaf bilgi.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Yürürlük tarihi",
            description: "18 Eylül 2025"
        },
        {
            type: "text",
            title: "1. Genel Bakış",
            bullets: [
                `Bu Çerez Politikası, ${COMPANY_NAME} ("biz") olarak Hizmet üzerinde çerezleri ve benzer teknolojileri (ör. localStorage, sessionStorage ve pikseller) nasıl kullandığımızı açıklar.`,
                `Gizlilik Politikamızı tamamlar.`,
                `Siteyi kullanarak veya çerez banner'ı ile etkileşime girerek, aşağıda açıklandığı şekilde zorunlu olmayan çerezlere onay verebilir veya yönetebilirsiniz.`,
            ],
        },
        {
            type: "text",
            title: "2. Çerez nedir?",
            bullets: [
                "Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır.",
                "Temel işlevsellik sağlar (ör. oturum açma), tercihlerinizi hatırlar, site performansını ölçer ve geliştirir, ayrıca (onayınızla) pazarlama ve analiz desteği sunar.",
            ],
        },
        {
            type: "text",
            title: "3. Kullandığımız çerez kategorileri",
            bullets: [
                "Gerekli / Zorunlu — Temel platform işlevleri için gereklidir (oturum, güvenlik, oturum yönetimi). Bu çerezler için onay gerekmez.",
                "Fonksiyonel — Ayarlarınızı ve tercihlerinizi hatırlar (dil, görünüm, arayüz seçimleri).",
                "Performans / Analitik — Site kullanımı, hatalar ve yükleme sürelerini ölçer, güvenilirlik ve performansı artırır. Araçlara göre meşru menfaat ve/veya onay ile kullanılır.",
                "Pazarlama / Reklam — Sadece etkinleştirirseniz kullanılır: kampanya ataması, yeniden pazarlama ve ilgiye dayalı içerik (onay gereklidir).",
                "Güvenlik / Kötüye Kullanım Önleme — Olağandışı kalıpları tespit eder, siteyi ve kullanıcıları dolandırıcılık ve botlardan korur."
            ]
        },
        {
            type: "text",
            title: "4. Tipik çerezler (örnekler)",
            bullets: [
                "session_id — Amaç: oturum (gerekli) • Süre: oturum",
                "csrf_token — Amaç: CSRF koruması (gerekli) • Süre: oturum",
                "consent_state — Amaç: çerez onay tercihinizi saklar (fonksiyonel/gerekli) • Süre: 6–12 ay",
                "ui_prefs — Amaç: dil / görünüm tercihleri (fonksiyonel) • Süre: ~6 ay",
                "perf_metrics — Amaç: performans analitiği (analitik) • Süre: 1–3 ay",
                "campaign_src — Amaç: kampanya ataması (pazarlama) • Süre: 1–3 ay",
                "Not: Çerez isimleri, süreleri ve üçüncü taraf sağlayıcılar değişebilir — güncel bilgiler site çerez kontrol panelinde gösterilir."
            ]
        },
        {
            type: "text",
            title: "5. Onay ve hukuki dayanak",
            bullets: [
                "Zorunlu çerezler: Hizmet için kesinlikle gereklidir ve onaysız kullanılır.",
                "Zorunlu olmayan çerezler (fonksiyonel, analitik, pazarlama): Sadece çerez banner'ı veya kullanıcı ayarları ile onay verdiğinizde ayarlanır, meşru menfaatin geçerli olduğu durumlar hariç (ör. sınırlı analiz).",
                "Dayandığımız hukuki temeller: sözleşmenin ifası, onay ve meşru menfaatler (dolandırıcılık önleme, hizmet iyileştirme, uyuşmazlık savunması)."
            ]
        },
        {
            type: "text",
            title: "6. Onayı nasıl kaydediyor ve saklıyoruz",
            bullets: [
                "Onay verdiğinizde, kararı (onay kutusu metni/politika versiyonu), ISO 8601 zaman damgası, IP adresi ve kullanıcı aracısı bilgisini kanıt olarak kaydederiz.",
                "Onay ve ilgili sipariş/işlem kayıtları en az 24 ay ve kurumsal/uyuşmazlık durumlarında 6 yıla kadar saklanır, Gizlilik Politikamız ile uyumludur.",
            ],
        },
        {
            type: "text",
            title: "7. Üçüncü taraflar ve uluslararası aktarımlar",
            bullets: [
                "Çerez ayarlayabilen üçüncü taraf sağlayıcılar (ödeme, analiz, barındırma, pazarlama platformları) kullanıyoruz.",
                "Bazı sağlayıcılar verileri Birleşik Krallık/AEA dışına işleyebilir; aktarımlar olduğunda yeterli koruma sağlanır (BK yeterliliği, Standart Sözleşme Maddeleri veya eşdeğeri).",
                "Üçüncü taraf sağlayıcıların listesi site çerez kontrol panelinde mevcuttur.",
            ],
        },
        {
            type: "text",
            title: "8. Çerez onayını nasıl yönetir veya geri çekersiniz",
            bullets: [
                "Sitedeki çerez banner'ı / çerez ayarlarını kullanarak zorunlu olmayan çerezleri kabul edebilir, reddedebilir veya özelleştirebilirsiniz.",
                "Onayınızı istediğiniz zaman alt menüdeki çerez ayarları bağlantısı ile geri çekebilirsiniz.",
                "Tarayıcı ayarlarından çerezleri silebilir veya gizli mod kullanabilirsiniz. Çerezleri silmek veya bazı çerezleri devre dışı bırakmak site işlevselliğini azaltabilir (örneğin oturumunuz kapanabilir)."
            ]
        },
        {
            type: "text",
            title: "9. Bu Politika'daki değişiklikler",
            bullets: [
                "Bu Çerez Politikası zaman zaman güncellenebilir (ör. yeni entegrasyonlar eklenirse).",
                "Önemli değişiklikler Hizmette belirgin bir bildirimle veya kayıtlı kullanıcılara e-posta ile duyurulur. Politikanın yürürlük tarihi güncellenir.",
            ],
        },
        {
            type: "text",
            title: "10. İletişim",
            bullets: [
                `Genel: ${COMPANY_EMAIL}`,
                `Hukuki: ${COMPANY_LEGAL_NAME}`,
                `Adres: ${COMPANY_ADDRESS}`,
            ]
        }
    ]
};

export default cookiePolicyTr;
