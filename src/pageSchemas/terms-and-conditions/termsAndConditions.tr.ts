import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Şartlar ve Koşullar – ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} kullanımı için şartlar: hesaplar, jetonlar, siparişler, iade, fikri mülkiyet, sorumluluk, gizlilik ve daha fazlası.`,
        keywords: [
            "şartlar",
            "şartlar ve koşullar",
            "sözleşme",
            COMPANY_NAME?.toLowerCase() || "kılavuzlar",
            "kılavuzlar",
            "gizlilik",
            "sorumluluk",
            "ödeme",
            "para birimi"
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Şartlar`,
            description: "Şeffaf koşullar. Kılavuzlar basit.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Şartlar ve Koşullar",
            description: "Yürürlük tarihi: 18 Eylül 2025"
        },
        {
            type: "text",
            title: "1. Giriş",
            bullets: [
                `Bu Şartlar ve Koşullar ("Şartlar"), ${COMPANY_LEGAL_NAME} (${COMPANY_NUMBER} sicil numarası, kayıtlı adres: ${COMPANY_ADDRESS}) tarafından işletilen ${COMPANY_NAME} web sitesi ve hizmetlerinin ("Hizmet") kullanımınızı düzenler.`,
                `Bu Şartlar, sizin ("siz", "Kullanıcı", "Müşteri") ile Şirket arasında yasal olarak bağlayıcı bir sözleşme oluşturur.`,
                `Hizmete erişerek, hesap oluşturarak, jeton satın alarak, kılavuz veya diğer dijital içerikleri indirerek veya sipariş ederek bu Şartlara bağlı kalmayı kabul etmiş olursunuz.`,
                `Şartların herhangi bir bölümünü kabul etmiyorsanız Hizmeti kullanmamalısınız.`,
            ],
        },
        {
            type: "text",
            title: "2. Tanımlar",
            bullets: [
                `"Hesap", Hizmette oluşturulan kullanıcı hesabı anlamına gelir.`,
                `"Kılavuz(lar)", Şirket tarafından Hizmet aracılığıyla herhangi bir formatta (PDF, DOCX vb.) sunulan dijital belge, rehber, talimat, çizim, kontrol listesi, teknik özellik veya diğer içerikleri ifade eder.`,
                `"Jeton(lar)", Hizmette Kılavuz veya diğer Ürünleri almak için kullanılan iç muhasebe birimini ifade eder.`,
                `"Ürün(ler)", Kılavuzlar ve Hizmet üzerinden sunulan diğer mal veya hizmetler anlamına gelir.`,
                `"Siz/Sizin/Müşteri", Hizmeti kullanan veya Ürün satın alan gerçek veya tüzel kişiyi ifade eder.`
            ]
        },
        {
            type: "text",
            title: "3. Uygunluk ve Hesap Kaydı",
            bullets: [
                "Bir Hesap oluşturmak ve Hizmeti kullanmak için en az 18 yaşında olmalısınız. Bir şirket veya tüzel kişi adına kayıt oluyorsanız, buna yetkiniz olduğunu onaylarsınız.",
                "Kayıt sırasında doğru, güncel ve eksiksiz bilgi vermeli ve bu bilgileri güncel tutmalısınız. Hesap bilgilerinizin gizliliğinden ve hesabınızda gerçekleşen tüm faaliyetlerden siz sorumlusunuz.",
                "Hesabınızın yetkisiz kullanımı veya başka bir güvenlik ihlali durumunda bizi derhal bilgilendirmelisiniz."
            ]
        },
        {
            type: "text",
            title: "4. Jetonlar",
            bullets: [
                "Jetonlar, Hizmette Ürün satın almak için kullanılan sanal bir iç muhasebe mekanizmasıdır. Jetonlar yasal para, elektronik para, menkul kıymet veya yatırım değildir ve bu Şartlarda açıkça belirtilenler dışında herhangi bir hak veya yükümlülük vermez.",
                "Bir Jetonun gösterge niteliğindeki nominal değeri, seçilen para biriminin 0,01'i olacaktır (ör. 0,01 £, 0,01 € veya 0,01 $). Gerçek nominal değer, ödeme sırasında gösterilecektir.",
                "Şirket, Jetonların nominal değerini zaman zaman değiştirebilir. Değişiklikler yalnızca değişiklikten sonra satın alınan Jetonlar için geçerlidir; mevcut Jetonlar etkilenmez.",
                "Ürün fiyatları Jeton cinsindendir. Her Ürün açıklamasında gerekli Jeton sayısı belirtilir. Bir fiat karşılığı gösteriliyorsa, nihai fiat tutarı ödeme sırasında geçerli olan Jeton nominal değerine göre hesaplanır.",
                "Jetonlar, ödeme sonrası hesabınıza yüklenir ve kullanıldığında düşülür. Kullanılmamış Jetonlar, İade Politikası'na (bkz. madde 6) uygun olarak iade edilebilir.",
                "Şirket, promosyonlu veya indirimli Jeton oranları veya paketleri sunabilir. Promosyon koşulları o anda belirtilecektir."
            ]
        },
        {
            type: "text",
            title: "5. Sipariş, Ödeme ve Ödeme Adımı",
            bullets: [
                "Tüm siparişler Şirketin onayına tabidir. Şirket, şüpheli dolandırıcılık, teknik hata veya fiyat/ürün açıklama hatası dahil olmak üzere herhangi bir nedenle siparişi reddedebilir veya iptal edebilir.",
                "Kabul edilen ödeme yöntemleri ödeme adımında gösterilir. Sağladığınız ödeme yöntemini kullanmaya yetkili olduğunuzu beyan edersiniz.",
                "Ödeme adımında: (a) satın alınacak veya kullanılacak Jeton sayısı; (b) Jeton nominal değeri; (c) toplam fiat tutarı; ve (d) geçerli vergi, ücret ve masraflar gösterilecektir. İşlemi tamamlamadan önce bunları onaylamalısınız.",
                "İndirilebilir bir Ürün için mülkiyet ve risk, indirme bağlantısı veya erişim bilgileri sağlandığında size geçer. Şirket, Ürünleri hızlıca sunmaya çalışır ancak sürekli erişim garantisi vermez."
            ]
        },
        {
            type: "text",
            title: "6. İade, İptal ve Tüketici Hakları",
            bullets: [
                "İngiltere tüketici yasalarına göre, bazı mesafeli sözleşmeleri iptal etme hakkınız olabilir. Ancak, dijital içerik hemen teslim edildiğinde ve iptal hakkından feragat ettiğinizi onayladığınızda bu hak kaybolabilir. Ödeme adımında anında teslimatı onaylayarak bu işlem için iptal hakkınızdan feragat etmiş olursunuz.",
                "Kullanılmamış Jetonlar, kullanılmadan önce iade talebi yapılırsa satın alma fiyatı üzerinden fiat para birimiyle iade edilebilir. İadeler, işlem ücretleri düşülerek yapılabilir.",
                `Bir Ürün hatalı, tanımlandığı gibi değilse veya sözleşmeye uygun değilse, destek ekibimizle ${COMPANY_EMAIL} adresinden iletişime geçin. Sorun makul sürede giderilemezse, yasal olarak iade veya başka bir çözüm hakkınız olabilir.`,
                `İade talebi için, hesap bilgileriniz, sipariş referansınız ve talebinizin detaylarıyla birlikte ${COMPANY_EMAIL} adresine başvurun. Makul sürede yanıt vereceğiz.`
            ]
        },
        {
            type: "text",
            title: "7. Fikri Mülkiyet Hakları",
            bullets: [
                `Hizmet ve Ürünlerdeki tüm fikri mülkiyet hakları, aksi belirtilmedikçe ${COMPANY_LEGAL_NAME}’e aittir veya lisanslıdır.`,
                "Bir Ürün satın aldığınızda, yalnızca kişisel veya dahili iş kullanımı için sınırlı, münhasır olmayan, devredilemez, iptal edilebilir bir lisans verilir. Yazılı olarak aksi kararlaştırılmadıkça şunları yapamazsınız:",
                "(a) Ürünü tamamen veya kısmen kopyalamak, çoğaltmak, değiştirmek, türev eserler oluşturmak, dağıtmak, iletmek, yayınlamak, göstermek veya satmak;",
                "(b) Üründeki herhangi bir telif hakkı, marka veya diğer mülkiyet bildirimini kaldırmak, değiştirmek veya gizlemek;",
                "(c) Ürünü üçüncü şahıslara sunmak veya üçüncü şahıslara hizmet sağlamak için kullanmak.",
                "Özel kılavuzlar için, fikri mülkiyet koşulları ayrı bir yazılı sözleşme ile belirlenebilir."
            ]
        },
        {
            type: "text",
            title: "8. Garantiler ve Feragatler",
            bullets: [
                "Size bu Şartlar kapsamındaki hakları vermeye yetkili olduğumuzu garanti ederiz.",
                "Açıkça belirtilenler dışında, Hizmet ve Ürünler \"olduğu gibi\" ve \"mevcut olduğu şekilde\" sunulur. Şirket, yasaların izin verdiği ölçüde diğer tüm açık veya zımni garantileri hariç tutar."
            ]
        },
        {
            type: "text",
            title: "9. Sorumluluğun Sınırlandırılması",
            bullets: [
                "Bu Şartlarda hiçbir şey, ihmal sonucu ölüm veya kişisel yaralanma, dolandırıcılık veya yasalarca sınırlandırılamayan diğer sorumluluklar için sorumluluğu sınırlandırmaz veya hariç tutmaz.",
                "Yukarıdakilere tabi olarak, Şirketin size karşı toplam sorumluluğu, iddiaya yol açan Ürünler için son 12 ayda ödediğiniz toplam tutarla sınırlıdır.",
                "Şirket, dolaylı, özel veya sonuç olarak ortaya çıkan zararlar, kar kaybı, iş kaybı, itibar kaybı, beklenen tasarruf kaybı, veri kaybı veya benzeri zararlar için sorumlu değildir."
            ]
        },
        {
            type: "text",
            title: "10. Tazminat",
            bullets: [
                "Şirketi, yöneticilerini, çalışanlarını ve temsilcilerini; (a) bu Şartları ihlaliniz; (b) Hizmet veya Ürünleri yanlış kullanımınız; veya (c) geçerli herhangi bir yasa veya üçüncü taraf haklarını ihlaliniz nedeniyle oluşan tüm kayıp, zarar, talep, masraf ve giderlerden (makul avukatlık ücretleri dahil) tazmin etmeyi kabul edersiniz.",
            ],
        },
        {
            type: "text",
            title: "11. Veri Koruma",
            bullets: [
                `Kişisel veriler, web sitemizdeki Gizlilik Politikası'na uygun olarak işlenir. UK GDPR ve Data Protection Act 2018'e uyarız.`,
                "Hizmeti kullanarak, kişisel verilerinizin Gizlilik Politikası'na uygun olarak işlenmesine onay vermiş olursunuz."
            ]
        },
        {
            type: "text",
            title: "12. Üçüncü Taraf İçerik ve Bağlantılar",
            bullets: [
                "Hizmet, üçüncü taraf web sitelerine ve kaynaklara bağlantılar içerebilir.",
                "Üçüncü taraf sitelerin içeriği, gizlilik politikaları veya uygulamalarından sorumlu değiliz. Bağlantılar yalnızca kolaylık içindir ve onay anlamına gelmez.",
            ],
        },
        {
            type: "text",
            title: "13. Askıya Alma ve Fesih",
            bullets: [
                "Şirket, bu Şartların ihlali, dolandırıcılık, yasa dışı faaliyet, güvenlik veya teknik nedenlerle Hizmete veya Hesabınıza erişiminizi derhal ve bildirimde bulunmaksızın askıya alabilir, kısıtlayabilir veya sonlandırabilir.",
                "Askıya alma veya fesih halinde, size verilen tüm haklar derhal sona erer ve aksi yazılı olarak kararlaştırılmadıkça elinizdeki tüm Ürün kopyalarını silmeli veya imha etmelisiniz. Fesih, önceden kazanılmış hakları veya yükümlülükleri etkilemez."
            ]
        },
        {
            type: "text",
            title: "14. Bu Şartlardaki Değişiklikler",
            bullets: [
                "Şirket, bu Şartları zaman zaman değiştirebilir.",
                "Önemli değişiklikler, kayıtlı kullanıcılara e-posta ile veya Hizmette belirgin bir bildirimle duyurulur.",
                "Değiştirilen Şartlar, bildiride belirtilen tarihte yürürlüğe girer. Yayınlandıktan sonra Hizmeti kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.",
            ],
        },
        {
            type: "text",
            title: "15. Bildirimler",
            bullets: [
                `Şirkete yapılacak tüm bildirimler ${COMPANY_EMAIL} adresine e-posta ile veya kayıtlı adrese posta ile gönderilmelidir.`,
                `Size yapılacak bildirimler e-posta ile veya Hizmette yayınlanarak yapılabilir.`,
            ],
        },
        {
            type: "text",
            title: "16. Geçerli Hukuk ve Yetki",
            bullets: [
                "Bu Şartlar ve bunlardan doğan veya bunlarla bağlantılı tüm uyuşmazlıklar İngiltere ve Galler yasalarına tabidir.",
                "İngiltere ve Galler mahkemeleri münhasır yargı yetkisine sahiptir; ancak İskoçya, Kuzey İrlanda veya AB'de tüketiciyseniz, yerel tüketici koruma yasalarından yararlanabilirsiniz."
            ]
        },
        {
            type: "text",
            title: "17. Muhtelif",
            bullets: [
                "Bu Şartların herhangi bir hükmü geçersiz, yasa dışı veya uygulanamaz bulunursa, o hüküm ayrılır ve kalan hükümler tam olarak yürürlükte kalır.",
                "Şirketin herhangi bir hakkı kullanmaması veya geciktirmesi, o haktan feragat edildiği anlamına gelmez."
            ]
        },
        {
            type: "text",
            title: "18. İletişim Bilgileri",
            bullets: [
                `Şirket: ${COMPANY_LEGAL_NAME}`,
                `Kayıtlı adres: ${COMPANY_ADDRESS}`,
                `Şirket no.: ${COMPANY_NUMBER}`,
                `E-posta: ${COMPANY_EMAIL}`
            ]
        }
    ]
};

export default termsSchema;
