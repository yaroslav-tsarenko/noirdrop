import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} Hakkında — Hikayemiz ve Değerlerimiz`,
        description: `${COMPANY_NAME}’in arkasındaki misyonu, ekibi ve uzmanlığı keşfedin. Uzmanlarımızın sunduğu güvenilir kılavuzlar ve destek hakkında bilgi alın.`,
        keywords: [
            `${COMPANY_NAME} hakkında`,
            "şirket değerleri",
            "uzman ekip",
            "kılavuzlar",
            "iletişim"
        ],
        canonical: "/hakkimizda",
        ogImage: {
            title: COMPANY_NAME,
            description: `${COMPANY_NAME}’in vizyonu ve ekibiyle tanışın.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: `${COMPANY_NAME}’e Hoşgeldiniz`,
                description: `${COMPANY_NAME}, ${COMPANY_LEGAL_NAME} (${COMPANY_NUMBER} sicil numarası) tarafından işletilmektedir. Misyonumuz, kullanıcıları güvenilir ve uzmanlar tarafından hazırlanmış kılavuzlarla güçlendirmektir.`,
                bullets: [
                    "Yenilik ve uzmanlık odaklı",
                    "Binlerce kullanıcı tarafından güveniliyor",
                    "Herkes için erişilebilir bilgi"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Şirket misyonu",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Takım çalışması",
            },
            right: {
                type: "text",
                title: "Ekibimiz",
                description: "Kaliteli dokümantasyon için çalışan uzman, yazar ve mühendislerden oluşan çeşitli bir ekip. İşbirliği ve sürekli öğrenmeye inanıyoruz.",
                bullets: [
                    "Deneyimli profesyoneller",
                    "Sürekli eğitim",
                    "Teknolojiye tutku"
                ],
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image3",
                    title: "Değerlerimiz",
                    description: "Dürüstlük, açıklık ve kullanıcıyı güçlendirme temel ilkelerimizdir.",
                    buttonLink: "/about-us",
                    buttonText: "Hakkımızda",
                },
                {
                    image: "image4",
                    title: "Hizmetlerimiz",
                    description: "Çeşitli sektörler için geniş bir teknik kılavuz ve rehber yelpazesi sunuyoruz.",
                    buttonLink: "/services",
                    buttonText: "Hizmetler",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Neden Bizi Seçmelisiniz?",
                description: "Yılların deneyimini kullanıcıya yardımcı olma tutkusu ile birleştiriyoruz. Kılavuzlarımız profesyoneller ve günlük kullanıcılar tarafından güvenle tercih edilmektedir.",
                bullets: [
                    "Kapsamlı dokümantasyon",
                    "Kullanıcı dostu rehberler",
                    "Tüm ihtiyaçlarınız için destek"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Neden biz",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Fiyatlandırma ve planlar",
            },
            right: {
                type: "text",
                title: "Şeffaf Fiyatlandırma",
                description: "Fiyatlandırmamız basit ve adildir. Sadece ihtiyacınız olanı, ihtiyacınız olduğunda ödeyin.",
                bullets: [
                    "Gizli ücret yok",
                    "Esnek planlar",
                    "Detaylar için fiyatlandırma sayfamıza bakın"
                ],
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image7",
                    title: "SSS",
                    description: "Platformumuz ve hizmetlerimiz hakkında sıkça sorulan soruların yanıtlarını bulun.",
                    buttonLink: "/faq",
                    buttonText: "SSS",
                },
                {
                    image: "image8",
                    title: "Başlayın",
                    description: "Hazır mısınız? Bugün kılavuzlarımızı ve rehberlerimizi kullanmaya başlayın.",
                    buttonLink: "/get-started",
                    buttonText: "Başla",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "İletişim & Destek",
                description: `Sorularınız mı var? Bize ${COMPANY_EMAIL} adresinden ulaşabilir veya ${COMPANY_ADDRESS} adresimizi ziyaret edebilirsiniz. Destek ekibimiz size yardımcı olmaktan memnuniyet duyar.`,
                bullets: [
                    "Hızlı müşteri hizmetleri",
                    "Kapsamlı SSS ve yardım merkezi",
                    "Doğrudan e-posta desteği"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image9",
                width: "100%",
                height: "400px",
                alt: "İletişim ve destek",
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `${COMPANY_NAME} nedir?`,
                    answer: `${COMPANY_NAME}, ${COMPANY_LEGAL_NAME} tarafından işletilen, uzman kılavuzlar ve rehberler sunan bir platformdur.`,
                },
                {
                    question: "Destek ile nasıl iletişime geçebilirim?",
                    answer: `Bize ${COMPANY_EMAIL} adresinden e-posta gönderebilir veya iletişim formumuzu kullanabilirsiniz.`,
                },
                {
                    question: "Şirketin adresi nedir?",
                    answer: `Adresimiz: ${COMPANY_ADDRESS}`,
                },
                {
                    question: "Fiyatlandırmanızı nereden görebilirim?",
                    answer: `Tüm detaylar için fiyatlandırma sayfamızı (/pricing) ziyaret edin.`,
                },
                {
                    question: "Nasıl başlayabilirim?",
                    answer: `Hizmetlerimizi kullanmaya başlamak için /get-started sayfasına gidin.`,
                },
            ],
        },
    ],
};

export default schema;
