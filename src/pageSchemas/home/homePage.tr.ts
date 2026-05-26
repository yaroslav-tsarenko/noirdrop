import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Uzman Kılavuzlar Anında Erişimde`,
        description: `Uzmanlar tarafından hazırlanan pratik kılavuzlara erişin. Her rehberi jetonlarla anında açın.`,
        keywords: ["kılavuz", "rehber", "teknik", "dokümantasyon"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME}`,
            description: "Her cihaz ve ekipman için uzman kılavuzları. Jetonla aç, istediğin zaman kullan.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Kılavuz Kütüphanesi",
            },
            right: {
                type: "text",
                title: "Uzman Kılavuzlar Elinizin Altında",
                description: `${COMPANY_NAME}, sektör uzmanları tarafından yazılmış büyüyen bir kılavuz kütüphanesine erişim sağlar. Gündelik ekipmandan ileri araçlara kadar — ihtiyacınız olduğunda bilgiye ulaşın.`,
                bullets: [
                    "Uzmanlar tarafından hazırlanmış ve doğrulanmış",
                    "Geniş ekipman ve araç yelpazesi",
                    "Anında dijital erişim",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `${COMPANY_NAME} Nasıl Çalışır?`,
                description: `Her kılavuz jetonlarla açılır. Jetonlar size esneklik sunar: Sadece ihtiyacınız olan rehberler için harcayın.`,
                bullets: [
                    "Jetonları bir kez alın, istediğiniz zaman kullanın",
                    "Abonelik baskısı yok",
                    "Basit ve şeffaf erişim",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Jeton Erişimi",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Panel Önizlemesi",
            },
            right: {
                type: "text",
                title: "Düzenli ve Kolay Panel",
                description: "Kılavuzları kategoriye göre inceleyin, jeton bakiyenizi takip edin ve indirmelerinizi yönetin.",
                bullets: [
                    "Kolay kategori araması",
                    "Jeton kullanım ve geçmiş takibi",
                    "Kılavuzları istediğiniz zaman indirin",
                ],
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image4",
                    title: "Mobil Uyumlu",
                    description: "Kılavuzlara her cihazdan, her yerde erişin.",
                    buttonLink: "/sign-up",
                    buttonText: "Hemen Dene",
                },
                {
                    image: "image5",
                    title: "Düzenli Güncellemeler",
                    description: "Kütüphanemiz her hafta yeni rehberlerle büyüyor.",
                    buttonLink: "/sign-up",
                    buttonText: "Katılın",
                },
                {
                    image: "image6",
                    title: "Topluluk Desteği",
                    description: "Ekibimizden ve diğer kullanıcılardan yardım alın.",
                    buttonLink: "/faq",
                    buttonText: "SSS",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Neden ${COMPANY_NAME}?`,
                description: `Rastgele internet içeriklerinden farklı olarak, ${COMPANY_NAME} kılavuzları uzmanlar tarafından hazırlanır ve gözden geçirilir. Her rehberde doğru, yapılandırılmış ve güvenilir bilgi bulursunuz.`,
                bullets: [
                    "Uzmanlarca doğrulanmış",
                    "Düzenli ve anlaşılır format",
                    "Teknik bilgi için güvenilir kaynak",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image7",
                width: "100%",
                height: "400px",
                alt: "Uzman Kılavuzları",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `${COMPANY_NAME} ile Bugün Başlayın`,
                description: "Jetonlarla kılavuzları anında açın, ekipman ve araçlarınız için güvenilir bilgiye ulaşın.",
                bullets: [
                    "Rehberlere anında erişim",
                    "Sadece ihtiyacınız kadar ödeyin",
                    "Gerçek uzmanlardan bilgi",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image8",
                    title: "Geniş Kütüphane",
                    description: "Birçok kategori ve sektörde kılavuzlara erişin.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
                {
                    image: "image9",
                    title: "Jeton Esnekliği",
                    description: "Sadece ihtiyacınız olan kılavuzlar için jeton kullanın, tekrar eden ücret yok.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
                {
                    image: "image10",
                    title: "Uzman Rehberler",
                    description: "Her kılavuz uzmanlarca yazılır ve incelenir.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
                {
                    image: "image11",
                    title: "Her Zaman Erişilebilir",
                    description: "Kılavuzlarınıza istediğiniz zaman tekrar ulaşın.",
                    buttonLink: "/sign-up",
                    buttonText: "Başla",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image12",
                width: "100%",
                height: "400px",
                alt: "Kullanıcı Yorumları",
            },
            right: {
                type: "text",
                title: "Kullanıcılarımız Ne Diyor?",
                description: "“Kılavuzlar açık, takip etmesi kolay ve her zaman ulaşılabilir.” — Memnun Kullanıcı",
                bullets: [
                    "Yüksek kullanıcı memnuniyeti",
                    "Profesyonellerin tercihi",
                    "Büyüyen topluluk",
                ],
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `${COMPANY_NAME} nedir?`,
                    answer: `${COMPANY_NAME}, farklı araç ve ekipmanlar için uzmanlarca hazırlanmış kılavuzlar sunan bir platformdur.`,
                },
                {
                    question: "Bir kılavuza nasıl erişebilirim?",
                    answer: "Her kılavuz jeton harcayarak açılır. Jetonları bir kez alın, istediğiniz zaman kullanın.",
                },
                {
                    question: "Satın aldığım kılavuzlar kalıcı mı?",
                    answer: "Evet. Bir kez açtığınızda, kılavuzunuza panelinizden her zaman erişebilirsiniz.",
                },
                {
                    question: "Mobilde kullanabilir miyim?",
                    answer: "Evet, platform tamamen mobil uyumludur.",
                },
                {
                    question: "Yeni kılavuzlar ne sıklıkla ekleniyor?",
                    answer: "Her hafta yeni kılavuz ve rehberler ekliyoruz.",
                },
            ],
        },
    ],
};

export default schema;
