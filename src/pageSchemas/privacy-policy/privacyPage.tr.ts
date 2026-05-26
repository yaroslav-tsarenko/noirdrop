import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Gizlilik Politikası – ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} için kısa Gizlilik Politikası: hangi verileri topladığımız, neden, ne kadar süreyle sakladığımız ve haklarınız.`,
        keywords: [
            "gizlilik politikası",
            "veri koruma",
            "kvkk",
            COMPANY_NAME?.toLowerCase() || "kılavuzlar",
            "kılavuzlar",
            "kişisel veri",
            "güvenlik"
        ],
        canonical: "/gizlilik-politikasi",
        ogImage: {
            title: `${COMPANY_NAME} – Gizlilik Politikası`,
            description: "Şeffaf veri koruma ve gizlilik standartları.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Giriş",
            bullets: [
                "Gizliliğinize saygı duyuyoruz.",
                "Bu kısa Gizlilik Politikası, hangi kişisel verileri topladığımızı, neden kullandığımızı, ne kadar süreyle sakladığımızı ve haklarınızı nasıl kullanabileceğinizi açıklar.",
            ],
        },
        {
            type: "text",
            title: "2. Topladığımız Veriler",
            bullets: [
                "Ad, e-posta, fatura adresi",
                "Ödeme işlem referansları (tam kart verisi değil)",
                "Sipariş geçmişi",
                "Hesap bilgileri (şifrelenmiş)",
                "IP adresi, cihaz ve erişim kayıtları",
                "Destek yazışmaları"
            ]
        },
        {
            type: "text",
            title: "3. Verilerinizi İşleme Amaçlarımız ve Hukuki Dayanaklar",
            bullets: [
                "Hizmeti sunmak ve dijital ürünleri teslim etmek (sözleşmenin ifası)",
                "Ödemeleri işlemek ve dolandırıcılığı önlemek (yasal yükümlülük / meşru menfaat)",
                "Destek taleplerine yanıt vermek ve iadeleri yönetmek (sözleşmenin ifası / meşru menfaat)",
                "Onay verdiğinizde pazarlama göndermek (açık rıza)"
            ]
        },
        {
            type: "text",
            title: "4. Paylaşım ve Aktarımlar",
            bullets: [
                "Veriler, gerektiğinde ödeme sağlayıcıları, bulut barındırma, analiz ve destek araçları ile profesyonel danışmanlarla paylaşılır.",
                "Bazı sağlayıcılar İngiltere/AEA dışında olabilir; aktarımlar için onaylı koruma önlemleri (İngiltere uygunluğu, SCC veya eşdeğeri) kullanılır.",
            ],
        },
        {
            type: "text",
            title: "5. Çerezler",
            bullets: [
                "Çerezler ve benzeri teknolojiler kullanıyoruz.",
                "Temel çerezler, temel işlevsellik için gereklidir. Detaylar ve çerez tercihleri için Çerez Politikamıza bakınız.",
            ],
        },
        {
            type: "text",
            title: "6. Saklama Süresi",
            bullets: [
                "Sipariş ve işlem kayıtları (jeton defteri ve ödeme onayı dahil) en az 24 ay ve ihtilaflı/kurumsal durumlarda 6 yıla kadar saklanır.",
                "Diğer hesap ve destek verileri yalnızca gerektiği sürece tutulur.",
            ],
        },
        {
            type: "text",
            title: "7. Haklarınız",
            bullets: [
                `Veri koruma yasası kapsamında erişim, düzeltme, silme, kısıtlama, taşınabilirlik, itiraz ve rıza geri çekme haklarına sahipsiniz.`,
                `Haklarınızı kullanmak için ${COMPANY_EMAIL} adresine başvurabilirsiniz. Talepler için kimlik doğrulaması istenebilir.`,
            ],
        },
        {
            type: "text",
            title: "8. Güvenlik",
            bullets: [
                "Kişisel verileri korumak için makul teknik ve organizasyonel önlemler (erişim kontrolleri, aktarımda şifreleme, kayıt ve yedekleme) uygularız.",
            ],
        },
        {
            type: "text",
            title: "9. Değişiklikler",
            bullets: [
                "Bu Politikayı güncelleyebiliriz.",
                "Önemli değişiklikler e-posta veya Hizmette belirgin bir bildirim ile duyurulacaktır.",
            ],
        },
        {
            type: "text",
            title: "10. İletişim & Şikayetler",
            bullets: [
                `Veri koruma için: ${COMPANY_EMAIL}`,
                `Destek: ${COMPANY_EMAIL}`,
                "Memnun kalmazsanız, İngiltere Bilgi Komiserliği Ofisi’ne (ICO) şikayette bulunabilirsiniz."
            ]
        },
        {
            type: "text",
            title: "Yürürlük Tarihi",
            bullets: [
                "Bu Gizlilik Politikası yayımlandığı anda yürürlüğe girer ve önceki tüm sürümlerin yerine geçer.",
            ],
        },
        {
            type: "text",
            title: "Geçerlilik tarihi",
            description: "18 Eylül 2025"
        }
    ]
};

export default privacyPolicySchema;
