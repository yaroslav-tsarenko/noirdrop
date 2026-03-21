import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
} from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `eSIM Veri Planları ve Fiyatlandırma — ${COMPANY_NAME}`,
        description:
            `45+ Avrupa ülkesi için uygun fiyatlı yalnızca veri eSIM planları. 1 GB'dan 50 GB'a kadar seçenekler. Anında QR teslimatı. Sözleşme yok, dolaşım ücreti yok.`,
        keywords: [
            "esim fiyatlandırma",
            "avrupa esim fiyat",
            "avrupa veri planları",
            "seyahat esim",
            "ucuz esim avrupa",
            `${COMPANY_NAME} esim planları`,
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} — eSIM Fiyatlandırma`,
            description: "Avrupa seyahati için uygun fiyatlı veri planları. Sözleşme yok.",
            bg: "#f5f6ff",
            color: "#6a39ff",
        },
    },

    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Avrupa İçin Basit, Şeffaf eSIM Fiyatlandırma",
            description:
                `Jeton satın alın, ardından 45+ Avrupa ülkesinde veri eSIM planlarını etkinleştirmek için kullanın. 1 GB'dan 50 GB'a kadar planlar. Abonelik yok, gizli ücret yok.`,
            buttons: [
                { text: "Başlayın", link: "/get-started", color: "primary" },
                { text: "İletişim", link: "/contact-us", color: "secondary" },
            ],
        },

        {
            type: "grid",
            columns: 3,
            gap: "2.4rem",
            cards: [
                {
                    type: "pricing",
                    variant: "premium",
                    title: "eSIM ULTRA",
                    price: "from £9.95",
                    tokens: 0,
                    description: "İş seyahati, uzaktan çalışma ve yoğun kullanım için premium 4G/5G veri.",
                    features: [
                        "1 GB / 7 gün — £9.95'den başlayan",
                        "3 GB / 15 gün",
                        "5 GB / 30 gün",
                        "10 GB / 30 gün",
                        "20 GB / 30 gün",
                        "4G/5G hız • Hotspot destekli",
                    ],
                    buttonText: "ULTRA Planları Görüntüle",
                    buttonLink: "/esim/esim-ultra",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "eSIM PLUS",
                    price: "from £7.95",
                    tokens: 0,
                    description: "Tatiller ve uzun seyahatler için en iyi değer veri planları.",
                    features: [
                        "1 GB / 7 gün — £7.95'den başlayan",
                        "3 GB / 15 gün",
                        "5 GB / 30 gün",
                        "10 GB / 30 gün",
                        "20 GB / 30 gün",
                        "50 GB / 30 gün",
                        "4G veri • Tethering destekli",
                    ],
                    buttonText: "PLUS Planları Görüntüle",
                    buttonLink: "/esim/esim-plus",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "eSIM Standart",
                    price: "from £4.50",
                    tokens: 0,
                    description: "Kısa seyahatler ve hafif veri kullanımı için en uygun fiyatlı seçenek.",
                    features: [
                        "1 GB / 7 gün — £4.50'den başlayan",
                        "3 GB / 30 gün",
                        "5 GB / 30 gün",
                        "10 GB / 30 gün",
                        "4G veri • Bütçe dostu",
                    ],
                    buttonText: "Standart Planları Görüntüle",
                    buttonLink: "/esim/esim-global",
                },
            ],
        },

        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Her Plana Dahil Olanlar",
                description:
                    "Her eSIM veri planı aynı temel özellikleri içerir — hangi boyutu seçerseniz seçin.",
                bullets: [
                    "Yalnızca veri eSIM — ana SIM'iniz aramalar ve SMS için aktif kalır",
                    "E-postanıza anında QR kod teslimi",
                    "Tek plan ile 45+ Avrupa ülkesinde kapsama",
                    "Sözleşme yok — sadece ihtiyacınız olduğunda satın alın",
                    "iPhone ve Android için adım adım kurulum kılavuzu",
                ],
                iconName: "checkCircle",
                iconSize: 46,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image50",
                height: "400px",
                alt: "eSIM plan özellikleri",
            }
        },

        {
            type: "faq",
            items: [
                {
                    question: "Hangi ülkeler kapsanıyor?",
                    answer: "Tüm planlar İngiltere, Fransa, Almanya, İspanya, İtalya, Yunanistan, Portekiz, Hollanda ve daha birçok ülke dahil 45+ Avrupa ülkesini kapsar."
                },
                {
                    question: "Bu yalnızca veri planı mı?",
                    answer: "Evet. Tüm eSIM planlarımız yalnızca veridir. Orijinal SIM kartınız telefon aramaları, SMS ve banka doğrulaması için aktif kalır."
                },
                {
                    question: "Verim bitince ne olur?",
                    answer: "Veri bağlantınız durur. Fazla kullanım ücreti yoktur. İstediğiniz zaman yeni bir plan satın alabilirsiniz."
                },
                {
                    question: "İade alabilir miyim?",
                    answer: "Kurulmamış eSIM'ler için iade mevcuttur. Etkinleştirildikten sonra iadeler geçerli tüketici yasasına bağlıdır. Yardım için destek ile iletişime geçin."
                },
                {
                    question: "Sınırsız plan sunuyor musunuz?",
                    answer: `Şu anda hayır. Çoğu seyahat ihtiyacını karşılayan 50 GB'a kadar planlar sunuyoruz. Özel gereksinimler için ${COMPANY_EMAIL} adresinden bize ulaşın.`
                },
            ]
        },

        {
            type: "hero",
            bgImage: "image40",
            title: "Avrupa'da Bağlı Kalmaya Hazır mısınız?",
            description:
                "Bir veri planı seçin, QR kodu tarayın ve 45+ Avrupa ülkesinde hızlı mobil veri keyfini çıkarın. Sözleşme yok. Dolaşım ücreti yok.",
            buttons: [
                { text: "Başlayın", link: "/get-started", color: "primary" },
                { text: "Kapsamı Görüntüle", link: "/coverage", color: "secondary" },
            ],
        },
    ],
};

export default pricingSchema;
