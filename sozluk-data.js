/* ==========================================================================
   PROKONT İNŞAAT VE ŞANTİYE TERİMLERİ SÖZLÜĞÜ (209 TERİM)
   Usta Ağzı & Piyasada Bilinen İsimler ⇄ Resmi Mühendislik Literatürü
   ========================================================================== */

const dictCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'marka_malzeme', name: '⭐ Piyasada Markalaşmış Adlar' },
  { id: 'kalip_demir', name: 'Kalıp, İskele & Donatı' },
  { id: 'kaba', name: 'Kaba Yapı, Beton & Temel' },
  { id: 'ince', name: 'İnce İşler, Sıva & Duvar' },
  { id: 'yalitim_cati', name: 'Yalıtım, Çatı & Cephe' },
  { id: 'tesisat', name: 'Mekanik & Elektrik Tesisat' },
  { id: 'olcum_idari', name: 'Ölçüm, Alet & Şantiye İdaresi' }
];

const dictData = [
  /* ==========================================================================
     1. PİYASADA MARKALAŞMIŞ MALZEME VE ALET ADLARI (USTA & HALK DİLİ)
     ========================================================================== */
  {
    usta: "Ytong",
    literatur: "Otoklavlanmış Havalandırılmış Gazbeton Duvar Bloğu (AAC)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Duvar Malzemesi",
    desc: "Kuvarsit, çimento, kireç ve alüminyum tozu karışımının otoklavda yüksek buhar basıncı altında pişirilmesiyle üretilen, hafif, ısı yalıtımı yüksek ve kolay işlenebilen gözenekli duvar bloğudur.",
    quote: "Duvarcı Ustası: 'Bina hafiflesin diye ara bölmelerin hepsini tuğla yerine 15'lik Ytong ile örüyoruz.'"
  },
  {
    usta: "Hilti",
    literatur: "Elektropnömatik Kırıcı-Delici Ağır Hizmet Matkabı",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Şantiye Aletleri",
    desc: "Şantiyelerde marka adı ürün grubuna mal olmuş; beton kırma, ankraj deliği delme veya tadilatta sert yüzeyleri parçalama amacıyla kullanılan yüksek darbe enerjili el aletidir.",
    quote: "Usta: 'Betonarme kirişi kırmaya kalkmayın, elektrik borusu için tuğla kısımları kırıcıyla açın.'"
  },
  {
    usta: "Strafor / Beyaz Köpük",
    literatur: "Genleştirilmiş Polistiren Sert Köpük Levha (EPS)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Isı Yalıtımı",
    desc: "Stiren monomerinin polimerizasyonu ile elde edilen granüllerin şişirilmesiyle üretilen, %98'i hareketsiz havadan oluşan, ekonomik ve hafif beyaz/gri ısı yalıtım levhasıdır.",
    quote: "Mantolamacı: 'Dış cepheye 5 cm 16 dansite karbonlu strafor yapıştırıp üzerine file çekeceğiz.'"
  },
  {
    usta: "Foamboard / Pembe-Mavi Köpük",
    literatur: "Ekstrüde Polistiren Sert Isı Yalıtım Levhası (XPS)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Zemin & Su Yalıtımı",
    desc: "Ekstrüzyon hattında homojen kapalı gözenekli üretilen; suya ve neme tam dirençli, basma mukavemeti çok yüksek zemin ve temel altı sert yalıtım plakasıdır.",
    quote: "Şantiye Şefi: 'Temel perdelerinin dışına ve şap altına su emmeyen XPS levha döşeyin.'"
  },
  {
    usta: "Kalebodur",
    literatur: "Sırlı Seramik Zemin Karosu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Zemin Kaplama",
    desc: "Türkiye'de seramik sektörünün öncü markasıyla özdeşleşmiş; kil, kaolen ve kuvarsın preslenip fırınlanmasıyla üretilen aşınmaya dayanıklı sırlı zemin kaplama karosudur.",
    quote: "Usta: 'Mutfak ve balkon tabanına 45x45 kaymaz kalebodur siparişi verdik.'"
  },
  {
    usta: "Fayans",
    literatur: "Sırlı Poröz İç Mekan Duvar Seramiği",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Duvar Kaplama",
    desc: "Zemine göre daha gözenekli gövdeye sahip, sadece iç mekan duvarlarında kullanılan, arka yüzeyi su emme oranı yüksek ve kesimi kolay dekoratif sırlı kaplama karosudur.",
    quote: "Fayansçı: 'Banyo duvarlarına tavana kadar beyaz mat fayans döşeyip derzini çekeceğiz.'"
  },
  {
    usta: "Alçıpan / Rigips",
    literatur: "Kartonlu Alçı Duvar ve Tavan Levhası (Gypsum Board)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Kuru Duvar & Tavan",
    desc: "İki yüzeyi özel dayanıklı karton ile kaplanmış, ortası alçı çekirdekten oluşan; bölme duvar, asma tavan ve giydirme duvar yapımında kullanılan hafif montaj plakasıdır.",
    quote: "Alçıpancı: 'Islak hacimlere standart beyaz alçıpan değil, yeşil suya dayanıklı levha takın.'"
  },
  {
    usta: "Betopan",
    literatur: "Çimentolu Yonga Levha / Lifli Çimento Plaka",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Dış Cephe & Prefabrik",
    desc: "Ağaç yongaları ile çimentonun yüksek basınçta preslenmesiyle üretilen; neme, suya, yangına ve çürümeye dayanıklı prefabrik yapı ve dış cephe kaplama levhasıdır.",
    quote: "Usta: 'Prefabrik şantiye binasının dışını betopan ile kaplayıp derzlerini mastikledik.'"
  },
  {
    usta: "Sika",
    literatur: "Yapı Kimyasalı, Beton Katkısı ve Poliüretan Mastik Grubu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Yapı Kimyasalı",
    desc: "Marka adıyla genelleşmiş; beton katkıları, su yalıtım şerbetleri, harç yapıştırıcıları ve yüksek mukavemetli dilatasyon mastiklerini temsil eden kimyasal ürün grubudur.",
    quote: "Usta: 'Havuzun beton harcına su geçirmezlik için Sika katkısı ekleyip karıştırın.'"
  },
  {
    usta: "Onduline",
    literatur: "Bitüm Emdirilmiş Organik Lifli Oluklu Çatı Levhası",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Çatı Kaplama",
    desc: "Geri dönüştürülmüş organik elyafların reçine ve bitümle doyurulup yüksek sıcaklıkta dalgalı levha haline getirilmesiyle üretilen hafif ve ekonomik çatı örtüsüdür.",
    quote: "Çatıcı: 'Müştemilat çatısına ahşap lata çakıp üzerine kırmızı onduline vidaladık.'"
  },
  {
    usta: "Shingle (Şıngıl)",
    literatur: "Kendinden Yapışkanlı Mineral Kaplı Asfalt Çatı Kaplama Pulu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Eğimli Çatı",
    desc: "Cam tülü taşıyıcılı, okside bitümle kaplanmış ve üzeri renkli bazalt granülleriyle süslenmiş; hafif, eğimli ve karmaşık çatılarda uygulanan dekoratif çatı kaplamasıdır.",
    quote: "Usta: 'Çatı eğimi dik olduğu için kiremit yerine OSB üstüne membran ve şıngıl çaktık.'"
  },
  {
    usta: "Pleyvut (Plywood)",
    literatur: "Fenolik Film Kaplı Çok Katmanlı Ahşap Kalıp Kontrplağı",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Kalıp Sistemi",
    desc: "Huş veya çam kaplamalarının fenolik reçineyle çapraz yapıştırılıp yüzeyinin filmle kaplanmasıyla üretilen; betondan pürüzsüz brüt yüzey veren kalıp tahtasıdır.",
    quote: "Kalıpçı: 'Döşeme altına sıfır pleyvut serdik, tavan alçı istemeyecek kadar temiz çıkacak.'"
  },
  {
    usta: "Atermit",
    literatur: "Lifli Çimento Oluklu Çatı Kaplama Levhası",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Endüstriyel Çatı",
    desc: "Asbestsiz elyaflar ve çimento hamurunun kalıplanmasıyla elde edilen; sanayi yapılarında, sundurmalarda yangına ve pasa dayanıklı klasik dalgalı sert çatı plakasıdır.",
    quote: "Usta: 'Deponun çatısına 2.5 metrelik atermitleri kanca cıvatasıyla çelik aşığa bağladık.'"
  },
  {
    usta: "Çimstone / Belenco",
    literatur: "Kuvars Esaslı Kompozit Plaka (Engineered Stone)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Mutfak Tezgahı",
    desc: "%93 oranında doğal kuvars agregası ile polyester reçinenin vakumlu preslenmesiyle üretilen; çizilmez, asit lekesi tutmaz gözeneksiz sert tezgah malzemesidir.",
    quote: "Mermerci: 'Mutfak tezgahına granit yerine leke tutmayan beyaz damarlı Çimstone kestik.'"
  },
  {
    usta: "Corian",
    literatur: "Masif Akrilik Katı Yüzey Kaplama Levhası (Solid Surface)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Lüks Tezgah & Lavabo",
    desc: "Alüminyum trihidrat ve akrilik reçine karışımından üretilen; ek yerleri görünmeden kimyasal olarak kaynatılabilen ve ısıtılarak bükülebilen homojen masif malzemedir.",
    quote: "Mimar: 'Ameliyathane tezgahlarını derzsiz ve antibakteriyel olsun diye Corian yaptık.'"
  },
  {
    usta: "Dekton",
    literatur: "Ultra Sıkıştırılmış Porselen Kompakt Yüzey Plakası",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Ultra Yüzey",
    desc: "Cam, porselen ve kuvars ham maddelerinin 25.000 tonluk pres altında sinterlenmesiyle üretilen; ateşe, çizilmeye ve UV ışınlarına %100 dayanıklı yeni nesil yüzeydir.",
    quote: "Usta: 'Dekton tezgaha kızgın tavayı doğrudan koysanız bile ne yanar ne de çatlar.'"
  },
  {
    usta: "Plexi (Pleksi)",
    literatur: "Akrilik Levha / Polimetil Metakrilat (PMMA)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Dekorasyon & Cam",
    desc: "Cama göre 6 kat daha dayanıklı, ışık geçirgenliği yüksek, ısıyla kolay şekil verilebilen ve kırıldığında keskin parça saçmayan şeffaf termoplastik levhadır.",
    quote: "Tabelacı: 'Korkuluk aralarına cam yerine kırılmaz şeffaf pleksi paneller taktık.'"
  },
  {
    usta: "Pimaş",
    literatur: "Sert PVC Esaslı Contalı Atık Su Borusu (PVC-U)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Pis Su Tesisatı",
    desc: "Bina içi atık suların ve yağmur suyunun kanalizasyona iletilmesinde kullanılan; gri renkli, muflu ve kauçuk contalı sert polivinil klorür borulardır.",
    quote: "Tesisatçı: 'Düşey kolon hattına 110'luk pimaş, lavabo giderlerine ise 50'lik boru bağladık.'"
  },
  {
    usta: "PPRC (Plastik Su Borusu)",
    literatur: "Polipropilen Rastgele Kopolimer Temiz Su Borusu (PP-R)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Temiz Su",
    desc: "Demir boruların yerini alan; pafta makinesiyle 260°C'de moleküler olarak kaynatılan, paslanmaz ve kireç tutmaz beyaz/yeşil polimer temiz su borusudur.",
    quote: "Usta: 'Sıcak ve soğuk su hatlarını folyolu PPRC boru ile çekip teste tabi tuttuk.'"
  },
  {
    usta: "Alikobant (Alucobond)",
    literatur: "Alüminyum Kompozit Dış Cephe Paneli (ACP)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Cephe Kaplama",
    desc: "İki alüminyum levha arasına polietilen veya mineral dolgu lamine edilerek üretilen; modern binaların cephe giydirmesinde kullanılan rijit ve hafif paneldir.",
    quote: "Cepheci: 'Plazanın dış cephesine karkas kurup antrasit gri alikobant panelleri astık.'"
  },
  {
    usta: "Beton Kontak / Şeffaf Astar",
    literatur: "Silika Kumlu Sentetik Reçine Aderans Artırıcı Astar",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Sıva Öncesi Tutunma",
    desc: "Kaygan ve pürüzsüz brüt beton tavan ve duvarlara alçı/sıva vurulmadan önce sürülen, yüzeye zımpara gibi pürüzlü diş kazandıran reçine esaslı astardır.",
    quote: "Boyacı: 'Tavandaki brüt betona astar sürmeden alçı çekersen seneye parça parça dökülür.'"
  },
  {
    usta: "Silikon",
    literatur: "Polisilikon Esaslı Elastik Sızdırmazlık Dolgu Maddesi",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Sızdırmazlık",
    desc: "Lavabo, küvet kenarları ve cam montajlarında kullanılan; suya dayanıklı, esnek ancak üzeri boya tutmayan silikon polimer dolgu kimyasalıdır.",
    quote: "Usta: 'Duşakabin kenarına antibakteriyel duş silikonu çekin ki zamanla kararma yapmasın.'"
  },
  {
    usta: "Akrilik Mastik",
    literatur: "Su Bazlı Akrilik Dispersiyon Esaslı Boyanabilir Derz Dolgusu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Boya & Derz",
    desc: "Süpürgelik, kapı kasası ve alçıpan birleşimlerindeki çatlakları doldurmak için kullanılan; kuruduktan sonra boyanabilen ekonomik mastiktir.",
    quote: "Ressam/Boyacı: 'Kapı pervazlarının duvarla birleştiği çatlaklara akrilik mastik çekip boyayacağız.'"
  },
  {
    usta: "Poliüretan Mastik",
    literatur: "Yüksek Modüllü Elastomerik Dış Cephe Derz Dolgusu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Cephe & Prekast",
    desc: "Dış cephe prekast derzlerinde, dilatasyonlarda ve pencere kasası dış kenarında kullanılan; UV ışınlarına, dona ve esnemeye tam dirençli yapıştırıcı dolgudur.",
    quote: "Usta: 'Alüminyum doğramanın dışına normal silikon değil, poliüretan mastik basacaksınız.'"
  },
  {
    usta: "Poliüretan Köpük (Montaj Köpüğü)",
    literatur: "Tek Bileşenli Nemle Kürlenen Boşluk Dolgu ve İzolasyon Köpüğü",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Montaj & Boşluk",
    desc: "Kapı ve pencere kasalarının montaj boşluklarına sıkılan; havadaki nemle temas edince şişerek 30-40 kat genleşip sertleşen ısı/ses yalıtım köpüğüdür.",
    quote: "Kapıcı: 'Kör kasayla kapı arasındaki boşluğa montaj köpüğü sıkıp kurumasını bekleyin.'"
  },
  {
    usta: "Stropiyer",
    literatur: "EPS Köpükten Ekstrüde Edilmiş Hafif Tavan Kartonpiyeri",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Tavan Dekoru",
    desc: "Geleneksel ağır alçı kartonpiyer yerine polistiren köpükten üretilen; hafifliği sayesinde su bazlı yapıştırıcıyla tavana kolayca yapıştırılan dekoratif bordürdür.",
    quote: "Dekoratör: 'Tavan köşelerine alçı yerine pratik ve hafif stropiyer yapıştırıp boyadık.'"
  },
  {
    usta: "Mineflo",
    literatur: "PVC Esaslı Heterojen Rulo Zemin Kaplaması",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Zemin Kaplama",
    desc: "Geniş rulolar halinde serilen; ahşap veya taş desenli, suya dayanıklı, kolay silinen ve ekonomik sentetik zemin kaplama örtüsüdür.",
    quote: "Usta: 'Ofis zeminine su geçirmeyen ahşap desenli mineflo serip kenarlarını süpürgelikle kapattık.'"
  },
  {
    usta: "Halıfleks",
    literatur: "Tufting / İğneleme Tekniği ile İmal Edilmiş Duvardan Duvara Halı",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Zemin & Akustik",
    desc: "Mekan tabanını bütünüyle kaplayan, adım ve yankı sesini emen, alt tabanı lateks veya jüt kaplı rulo tekstil zemin kaplamasıdır.",
    quote: "Otel Müdürü: 'Koridorların adım sesini kesmesi için alev yürütmez tabanlı halıfleks döşettik.'"
  },
  {
    usta: "Isıcam (Çift Cam)",
    literatur: "Yalıtımlı Çift Cam Ünitesi (Insulating Glass Unit - IGU)",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Pencere Sistemleri",
    desc: "İki cam plakanın arasına nem alıcı dolgulu alüminyum çıta konularak ve içi kuru hava/argon gazı ile doldurularak kapatılmış standart ısı yalıtımlı camdır.",
    quote: "Pencerici: 'PVC doğramalara 4+16+4 mm ölçüsünde standart Isıcam taktık.'"
  },
  {
    usta: "Konfor Cam / Sinerji Cam",
    literatur: "Low-E (Düşük Yayınımlı) Güneş ve Isı Kontrol Kaplamalı Cam",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Yüksek Tasarruf",
    desc: "Cam yüzeyine mikron düzeyinde metal oksit tabakası püskürtülerek kışın evin içindeki sıcaklığı içeri hapseden, yazın ise güneşin yakıcı ısısını engelleyen akıllı camdır.",
    quote: "Mühendis: 'Güney cepheye Konfor Cam koyduk, yazın klima kışın kombi faturaları yarıya inecek.'"
  },
  {
    usta: "Rabitz Teli (Tavşan Teli)",
    literatur: "Galvanizli İnce Altıgen Tel Örgü / Sıva Taşıyıcı File",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Sıva Donatısı",
    desc: "Farklı malzemelerin (örneğin beton ile tuğla) birleşim yerlerine çakılarak sıvanın çatlamasını engelleyen galvanizli bükümlü ince tel kafestir.",
    quote: "Sıvacı: 'Kolon ile tuğlanın kesiştiği hatta rabitz teli çivileyin, sıva çatlayıp hat vermesin.'"
  },
  {
    usta: "Tesisat Keteni",
    literatur: "Doğal Lifli Konik Dişli Boru Sızdırmazlık Malzemesi",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Sıhhi Tesisat",
    desc: "Dişli boru ve fittings bağlantılarında diş aralarına sarılan; suyla temas edince hafifçe şişerek sızdırmazlığı garanti eden geleneksel doğal bitkisel liftir.",
    quote: "Tesisatçı: 'Metal dişli boruya önce keteni sarıp macun sür, sonra sık; ömür boyu su damlatmaz.'"
  },
  {
    usta: "Teflon Bant",
    literatur: "Politetrafloroetilen (PTFE) Diş Sızdırmazlık Şeridi",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Tesisat Montajı",
    desc: "Musluk, ara vana ve dişli parçaların montajında keten yerine sarılan, kimyasallara dayanıklı beyaz renkli elastik PTFE polimer filmdir.",
    quote: "Usta: 'Taharet musluğunun dişlerine saat yönünde 10 tur teflon bant sarıp yerine takın.'"
  },
  {
    usta: "Şalümo",
    literatur: "Propan / LPG Yakıtlı Alev Püskürtücü Membran Yakıcı Başlık",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Su Yalıtım Aracı",
    desc: "Tüp gazla çalışan, kontrollü yüksek ısıda alev üreterek bitümlü su yalıtım membranının altındaki polietilen filmi eritip zemine yapıştıran meşale aletidir.",
    quote: "Yalıtım Ustası: 'Şalümonun alevini fazla tutmayın, membranı yakmadan ziftini eritip bastırın.'"
  },
  {
    usta: "Şilte / Kapron",
    literatur: "Polietilen Köpük / XPS Parke Altı Ses ve Nem Yalıtım Şiltesi",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Zemin Yalıtımı",
    desc: "Laminat parke döşenmeden önce şapın üzerine serilen; zemindeki küçük pürüzleri tolere eden, nem bariyeri oluşturan ve topuk sesini azaltan süngerimsi örtüdür.",
    quote: "Parkeci: 'Şapın üzerine 3 milimlik yeşil kapron serip bantladık, üzerine parkeyi kilitliyoruz.'"
  },
  {
    usta: "LVT / SPC Vinil",
    literatur: "Taş-Plastik Kompozit (Stone Plastic Composite) Zemin Kaplaması",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Yeni Nesil Zemin",
    desc: "Kireçtaşı tozu ve polimerlerin preslenmesiyle üretilen; %100 suya dayanıklı, şişme yapmayan ve yerden ısıtmaya tam uyumlu yeni nesil sert kilitli yer kaplamasıdır.",
    quote: "Mimar: 'Banyo ve mutfak dahil tüm eve parke desenli SPC vinil döşettik, su dökülse de bozulmaz.'"
  },
  {
    usta: "Briket",
    literatur: "Pomza veya Cüruf Esaslı Boşluklu Hafif Beton Duvar Bloğu",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Kaba Duvar",
    desc: "Çimento, su ve volkanik pomza/cürufun kalıplarda preslenip kurutulmasıyla elde edilen; özellikle bahçe duvarlarında ve bodrumlarda kullanılan ekonomik bloktur.",
    quote: "Usta: 'Bahçe çevre istinat hattını 20'lik pomza briket ile örüp üzerine hatıl attık.'"
  },
  {
    usta: "Taş Yünü",
    literatur: "Bazalt Kayacı Lifli A1 Yanmaz Doğal Isı ve Akustik Yalıtım Levhası",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "A1 Yangın Dayanımı",
    desc: "Bazalt taşının 1500°C'de eritilip elyaf haline getirilmesiyle üretilen; 1000°C sıcaklığa dayanabilen, ses yutuculuğu mükemmel A1 yanmaz yalıtım levhasıdır.",
    quote: "Şantiye Şefi: 'Yangın yönetmeliği gereği yüksek katlı binanın tüm dış cephesini taş yünüyle kapladık.'"
  },
  {
    usta: "Cam Yünü",
    literatur: "Erimiş Cam Lifli Rulo Isı ve Ses Yalıtım Şiltesi",
    cat: "marka_malzeme",
    catName: "Piyasada Markalaşmış Adlar",
    tag: "Çatı Arası Yalıtım",
    desc: "Geri dönüştürülmüş camın eritilip liflendirilmesiyle üretilen; çatı aralarında döşeme üzerine serilen veya alçıpan bölme duvarların arasına konulan sarı hafif yalıtım şiltesidir.",
    quote: "Usta: 'Çatı arasındaki döşemenin üzerine sarı folyolu cam yünü şiltesini serip bıraktık.'"
  },

  /* ==========================================================================
     2. KALIP, İSKELE & DONATI (DEMİR-ÇELİK) TERİMLERİ
     ========================================================================== */
  {
    usta: "Paspayı",
    literatur: "Net Beton Örtü Tabakası (Concrete Cover)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Korozyon & Yangın",
    desc: "Betonarme donatısının dış çevre etkilerinden, nemden ve yangından korunması için kalıp yüzeyi ile çelik donatı arasında bırakılan zorunlu emniyet mesafesidir.",
    quote: "Mühendis: 'Kiriş altlarına ve perde kenarlarına plastik paspayı takın, demir kalıba yapışmasın.'"
  },
  {
    usta: "Çiroz (S-Kanca / Fiyonk)",
    literatur: "Enine Donatı Tutucu / Çift Taraflı Donatı Bağ Elemanı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Deprem Şartnamesi",
    desc: "Perde duvarlarda veya kolonlarda karşılıklı iki düşey donatı hasırını birbirine bağlayarak beton dökümünde kalıbın şişmesini ve depremde çubukların burkulmasını önleyen kancadır.",
    quote: "Usta: 'Perdede metrekareye en az 4 tane çiroz demiri takın, yoksa vibratör vurunca açar.'"
  },
  {
    usta: "Tayrot (Tie-Rod) ve Kelebek",
    literatur: "Kalıp Gergi Mili & Ankraj Kilidi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kalıp Güvenliği",
    desc: "Perde ve kolon kalıplarının taze betonun yüksek hidrolik basıncıyla dışa patlamasını engellemek için kalıp kanatları arasından geçirilen yüksek mukavemetli çelik mildir.",
    quote: "Usta: 'Tayrot borularının kafasına plastik koni takmayı unutmayın, mil betona kaynamasın.'"
  },
  {
    usta: "Filiz (Donatı Filizi)",
    literatur: "Betonarme Ek Bağlantı Donatısı (Starter Bars / Dowel)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Statik Süreklilik",
    desc: "Dökülen beton elemandan bir sonraki dökülecek üst kat kolonuna veya yan perdeye monolitik bağlantı sağlamak için dışarıda bırakılan boyuna donatı uçlarıdır.",
    quote: "Statikçi: 'Kolon filiz boyunu en az 50 phi (çap) uzunluğunda bırakın, bindirme kısa kalmasın.'"
  },
  {
    usta: "Nervürlü Demir (Yivli Demir)",
    literatur: "B420C / B500C Yüksek Sünekliğe Sahip Çıkıntılı Donatı Çeliği",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Deprem Güvenliği",
    desc: "Yüzeyinde balıksırtı çıkıntıları olan, betonla çelik arasındaki kenetlenmeyi (aderansı) maksimuma çıkaran modern deprem dayanımlı inşaat demiridir.",
    quote: "Şantiye Şefi: 'Deprem bölgelerinde düz demir yasaktır, projede sadece nervürlü B420C kullanılır.'"
  },
  {
    usta: "Düz Demir",
    literatur: "S220 Düz Yüzeyli Betonarme Çeliği",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Tarihi İmalat",
    desc: "Eski binalarda kullanılan, yüzeyinde nervür bulunmayan, betondan sıyrılma riski yüksek olduğu için günümüz taşıyıcı betonarme yapılarında yasaklanan demirdir.",
    quote: "Kentsel Dönüşüm Uzmanı: 'Eski binanın karotunda düz demir çıktı, aderansı sıfırlanmış.'"
  },
  {
    usta: "Firkete",
    literatur: "Taşıma Amaçlı Ortadan İkiye Katlanmış 12m Donatı Çeliği",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Lojistik & Demir",
    desc: "Fabrikadan çıkan standart 12 metrelik inşaat demirlerinin kamyon kasasında taşınabilmesi için tam ortasından 'U' şeklinde katlanmış sevk halidir.",
    quote: "Demirci: 'Kamyondan inen firkete demirleri vinçle açma tezgahına alıp doğrulttuk.'"
  },
  {
    usta: "Pilye",
    literatur: "Açıklık ve Mesnet Kesme Kuvveti Donatısı (Kıvrımlı Çubuk)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Geleneksel Statik",
    desc: "Kiriş ve döşemelerde açıklıkta pozitif momenti, mesnette ise 45° yukarı kırılarak negatif momenti ve kesme kuvvetini karşılamak için bükülen çubuktur.",
    quote: "Usta: 'Döşeme demirini bağlarken pilye bükümlerini tam mesnet hizasından kırın.'"
  },
  {
    usta: "Etriye",
    literatur: "Kapalı Enine Donatı Sargısı (Tie / Stirrup)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Deprem Dayanımı",
    desc: "Kolon ve kirişlerde boyuna demirleri çepeçevre saran, kesme kuvvetini karşılayan ve depremde beton çekirdeğini dağılmadan bir arada tutan halka donatıdır.",
    quote: "Mühendis: 'Etriye kancalarını 135 derece bükün ve kolon birleşimlerinde 10 cm'de bir sıklaştırın.'"
  },
  {
    usta: "Etriye Sıklaştırma Bölgesi",
    literatur: "Kritik Deprem Sargı Bölgesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Deprem Yönetmeliği",
    desc: "Kolonların alt ve üst uçlarında, kirişlerin ise mesnet birleşimlerinde en büyük momentlerin oluştuğu noktalarda etriye aralığının yarı yarıya sıklaştırıldığı kritik bölgedir.",
    quote: "Şantiye Denetmeni: 'Kolonun alt 1 metresinde etriyeleri 8 cm arayla bağlayın, projeye uyun.'"
  },
  {
    usta: "Montaj Donatısı",
    literatur: "Kiriş Üst Başlık Taşıyıcı ve Etriye Tutucu Donatısı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Donatı Düzeni",
    desc: "Kirişlerin üst bölgesinde etriyeleri ayakta tutmak ve kafes sistem oluşturmak amacıyla konulan, doğrudan çekme momenti taşımayan kılavuz donatıdır.",
    quote: "Demirci: 'Kiriş kafesini bağlarken önce montaj demirlerini sehpalara alıp etriyeleri dizdik.'"
  },
  {
    usta: "Tevzi Donatısı (Dağıtma Donatısı)",
    literatur: "İkincil Yük Dağıtma Donatısı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Döşeme Donatısı",
    desc: "Tek doğrultuda çalışan plak döşemelerde ana taşıyıcı donatıya dik yönde bağlanan, yükün tek noktada toplanmayıp genele yayılmasını sağlayan donatıdır.",
    quote: "Usta: 'Döşemenin ana demirlerini attıktan sonra üzerine 20 cm arayla tevzi donatısı bağladık.'"
  },
  {
    usta: "Hasır Çelik (Çelik Hasır)",
    literatur: "Soğuk Çekme Punta Kaynaklı Donatı Ağı (B500A)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Hızlı Donatı",
    desc: "Yüksek akma sınırına sahip soğuk çekme çubukların fabrikada kare ızgara şeklinde punto kaynağıyla birleştirilmesiyle üretilen pratik döşeme ve perde ağıdır.",
    quote: "Usta: 'Saha betonuna ve radye temele elle demir bağlamak yerine Q tipi hasır çelik serdik.'"
  },
  {
    usta: "Sehpa Donatısı",
    literatur: "Üst Donatı Mesafe ve Yükseklik Taşıyıcı Sehpası",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kot Güvenliği",
    desc: "Radye temel veya plak döşemelerde üst kat demir ağının beton dökülürken üzerine basıldığında aşağı çökmesini engelleyen Z veya sandalye şekilli çelik ayaklardır.",
    quote: "Usta: 'Radyede metrekareye bir sehpa koyun, betoncular üstünde yürürken demir çökmesin.'"
  },
  {
    usta: "Bindirme Boyu (Ek Boyu)",
    literatur: "Donatı Bindirmeli Ek Uzunluğu (Lap Splice Length)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Yük Aktarımı",
    desc: "İki boyuna donatı çubuğunun kuvvet aktarabilmesi için yan yana getirilerek tel ile bağlandığı, çapa bağlı olarak hesaplanan asgari örtüşme mesafesidir.",
    quote: "Mühendis: 'Q20 demir için bindirme boyu en az 100 cm olacak, kısa bindiren ekleri kabul etmem.'"
  },
  {
    usta: "Kenetlenme Boyu",
    literatur: "Donatının Betona Gömülme / Tutunma Boyu (Development Length)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Aderans Güvenliği",
    desc: "Bir donatının çekme kuvveti altındayken betondan sıyrılıp fırlamaması için beton kütlesinin içine girmesi gereken minimum kritik uzunluktur.",
    quote: "Statikçi: 'Kiriş demirini kolonun içine kadar uzatıp gönyesini kırarak kenetlenmeyi tamamlayın.'"
  },
  {
    usta: "Kanca (135° Deprem Kancası)",
    literatur: "Standart Donatı Uç Kancası Ankrajı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Deprem Standardı",
    desc: "Etriye ve çirozların uçlarının 90 derece yerine mutlaka 135 derece bükülerek beton çekirdeğinin içine kıvrılması zorunlu olan deprem kilidi kancasıdır.",
    quote: "Denetçi: '90 derece bükülen etriye depremde açılır, tüm kancalar 135 dereceye çevrilecek!'"
  },
  {
    usta: "Tij (Saplama / Gijon)",
    literatur: "Metrik Diş Açılmış Boyuna Çelik Askı Çubuğu (Threaded Rod)",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Askı Sistemi",
    desc: "Boydan boya diş açılmış çelik mil; asma tavan, havalandırma kanalı ve boru tesisatını tavandaki betona çelik dübelle asmak için kullanılır.",
    quote: "Tesisatçı: 'Kablo tavalarını tavana M10 tijler ve çelik çakma dübellerle sabitledik.'"
  },
  {
    usta: "Teleskopik Direk (Kalıp Dikmesi)",
    literatur: "Ayarlanabilir Çelik Boru Tipi Döşeme İskele Dikmesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kalıp Taşıyıcı",
    desc: "Döşeme ve kiriş kalıbının altını destekleyen, iç içe geçen iki borudan oluşan ve pim mekanizmasıyla yüksekliği milimetrik ayarlanan çelik dikmedir.",
    quote: "Kalıpçı: 'Döşeme altına teleskopik dikmeleri dikip krikolarından teraziye kaldırdık.'"
  },
  {
    usta: "H-20 Ahşap Kiriş",
    literatur: "Endüstriyel Masif Başlıklı Kalıp Kirişi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Modern Kalıp",
    desc: "Kalıp sistemlerinde pleyvutların altına döşenen, 20 cm yüksekliğinde yüksek eğilme dayanımlı sarı renkli mühendislik ahşap kirişidir.",
    quote: "Usta: 'Geleneksel 10x10 kalas yerine sehpa aralıklarını açabilen H-20 kiriş kullandık.'"
  },
  {
    usta: "Masa İskele",
    literatur: "Modüler Taşınabilir Ağır Yük Döşeme Kalıp Masası",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Endüstriyel Kalıp",
    desc: "Geniş kat döşemelerinde sökülmeden tekerlek üzerinde yürütülen veya vinçle üst kata tek parça halinde uçurulan hazır kalıp ünitesidir.",
    quote: "Şantiye Şefi: 'AVM projesinde masa iskele kullanarak kat döküm süresini 4 güne düşürdük.'"
  },
  {
    usta: "Flanşlı İskele (Kamalı İskele)",
    literatur: "Güvenlikli Modüler Çelik Cephe ve Ağır Yük İskelesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "İş Güvenliği",
    desc: "Üzerinde 50 cm'de bir delikli flanşlar bulunan, yatay ve diyagonal boruların çekiçle kamalanarak kilitlendiği devrilmez modern güvenlikli iskeledir.",
    quote: "İSG Uzmanı: 'Eski boru iskeleler yasaklandı, tüm dış cephede onaylı flanşlı iskele kurulacak.'"
  },
  {
    usta: "Kalıp Yağı",
    literatur: "Kalıp Ayırıcı Kimyasal Emülsiyon",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Yüzey Kalitesi",
    desc: "Beton dökülmeden önce pleyvut ve saç kalıpların yüzeyine püskürtülen; betonun kalıba yapışmasını önleyerek kolay söküm ve temiz yüzey sağlayan yağdır.",
    quote: "Kalıpçı: 'Demiri bağlamadan önce pleyvuta kalıp yağı sürün, demire yağ bulaştırmayın.'"
  },
  {
    usta: "Tayrot Borusu ve Koni",
    literatur: "Kalıp Gergi Mili Koruyucu Kılıf Borusu ve Mesafe Konisi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kalıp Aksesuarı",
    desc: "Tayrot demirinin beton içinde sıkışıp kalmasını önleyen sert plastik boru ve iki ucuna takılan su sızdırmazlık sağlayan konik tapalardır.",
    quote: "Usta: 'Tayrot borularını perde kalınlığına göre net kesin, konilerini takıp öyle gerdirin.'"
  },
  {
    usta: "Pah Çıtası (Üçgen Çıta)",
    literatur: "Betonarme Köşe Pahı Oluşturucu PVC Profil",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Köşe Kırımı",
    desc: "Kolon ve perde kalıplarının iç köşelerine çakılan üçgen kesitli çıta; beton döküldüğünde köşelerin keskin değil 45 derece kırık ve dayanıklı çıkmasını sağlar.",
    quote: "Kalıpçı: 'Kolon kalıbının dört köşesine pah çıtası çaktık, köşeler çarpınca kırılmaz.'"
  },
  {
    usta: "Çiroz Mandalı (Kalıp Kilidi)",
    literatur: "Eksantrik Kollu Mekanik Kalıp Sıkıştırma Mandalı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kalıp Aparatı",
    desc: "Kalıp dışına çıkan donatı çirozunu özel sıkıştırma anahtarıyla gerdirip kamasıyla kilitleyen döküm çelik mekanizmadır.",
    quote: "Usta: 'Kolon kalıbının kanatlarını çiroz mandallarıyla gerdirip anahtarla sıktık.'"
  },
  {
    usta: "Demir Bükme Anahtarı",
    literatur: "Kaldıraç Kollu Manuel Donatı Bükme Çatalı",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Demirci Aleti",
    desc: "Şantiyede demirci ustalarının donatı uçlarını elle 90° veya 135° bükmek için kullandığı iki tırnaklı uzun kollu çelik manivela aletidir.",
    quote: "Demirci: 'Kolon filizlerini teraziye sokmak için bükme anahtarıyla hafifçe kaçırdık.'"
  },
  {
    usta: "Kerpeten",
    literatur: "Demirci Bağ Teli Kesme ve Burgulama Pensesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Demirci Aleti",
    desc: "Donatı çubuklarının kesişim yerlerini tavlı bağ teliyle sımsıkı bağlayıp tel ucunu tek hamlede kesmek için özel tasarlanmış sivri burunlu ağır el aletidir.",
    quote: "Usta: 'Demir bağlarken kerpeteni iki tur döndürüp teli koparın, gevşek bağlama yapmayın.'"
  },
  {
    usta: "Bağ Teli (Tavlı Tel)",
    literatur: "Yumuşak Tavlanmış Düşük Karbonlu Donatı Bağlama Teli",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Donatı Montajı",
    desc: "Isıl işlemle yumuşatılmış 1.2 - 1.5 mm çapında, paslanmaz olmayan ancak kolay bükülen ve demir kafesin dağılmasını önleyen montaj telidir.",
    quote: "Demirci: 'Kiriş etriyelerini bağlamak için iki kangal 16'lık tavlı bağ teli getirin.'"
  },
  {
    usta: "Karot (Karot Delgi)",
    literatur: "Elmas Uçlu Döner Karot Numune ve Tesisat Delme Makinesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Numune & Delgi",
    desc: "Sertleşmiş betondan basınç deneyi için silindirik numune çıkaran veya tesisat borusu geçirmek için demirli betonu titreşimsiz delip çıkaran su soğutmalı elmas alettir.",
    quote: "Laborant: '28 günlük basınç dayanımı için perdeden 100 mm çapında karot numunesi aldık.'"
  },
  {
    usta: "Kimyasal Dübel (Epoksi Ankraj)",
    literatur: "Tiksotropik Epoksi/Akrilat Esaslı Donatı Ekim Reçinesi",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Beton Güçlendirme",
    desc: "Mevcut eski betonda matkapla açılan deliğe sıkılan ve içine yeni donatı çeliği sokularak çeliğin betona kopmayacak şekilde kaynaklanmasını sağlayan iki bileşenli harçtır.",
    quote: "Güçlendirmeci: 'İlave kolon için döşemeyi delip hava ile temizledik, epoksi sıkıp filiz ektik.'"
  },

  /* ==========================================================================
     3. KABA YAPI, BETON & TEMEL TERİMLERİ
     ========================================================================== */
  {
    usta: "Grobeton",
    literatur: "Düşük Dozlu Tesviye ve Koruma Betonu (C8/10 - C12/15)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Temel Altı",
    desc: "Hafriyat tabanındaki toprağın üzerine dökülen; temel donatısının çamura batmasını önleyen ve membran su yalıtımına düz zemin hazırlayan demirsiz zayıf betondur.",
    quote: "Usta: 'Temel hafriyatı bitti, yarın tabana 10 cm grobeton döküp membran sereceğiz.'"
  },
  {
    usta: "Slump (Çökme Testi)",
    literatur: "Taze Beton Kıvam ve İşlenebilirlik Deneyi (Abrams Konisi)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kalite Deneyi",
    desc: "Standart 30 cm'lik kesik koni kalıba doldurulan taze betonun kalıp çekildikten sonra yerçekimiyle ne kadar çöktüğünü cm cinsinden ölçen kıvam kontrol deneyidir.",
    quote: "Şantiye Şefi: 'S4 kıvam beton istedik, slump 18 çıktı; betona fazladan bir damla bile su ekletmeyin!'"
  },
  {
    usta: "Segregasyon (Çakıllanma / Ayrışma)",
    literatur: "Betonda Faz Ayrışması ve Peteklenme Kusuru (Honeycomb)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Döküm Hatası",
    desc: "Betonun yüksekten kontrolsüz serbest dökülmesi veya aşırı vibratör tutulması sonucu iri çakılların dibe çöküp çimento şerbetinin üste çıkmasıyla oluşan mukavemetsiz boşluk hatasıdır.",
    quote: "Mühendis: 'Kalıbı açınca kolon dibinde segregasyon gördük; vibratörü tek yerde sabit tutmuşsunuz!'"
  },
  {
    usta: "Vibratör (Şişe Vibratör)",
    literatur: "Dahili Yüksek Frekanslı Taze Beton Kompaksiyon Cihazı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Beton Sıkıştırma",
    desc: "Dökülen taze betonun içindeki sıkışmış havayı dışarı atmak ve betonun demirlerin en dar aralıklarına dolmasını sağlamak için daldırılan titreşimli hortumlu şantiye makinesidir.",
    quote: "Usta: 'Vibratör şişesini düşey batırın, bir önceki tabakaya 10 cm saplayıp yavaşça geri çekin.'"
  },
  {
    usta: "Dış Vibratör (Kalıp Titretici)",
    literatur: "Kalıp Yüzeyine Bağlanan Harici Titreşim Motoru",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Prekast & Tünel",
    desc: "İçine şişe vibratör sokulamayacak kadar sık demirli perdelerde veya prekast kalıplarda, kalıbın dış çelik gövdesine vidalanarak betonu titreten motordur.",
    quote: "Prekastçı: 'Dar perde kalıbının dışına iki tane kalıp vibratörü bağlayıp pürüzsüz yüzey aldık.'"
  },
  {
    usta: "Helikopter (Perdah Makinesi)",
    literatur: "Motorlu Döner Bıçaklı Beton Yüzey Perdahlama ve Sertleştirme Makinesi",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Saha Betonu",
    desc: "Saha betonlarında veya şaplarda beton suyunu çekmeye başladığında yüzey sertleştirici tozu yedirip zemini parlatarak aşınmaz hale getiren pervaneli makinedir.",
    quote: "Usta: 'Beton hafif ayak basacak sertliğe geldiğinde helikopteri çalıştırıp tepsiyle perdahlayın.'"
  },
  {
    usta: "Kürleme (Beton Sulama)",
    literatur: "Beton Hidratasyon Süreci Sıcaklık ve Nem Bakımı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Dayanım Gelişimi",
    desc: "Taze dökülen betonun çimento hidratasyon reaksiyonu için suyunu kaybetmemesi amacıyla ilk 7-14 gün boyunca sulanması veya kür kimyasalı püskürtülerek korunmasıdır.",
    quote: "Şantiye Şefi: 'Güneşin altında tabliyeyi susuz bırakmayın, beton terlemeden yanar ve çatlar!'"
  },
  {
    usta: "Soğuk Derz (İnşaat Derzi)",
    literatur: "Planlanmamış Zayıf Beton Ara Kesiti (Cold Joint)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kritik Kusur",
    desc: "Pompa arızası veya mikser gecikmesi sebebiyle ilk dökülen tabakanın priz alıp katılaşmasından sonra üzerine yeni beton dökülmesiyle arada oluşan zayıf yapışma çizgisidir.",
    quote: "Mühendis: 'Mikser 2 saat gecikince döşemede soğuk derz oluştu, birleşim yerine aderans reçinesi sürün.'"
  },
  {
    usta: "Dilatasyon",
    literatur: "Yapısal Genleşme, Oturma ve Sismik Ayrım Derzi",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Statik & Mimari",
    desc: "Büyük ölçekli binaların sıcaklık genleşmelerinde veya deprem esnasında birbirine çarpmaması için bina blokları arasında bırakılan 3 ila 10 cm'lik tam boşluk ayrımıdır.",
    quote: "Mimar: 'A ve B blokları arasında 5 cm dilatasyon bıraktık, şapı ve seramiği bu çizgiye bağlamayın.'"
  },
  {
    usta: "Lento",
    literatur: "Açıklık Üstü Yük Taşıyıcı Kirişçik (Lintel)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Duvar Donatısı",
    desc: "Kapı ve pencere açıklıklarının üstüne gelen duvar yükünü taşıyıp yan duvar ayaklarına ileten, boşluğun çökmesini önleyen hazır gazbeton veya betonarme kiriştir.",
    quote: "Duvarcı: 'Kapı boşluğunun üstüne lentoyu en az 20 cm bindirin ki köşeden çatlama yapmasın.'"
  },
  {
    usta: "Hatıl",
    literatur: "Duvar Rijitliğini Artırıcı Yatay ve Düşey Betonarme Kuşak",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Yığma & Duvar",
    desc: "Yığma veya gazbeton duvarların devrilmesini önlemek amacıyla kat seviyesinde ya da 3 metreyi aşan duvar yüksekliklerinde atılan demirli betonarme bağlayıcı kuşağıdır.",
    quote: "Usta: 'Fabrika duvarı 6 metre yüksekliğinde, tam 3. metreye demirli yatay hatıl betonu döküyoruz.'"
  },
  {
    usta: "Radye Temel (Radye Jeneral)",
    literatur: "Tüm Bina Tabanını örten Sürekli Betonarme Temel Plağı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Temel Sistemi",
    desc: "Binanın tüm kolon ve perdelerinden gelen yükü tek bir devasa betonarme plaka olarak zemine yayan, farklı oturmaları engelleyen en güvenli temel tipidir.",
    quote: "Mühendis: 'Zemin zayıf olduğu için tekil temel yerine 80 cm kalınlığında radye temel yaptık.'"
  },
  {
    usta: "Mütemadi Temel (Sürekli Kirişli Temel)",
    literatur: "Bir Doğrultuda Kolonları Birbirine Bağlayan Sürekli Temel",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Temel Çeşidi",
    desc: "Kolonların altına tek tek pabuç yapmak yerine kolon sıralarını ters kirişlerle birbirine bağlayan şerit şeklindeki temel sistemidir.",
    quote: "Statikçi: 'Villa projesinde radye yerine iki yönde mütemadi sürekli temel kirişleri çözüldü.'"
  },
  {
    usta: "Münferit Temel (Tekil Pabuç)",
    literatur: "Ayrık Kolon Altı Tekil Temel Pabucu (Isolated Footing)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Noktasal Temel",
    desc: "Sert ve sağlam zeminlerde, her kolonun altına sadece o kolonun yükünü taşıyacak büyüklükte yapılan bağımsız betonarme pabuç temeldir.",
    quote: "Usta: 'Çelik hangar kolonlarının altına 1.5x1.5 metre boyutunda münferit pabuç temeller döktük.'"
  },
  {
    usta: "Fore Kazık",
    literatur: "Büyük Çaplı Yerinde Dökme Betonarme Kazık (Bored Pile)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Derin Temel",
    desc: "Zayıf zeminlerde bina yükünü derinlerdeki sağlam kayaya iletmek için hidrolik burgu ile 65-120 cm çapında delinip içine demir kafes indirilerek dökülen kazıktır.",
    quote: "Şantiye Şefi: 'Göl kenarındaki projede temel altına 20 metre boyunda 80'lik fore kazıklar çaktık.'"
  },
  {
    usta: "Mini Kazık",
    literatur: "Küçük Çaplı Zemin İyileştirme ve İksa Kazığı (Micropile)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Zemin Güçlendirme",
    desc: "20 ila 30 cm çapında delinerek içine donatı borusu veya profili yerleştirilip çimento enjeksiyonu yapılan zemin sağlamlaştırma ve temel altı kazığıdır.",
    quote: "Geoteknikçi: 'Bitişik nizam binanın temelini kurtarmak için sınır boyunca mini kazık dizisi yaptık.'"
  },
  {
    usta: "İksa (Ankrajlı Perde)",
    literatur: "Derin Kazı Destekleme ve Zemin Tutma Sistemi",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kazı Güvenliği",
    desc: "Bodrum kazılarında komşu parsellerin, caddelerin ve altyapı borularının çökmesini önlemek için fore kazıklar ve çelik halatlı öngerilmeli ankrajlarla kurulan istinat duvarıdır.",
    quote: "Şantiye Şefi: '12 metre derin kazıya iniyoruz, iksa ankrajları gerilmeden kademe kazısı yapmayın.'"
  },
  {
    usta: "Jet Grout",
    literatur: "Yüksek Basınçlı Çimento Enjeksiyonu ile Zemin Katılaştırma",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Zemin İyileştirme",
    desc: "300-400 bar gibi aşırı yüksek basınçla zemine çimento şerbeti püskürtülerek toprağın yırtılması ve çimento-toprak karışımı yapay taş kolonlar oluşturulmasıdır.",
    quote: "Mühendis: 'Sıvılaşma riski olan kumlu tabakayı temel altında Jet Grout kolonları ile katılaştırdık.'"
  },
  {
    usta: "Hafriyat",
    literatur: "Kazı, Yükleme, Nakliye ve Dolgu Toprak İşleri",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "İlk Aşama",
    desc: "Binanın temeli ve bodrum katları için arazideki doğal toprağın veya kayanın ekskavatör ve kırıcılarla kazılarak kamyonlarla döküm sahasına taşınması işidir.",
    quote: "Hafriyatçı: 'Günde 40 kamyon hafriyat çekerek temel çukurunu 5 günde sıfır kotuna indirdik.'"
  },
  {
    usta: "Stabilize (Tüvenan)",
    literatur: "Belirli Granülometride Sıkışabilir Doğal Dolgu Malzemesi",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Dolgu & Yol",
    desc: "İçinde kum, çakıl ve taş parçalarının dengeli dağıldığı; sulanıp silindirle ezildiğinde beton gibi sıkışıp boşluksuz zemin oluşturan ocak dolgu malzemesidir.",
    quote: "Usta: 'Temel çukurunun etrafına balçık toprak değil, 30 cm tabakalar halinde stabilize serip sıkıştırın.'"
  },
  {
    usta: "Mıcır",
    literatur: "Kırmataş Kaba Agrega (TS EN 12620)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Agrega Çeşitleri",
    desc: "Kayaçların kırıcılarda elenmesiyle elde edilen agregadır: 1 No Mıcır (5-12 mm), 2 No Mıcır (12-22 mm) olarak betonda ve drenaj filtrelerinde kullanılır.",
    quote: "Drenajcı: 'Temel çevre drenaj borusunun etrafını 2 numara yıkanmış mıcırla doldurup keçe sardık.'"
  },
  {
    usta: "Balast",
    literatur: "İri Taneli Kırmataş Ağır Dolgu ve Yataklama Agregası",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Altyapı Dolgusu",
    desc: "30 ila 60 mm çapındaki keskin kenarlı sert taş bloklarıdır; demiryolu hatlarında ray altında veya batak zeminlerin ilk dolgusunda taşıyıcı taban oluşturur.",
    quote: "Altyapıcı: 'Çamurlu zemin suyu kessin diye tabana yarım metre balast taşı basıp ezdik.'"
  },
  {
    usta: "Kompaktör",
    literatur: "Dinamik Titreşimli Zemin Sıkıştırma Makinesi (Vibratory Plate)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Zemin Makinesi",
    desc: "Silindirin giremediği dar temel içlerinde, boru hendeklerinde ve parke altlarında toprağı vuruntu ve vibrasyonla sıkıştıran benzinli motorlu el tablasıdır.",
    quote: "Usta: 'Boru kanalının üstünü toprakla doldurduktan sonra kompaktörle üzerinden iki tur geçin.'"
  },
  {
    usta: "Kuşgözü (Beton Yüzey Porozitesi)",
    literatur: "Yüzey Mikro Hava Boşluğu Kusuru (Blowholes)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Yüzey Kusuru",
    desc: "Kalıp söküldüğünde beton yüzeyinde görülen, kalıp yağı fazlalığından veya yetersiz titreşimden havanın yüzeye yapışıp kaçamamasıyla oluşan küçük deliklerdir.",
    quote: "Denetmen: 'Kalıp yağını çok kalın sürmüşsünüz, perdede kuşgözü delikleri oluşmuş, tamir harcı çekin.'"
  },
  {
    usta: "Terleme (Bleeding / Su Kusması)",
    literatur: "Taze Betonda Karışım Suyunun Yüzeye Çıkması",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kıvam Bozukluğu",
    desc: "Ağır agrega taneleri dibe çökerken karışım suyunun yerçekimi etkisiyle betonun üst yüzeyine çıkıp su tabakası oluşturması ve yüzey dayanımını zayıflatmasıdır.",
    quote: "Laborant: 'Betondaki aşırı su terleme yaptı; yüzey suyunu çekmeden asla perdaha başlamayın.'"
  },
  {
    usta: "Priz (Priz Başlangıcı / Priz Sonu)",
    literatur: "Çimento Pastasının Katılaşma ve Sertleşme Süreci (Setting Time)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kimyasal Aşama",
    desc: "Betonun akıcı halden plastik hale geçişi (priz başlangıcı: ~1-2 saat) ve ardından şekil verilemez katı taş haline gelişi (priz sonu: ~4-8 saat) sürecidir.",
    quote: "Şantiye Şefi: 'Hava çok sıcak, beton 1 saatte priz almaya başlar; mastar ekibi arkadan hemen gelsin.'"
  },
  {
    usta: "Hidratasyon Isısı",
    literatur: "Çimento-Su Kimyasal Reaksiyonunun Ekzotermik Isı Açığa Çıkarması",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Termal Gerilme",
    desc: "Çimentonun suyla birleştiğinde ortaya çıkardığı yüksek ısıdır; kütle betonlarında (örneğin 2 metre kalınlığında radye) betonun içten çatlamaması için kontrol edilmelidir.",
    quote: "Mühendis: '2 metre kalınlığındaki radye temelde hidratasyon ısısını düşürmek için cüruflu çimento seçtik.'"
  },
  {
    usta: "Uçucu Kül",
    literatur: "Termik Santral Yan Ürünü Puzolanik Mineral Beton Katkısı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Beton Teknolojisi",
    desc: "Kömür santrallerinin bacalarından toplanan ince küldür; çimento klinkeri yerine kullanılarak betonun uzun vadeli mukavemetini ve kimyasal direncini artırır.",
    quote: "Santral Müdürü: 'Sülfata dayanıklı C35 beton karışımında %20 oranında uçucu kül kullandık.'"
  },
  {
    usta: "Silika Dumanı (Silica Fume)",
    literatur: "Amorf Silisyum Dioksit İçeren Ultra İnce Mineral Katkı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Yüksek Mukavemet",
    desc: "Çimento tanelerinden 100 kat daha ince mikro parçacıklardır; betondaki tüm kılcal boşlukları doldurarak C50 üzeri yüksek dayanım ve su geçirimsizlik sağlar.",
    quote: "Statikçi: 'Köprü ayaklarında aşınmaya ve deniz suyuna dayanması için silika dumanlı beton şart koştuk.'"
  },
  {
    usta: "Süperakışkanlaştırıcı",
    literatur: "Polikarboksilat Eter Esaslı Yüksek Oranda Su Azaltıcı Kimyasal Katkı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kimyasal Katkı",
    desc: "Betonun su/çimento oranını düşürerek mukavemetini yükselten, aynı zamanda betonun kendiliğinden sıkışacak kadar kendiliğinden akıcı olmasını sağlayan katkıdır.",
    quote: "Laborant: 'Su katmak yerine karışıma süperakışkanlaştırıcı ekledik; hem slump arttı hem dayanım fırladı.'"
  },
  {
    usta: "Antifriz (Priz Hızlandırıcı)",
    literatur: "Klorürsüz Kalsiyum Nitrat Esaslı Soğuk Hava Beton Katkısı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Kış Şartları",
    desc: "Hava sıcaklığı +5°C'nin altına düştüğünde beton içindeki suyun donmasını önleyen ve prizi hızlandırarak betonun kritik dayanıma erkenden ulaşmasını sağlayan kimyasaldır.",
    quote: "Usta: 'Gece sıcaklık -3 dereceye düşecek, transmiksere erken mukavemet veren antifriz katkısı koyduk.'"
  },

  /* ==========================================================================
     4. İNCE İŞLER, SIVA, DUVAR & BOYA TERİMLERİ
     ========================================================================== */
  {
    usta: "Ano (Ano Çıtası)",
    literatur: "Kılavuz Düzlem ve Kot Referans Çıtası (Screed Guide)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Hassas Mastar",
    desc: "Sıva veya şap yapılmadan önce duvar veya zemine belirli aralıklarla teraziye alınarak sabitlenen; mastarın üzerinde kaydırıldığı metal veya harç çıtasıdır.",
    quote: "Alçıcı: 'Duvara lazerle anoları diktik; mastarı anolara dayayıp çektiğimizde duvar jilet gibi düz olur.'"
  },
  {
    usta: "Mastarlamak",
    literatur: "Doğrusal Düzlemsellik Kontrolü ve Yüzey Sıyırma İşi",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Uygulama Tekniği",
    desc: "Atılan taze sıva veya şap harcının üzerindeki tümsek ve çukurları gidermek için 2-3 metrelik alüminyum mastarı anolar üzerinde zig-zag çekerek düzleme işlemidir.",
    quote: "Usta: 'Sıvayı duvara fırlatıp doldurduktan sonra hemen mastarını çekip fazlalığını sıyırın.'"
  },
  {
    usta: "Kaba Sıva",
    literatur: "Çimento-Kum Esaslı Mukavemet Kazandırıcı Alt Kat Sıva",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Sıva Katmanı",
    desc: "Tuğla veya briket duvarın üzerine 1.5 - 2 cm kalınlığında atılan; duvar yüzeyini şaküle ve teraziye getiren, suya dayanıklı kaba dişli harç tabakasıdır.",
    quote: "Sıvacı: 'Islak hacimlerde alçı kullanılmaz; banyonun duvarına suya dayanıklı kaba sıva çekiyoruz.'"
  },
  {
    usta: "İnce Sıva",
    literatur: "Kireçli İnce Agregalı Son Kat Düzeltme Sıvası",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Düzgün Yüzey",
    desc: "Kaba sıvanın pürüzlerini kapatmak ve boya veya macuna zemin hazırlamak amacıyla ince elenmiş kum ve kireç karışımıyla yapılan 3-5 mm'lik perdah sıvasıdır.",
    quote: "Usta: 'Kaba sıva prizini alınca üzerine ince sıva çekip süngerli malayla perdahladık.'"
  },
  {
    usta: "Saten Alçı (Perdah Alçısı)",
    literatur: "Boya Öncesi Yüzey Pürüzsüzleştirici Son Kat İnce Alçı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Pürüzsüz Duvar",
    desc: "Sıvanmış veya alçıpan duvar üzerine çelik mala ile çekilen; zımparalandığında cam gibi pürüzsüz ve emiciliği dengeli boyaya hazır yüzey veren ince alçıdır.",
    quote: "Boyacı: 'Duvara iki kat saten alçı çekip 180 numara zımpara yaptık, yüzey ayna gibi parladı.'"
  },
  {
    usta: "Perlitli Sıva Alçısı (Kaba Alçı)",
    literatur: "Hafifletilmiş Perlit Agregalı İç Mekan Kaba Alçı Harcı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Hızlı Sıva",
    desc: "İçine genleştirilmiş perlit katılarak ısı ve ses yalıtımı artırılmış; tuğla ve gazbeton üzerine kaba sıva yerine doğrudan kalın uygulanan alçı harcıdır.",
    quote: "Alçıcı: 'Tuğla duvara kaba sıva yapmadan doğrudan makine ile perlitli sıva alçısı püskürttük.'"
  },
  {
    usta: "Fileli Sıva",
    literatur: "Cam Elyaf Donatılı Mantolama ve Onarım Sıvası",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Çatlak Önleme",
    desc: "Isı yalıtım levhalarının üzerine sürülen çimento esaslı harcın içine 160 gr'lık alkali dayanımlı cam tülü filesi gömülerek yapılan esnek ve çatlamaz sıva katmanıdır.",
    quote: "Mantolamacı: 'Fileyi kuru duvara koyup sıvamayın; önce harcı sürün, fileyi harcın içine gömün!'"
  },
  {
    usta: "Donatı Filesi (Sıva Filesi)",
    literatur: "Alkali Dayanımlı Cam Elyaf Dokuma Sıva Takviye Filesi",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Takviye Elemanı",
    desc: "Çimento harcının kimyasal alkalilerine karşı özel kaplanmış, 4x4 mm göz aralığına sahip, sıva gerilmelerini emerek yüzey çatlaklarını engelleyen file örgüdür.",
    quote: "Usta: 'File ek yerlerini en az 10 cm birbiri üzerine bindirin, köşelerden dikey çatlak vermesin.'"
  },
  {
    usta: "Köşe Profili (Köşebent)",
    literatur: "Delikli Alüminyum / Fileli PVC Köşe Koruma Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Köşe Koruması",
    desc: "Duvar, kolon ve pencere kenarlarındaki dışa bakan 90 derecelik keskin köşelere sıva esnasında teraziye alınarak gömülen, çarpmalarda kırılmayı önleyen metal/plastik profildir.",
    quote: "Alçıcı: 'Oda giriş kapısının ve kolonların tüm dış köşelerine alüminyum köşebent gömdük.'"
  },
  {
    usta: "Damlalık Profili",
    literatur: "Tırnaklı PVC / Alüminyum Yağmur Suyu Kesme Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Cephe Detayı",
    desc: "Balkon altlarına ve pencere üst lentolarına takılan profildir; yağmur suyunun tavan boyunca binanın içine geri yürümesini engelleyip damla halinde aşağı düşmesini sağlar.",
    quote: "Cepheci: 'Balkon alın sıvasının ucuna damlalık profili taktık, yağmur suyu tavanı ıslatıp çürütmez.'"
  },
  {
    usta: "Şap (Tesviye Şapı)",
    literatur: "Çimento Esaslı Zemin Kotlama ve Düzeltme Harcı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Zemin Altyapısı",
    desc: "Betonarme döşeme üzerine son kat kaplama (parke, seramik, vinil) öncesinde kot farklarını gidermek ve pürüzsüz düz taban elde etmek için atılan kum-çimento harcıdır.",
    quote: "Şapçı: 'Yerden ısıtma borularının üzerine helikopterli şap çekip lazer kotunda teslim ettik.'"
  },
  {
    usta: "Kendiliğinden Yayılan Şap (Smart Şap)",
    literatur: "Self-Leveling Polimer Modifiyeli İnce Zemin Tesviye Harcı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Hassas Zemin",
    desc: "Su gibi akıcı kıvamda dökülen, yerçekimi etkisiyle kendi terazisini bularak 2 ila 10 mm kalınlıkta cam gibi düzgün yüzey oluşturan lüks zemin düzeltme harcıdır.",
    quote: "Usta: 'PVC zemin döşenmeden önce en ufak pürüzü gidermek için 3 mm self-leveling şap döktük.'"
  },
  {
    usta: "Kurt Ağzı (Kama Vermek)",
    literatur: "Açısal Kaçıklık / Geometrik Paralellik Hatası (Tapering Error)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Uygulama Kusuru",
    desc: "Odanın veya duvarın 90 derece gönyesinde olmaması yüzünden seramik veya parke döşerken bir duvara yaklaşıldığında malzemenin üçgen/kama şeklinde kesilmek zorunda kalınması kusurudur.",
    quote: "Fayansçı: 'Oda gönyede olmadığı için duvar kenarında seramik 15 cm'den 2 cm'ye inip kurt ağzı verdi.'"
  },
  {
    usta: "Gönyeye Almak",
    literatur: "Ortogonal Dik Açı Düzlemsellik Doğrulaması (90° Check)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Geometri Kuralı",
    desc: "Duvar örümünde veya karkas kurulumunda köşelerin tam 90° dik açı yapmasını sağlama işlemidir; sahada Pisagor'un 3-4-5 metre kuralı metreyle ölçülerek doğrulanır.",
    quote: "Duvarcı: 'İlk sıra tuğlayı örerken köşeyi 3-4-5 kuralıyla gönyeye aldık, odalar çarpık çıkmayacak.'"
  },
  {
    usta: "Kör Kasa",
    literatur: "Alt Montaj Karkası / Ön Montaj Kör Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Doğrama Hazırlığı",
    desc: "Sıva ve boya bitene kadar kaba duvara sabitlenen; asıl alüminyum/ahşap kapı ve pencere kasalarının harçtan zarar görmeden içine vidalanmasını sağlayan metal yardımcı çerçevedir.",
    quote: "Usta: 'Kaba sıvacı girmeden önce tüm pencere boşluklarına demir kör kasaları teraziye alıp çaktık.'"
  },
  {
    usta: "Denizlik",
    literatur: "Dış Cephe Pencere Altı Eğimli Su Tahliye Profili / Mermeri",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Pencere Detayı",
    desc: "Pencerelerin dış alt eşiğine dışa doğru eğimli olarak yerleştirilen, altında damlalık kanalı bulunan ve yağmur suyunu duvardan uzağa fırlatan mermer veya alüminyum levhadır.",
    quote: "Mermerci: 'Denizlik mermerlerinin altına damlalık kanalı açtık, yağmur suyu cepheyi kirletmeyecek.'"
  },
  {
    usta: "Parapet",
    literatur: "Teras, Çatı ve Balkon Kenar Güvenlik Duvarı (Parapet Wall)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Korkuluk & Çatı",
    desc: "Çatı terasları veya balkonların kenarında düşmeyi önleyen, aynı zamanda su yalıtım membranının yukarı döndürülüp kilitlendiği 50 ila 110 cm yüksekliğindeki koruma duvarıdır.",
    quote: "Mimar: 'Teras parapet yüksekliğini 110 cm yapıp su yalıtımını parapet duvarına 30 cm döndürün.'"
  },
  {
    usta: "Harpuşta",
    literatur: "Parapet ve Duvar Üstü Eğimli Damlalıklı Koruma Başlığı (Coping)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Duvar Koruması",
    desc: "Açıkta duran parapet ve bahçe duvarlarının üzerine oturtulan; çift tarafa eğimli ve damlalık tırnaklı mermer, prekast veya sac koruma şapkasıdır.",
    quote: "Usta: 'Harpuşta taşlarını parapetin üstüne harçla koyduk, yağmur suyu duvarın içine sızamaz.'"
  },
  {
    usta: "Fuga",
    literatur: "Gölge Derzi / Mimari Estetik Ayırıcı Çizgi Kanalı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Mimari Detay",
    desc: "Dış cephe mantolamada kat hizalarında veya alçıpan tavan birleşimlerinde monotonluğu kırmak, kılcal çatlakları saklamak ve gölge derinliği vermek için açılan oluktur.",
    quote: "Mimar: 'Dış cepheye kat aralarında 5 cm genişliğinde yatay fugalar açarak binaya modern hava kattık.'"
  },
  {
    usta: "Söve",
    literatur: "Pencere ve Kapı Çevresi Dekoratif Cephe Çerçeve Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Dış Cephe Dekoru",
    desc: "Pencere ve kapı kenarlarına dışarıdan yapıştırılan; üzeri mineral sıva kaplı EPS veya poliüretandan üretilmiş klasik veya modern kabartmalı çerçeve süslemesidir.",
    quote: "Cepheci: 'Pencere etraflarına 12 cm genişliğinde akrilik kaplı söve profilleri yapıştırıp boyadık.'"
  },
  {
    usta: "Kat Silmesi",
    literatur: "Katlar Arası Cephe Kuşağı / Kordon Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Klasik Cephe",
    desc: "Binanın dış cephesinde kat döşemesi hizasında binayı çepeçevre saran, yağmur suyunu alt kattan uzaklaştıran çıkıntılı dekoratif mimari profildir.",
    quote: "Usta: 'Birinci ve ikinci kat arasına 20 cm çıkıntılı kat silmesi koyarak cepheyi hareketlendirdik.'"
  },
  {
    usta: "Derz Artısı",
    literatur: "Seramik Boşluğu Kalibrasyon ve Mesafe Ayar Parçası",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Fayans Aksesuarı",
    desc: "Seramikler döşenirken karolar arasında eşit 1mm, 2mm veya 3mm derz mesafesi kalmasını sağlayan '+' şeklindeki küçük plastik aparat parçalarıdır.",
    quote: "Fayansçı: 'Rektifiyeli granit döşerken 2 milimlik derz artısı kullandık, hatlar ip gibi çıktı.'"
  },
  {
    usta: "Klipsli Takoz (Tesviye Takozu)",
    literatur: "Vidalı / Kamalı Seramik Yüzey Seviye Eşitleme Sistemi",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Sıfır Diş",
    desc: "60x120 gibi büyük ebatlı porselen seramiklerde yan yana gelen iki karonun birbirine göre yüksek veya alçak (diş) kalmasını engelleyen kamalı plastik sıkma sistemidir.",
    quote: "Usta: 'Büyük ebat porselen seramiklerde klipsli takoz sıkmadan düzgün zemin yakalayamazsınız.'"
  },
  {
    usta: "Derz Dolgusu (Fuga Harcı)",
    literatur: "Çimento / Polimer Esaslı İnce Karo Dolgu Harcı (Tile Grout)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Son Dokunuş",
    desc: "Seramik ve fayans karoları arasındaki boşlukları dolduran; su itici, çatlamayan, renkli çimento esaslı elastik dolgu harcıdır.",
    quote: "Fayansçı: 'Seramik yapıştırıcısı kuruduktan sonra gri renkli silikonlu derz dolgusunu kauçuk malayla çektik.'"
  },
  {
    usta: "Epoksi Derz Dolgusu",
    literatur: "İki Bileşenli Reçine Esaslı Kimyasala Dayanıklı Derz Dolgusu",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Hijyen & Havuz",
    desc: "Yüzme havuzları, endüstriyel mutfaklar ve hastanelerde asitlere, kimyasallara ve kire tam dirençli, su emmeyen ve bakteri üretmeyen reçine derzdir.",
    quote: "Usta: 'Otel havuzunun seramiklerine çimento esaslı değil, kimyasallara dayanıklı epoksi derz çektik.'"
  },
  {
    usta: "Astar Boya",
    literatur: "Pigmentli / Şeffaf Yüzey Emiş Dengesi Sağlayıcı Boya Astarı",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Boya Altyapısı",
    desc: "Alçı veya sıva yüzeyin aşırı boya emmesini önleyen, tozuyan yüzeyi bağlayan ve son kat boyanın duvara mükemmel yapışmasını sağlayan geçiş astarıdır.",
    quote: "Boyacı: 'Zımparalanmış saten alçıya astar vurmadan boya yaparsan boya kabarır ve rulo izi bırakır.'"
  },
  {
    usta: "Plastik Boya",
    literatur: "PVA Emülsiyon Esaslı Mat ve Ekonomik İç Cephe Duvar/Tavan Boyası",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Tavan Boyası",
    desc: "Su bazlı, mat görünümlü, nefes alabilen ancak silinmeye dayanımı düşük olan; evlerde tavanlarda ve kiralık mülklerde tercih edilen boyadır.",
    quote: "Boyacı: 'Tavanlara iki kat beyaz mat plastik tavan boyası, duvarlara ise silinebilir boya vurduk.'"
  },
  {
    usta: "Silikonlu Boya",
    literatur: "Silikon Reçine Modifiyeli Tam Silinebilir İpek Mat Boya",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Silinebilir Duvar",
    desc: "Leke tutmayan, ıslak bezle kolayca silinebilen, su iticiliği yüksek ve ipek mat parlaklığa sahip en yaygın modern kaliteli iç cephe boyasıdır.",
    quote: "Usta: 'Salon ve koridor duvarlarına Marshall silikonlu ipek mat boya uyguladık, çocuklar kirletse de silinir.'"
  },
  {
    usta: "Macun Çekmek",
    literatur: "Akrilik Duvar Macunu ile Çukur ve Pürüz Doldurma İşi",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Yüzey Düzeltme",
    desc: "Boya öncesinde duvardaki çivi delikleri, çatlaklar ve kılcal dalgalanmaları spatulayla doldurup zımparaya hazır hale getirme işlemidir.",
    quote: "Boyacı: 'Eski duvardaki kabaran yerleri kazıyıp akrilik macun çektik, kuruyunca zımparalayacağız.'"
  },
  {
    usta: "Zımpara Yapmak",
    literatur: "Aşındırıcı Kağıt / Ağ ile Yüzey Pürüzsüzleştirme ve Kalibrasyon",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Kusursuzluk",
    desc: "Alçı ve macun kuruduktan sonra çelik mala izlerini ve fazlalıkları gidermek için 120-220 kum zımparayla yüzeyin pürüzsüzleştirilmesidir.",
    quote: "Usta: 'Işıklı zımpara makinesiyle duvarı tarayarak sıfır hata pürüzsüz yüzey elde ettik.'"
  },
  {
    usta: "Kestirme Yapmak",
    literatur: "Rulonun Ulaşamadığı Köşe ve Sınırların Fırça ile Boyanması",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Ressam Tekniği",
    desc: "Tavan ile duvar birleşimi, süpürgelik üstü ve kapı pervazı gibi hassas sınır çizgilerinin maskeleme bandı ve kestirme fırçasıyla çizgi gibi boyanmasıdır.",
    quote: "Boyacı: 'Duvarı ruloyla doldurmadan önce köşeleri 3 numara kestirme fırçasıyla düzgünce kestik.'"
  },
  {
    usta: "Rulo İzi (Işık Dalgalanması)",
    literatur: "Düzensiz Boya Filmi Kalınlığı ve Üst Üste Binme Kusuru (Lap Marks)",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Boya Kusuru",
    desc: "Boya yapılırken rulonun kuru yerlere düzensiz vurulması veya boyanın erken kuruması sonucu yan ışıktan bakıldığında duvarda görülen dikey ton çizgileridir.",
    quote: "Ev Sahibi: 'Güneş vurunca salonda rulo izleri parlıyor; usta son katı tek yönde ıslakken taramalıydı.'"
  },
  {
    usta: "Taraklama (Yapıştırıcı Taraklama)",
    literatur: "Taraklı Dişli Mala ile Seramik Yapıştırıcısını Yivlendirme",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Seramik Standartı",
    desc: "Seramik yapıştırıcı harcının düz malayla değil, 8-10 mm dişli taraklı malayla çekilerek karo altına hava boşluğu kalmadan eşit kalınlıkta dağıtılması kuralıdır.",
    quote: "Usta: 'Yapıştırıcıyı zemine taraklayarak çekin; düz sürerseniz karo altında boşluk kalır ve kırılır.'"
  },
  {
    usta: "Çift Taraflı Yapıştırma (Kombine Metot)",
    literatur: "Hem Zemine Hem Karo Arkasına Harç Sürülerek Boşluksuz Montaj",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Büyük Ebat Kuralı",
    desc: "60x60 ve üzeri büyük ebatlı porselen karolarda harcın hem zemine taraklanması hem de karonun arkasına sıfır kat sürülmesi (back-buttering) zorunluluğudur.",
    quote: "Fayansçı: 'Büyük ebat porseleni çift taraflı yapıştırmazsan ortası boş kalır, üzerine basınca çatlar.'"
  },
  {
    usta: "Süpürgelik",
    literatur: "Zemin-Duvar Kesişim Koruma ve Genleşme Kapatma Profili",
    cat: "ince",
    catName: "İnce İşler, Sıva & Duvar",
    tag: "Zemin Tamamlayıcı",
    desc: "Laminat parke veya seramiğin duvardan bırakılan 1 cm genleşme boşluğunu örten ve paspas yaparken duvarı sudan koruyan 6-12 cm'lik ahşap/MDF/PVC çıtadır.",
    quote: "Parkeci: 'Parkeyi duvara sıfır dayamayın, 1 cm boşluk bırakıp üzerini lake beyaz süpürgelikle kapatın.'"
  },

  /* ==========================================================================
     5. YALITIM, ÇATI & CEPHE TERİMLERİ
     ========================================================================== */
  {
    usta: "Pah Kırmak (Balıksırtı Pah)",
    literatur: "Temel-Perde Kesişim Keskin Kenar Yuvarlama İmalatı (Chamfer)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Yalıtım Güvenliği",
    desc: "Temel pabucu ile perde duvarın kesiştiği 90 derecelik dik köşeye tamir harcıyla 45 derecelik eğimli pah yapılmasıdır; membranın keskin köşede yırtılmasını önler.",
    quote: "Yalıtımcı: 'Köşelere pah kırmadan membranı döndürürsen toprak dolgusunda köşeden patlar.'"
  },
  {
    usta: "Bitümlü Membran",
    literatur: "Polyester / Cam Tülü Taşıyıcılı Polimerik Bitümlü Su Yalıtım Örtüsü",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Temel & Çatı Yalıtımı",
    desc: "Şalümo aleviyle eritilerek zemine ve perdelere yapıştırılan; 3-4 mm kalınlığında, ek yerleri 10 cm bindirmeli klasik ağır hizmet su yalıtım rulosudur.",
    quote: "Usta: 'Temel bohçalamasında 4 milimlik çift kat polyester keçeli membran şalümoyla yapıştırıldı.'"
  },
  {
    usta: "Çift Komponentli Sürme Yalıtım",
    literatur: "Çimento ve Akrilik/Lateks Esaslı Elastik Sürme Su Yalıtım Harcı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Banyo & Teras",
    desc: "Toz ve sıvı iki bileşenin karıştırılmasıyla fırça veya ruloyla iki kat sürülen; seramik altında eksiz esnek su geçirmez kauçuksu tabaka oluşturan harçtır.",
    quote: "Usta: 'Banyo zeminine ve duş içine iki kat çift komponentli sürme yalıtım çekip file gömdük.'"
  },
  {
    usta: "Poliüretan Likit Membran",
    literatur: "Saf Poliüretan Esaslı UV Dayanımlı Eksiz Sıvı Su Yalıtımı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Açık Teras",
    desc: "Güneşe doğrudan maruz kalan teras çatılarda ek yeri olmadan dökülüp yayılan; esnekliği %400'e varan ve üzerinde yürünebilen elastik su yalıtım kaplamasıdır.",
    quote: "Yalıtımcı: 'Çatı terasına seramik kırmadan doğrudan UV dayanımlı beyaz poliüretan likit membran sürdük.'"
  },
  {
    usta: "Kristalize Su Yalıtımı",
    literatur: "Kılcal Boşluklarda Çözünmez Kristal Üreten Kapiler Su İzolasyonu",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Negatif Yalıtım",
    desc: "Dıştan yalıtılamayan bodrum perdelerinde içten sürülen; betondaki nemle reaksiyona girip kılcal deliklerde kristaller üreterek suyu içeriden kesen harçtır.",
    quote: "Usta: 'Dışarıdan kazamadığımız asansör kuyusuna içeriden negatif yönden kristalize yalıtım sürdük.'"
  },
  {
    usta: "Su Tutucu Bant (Waterstop)",
    literatur: "PVC / Şişen Butil Soğuk Derz Su Yalıtım Bandı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Temel-Perde Derzi",
    desc: "Temel betonu dökülürken yarıya kadar betona gömülen, perde dökülünce diğer yarısı perdede kalan; suyla temas edince şişerek soğuk derzden su sızmasını önleyen banttır.",
    quote: "Şantiye Şefi: 'Temel-perde birleşim çizgisine hidrofilik şişen su tutucu bant yerleştirin.'"
  },
  {
    usta: "Geotekstil Keçe",
    literatur: "Non-Woven İğnelenmiş Polipropilen Filtrasyon ve Koruma Keçesi",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Drenaj & Koruma",
    desc: "Drenaj borularının etrafına sarılarak ince kil ve çamurun boruyu tıkamasını önleyen, su geçirgen ancak toprak tutucu elyaf örtüdür.",
    quote: "Altyapıcı: 'Drenaj çukuruna önce geotekstil keçeyi serdik, mıcırı ve boruyu koyup keçeyi üstten bohçaladık.'"
  },
  {
    usta: "Drenaj Levhası (Kabarcıklı Levha)",
    literatur: "Yüksek Yoğunluklu Polietilen (HDPE) Koruma ve Drenaj Plakası",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Perde Koruması",
    desc: "Temel perde duvarındaki membran ve ısı yalıtımının üzerine çekilen; kabarcıkları sayesinde toprak yükünü dağıtan ve suyun tabana süzülmesini sağlayan siyah levhadır.",
    quote: "Usta: 'Membranın üzerine XPS koyduk, üstüne kabarcıklı drenaj levhasını çakıp dolguyu öyle yaptık.'"
  },
  {
    usta: "Drenaj Hattı (Çevre Drenajı)",
    literatur: "Taban ve Sızıntı Sularını Yapıdan Uzaklaştırıcı Perfore Boru Hattı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Temel Drenajı",
    desc: "Temel tabanı kotunda bina çevresine döşenen delikli koruge boru ve mıcır yatağı ile yer altı sularının toplanıp rögara tahliye edildiği altyapı sistemidir.",
    quote: "Şantiye Şefi: 'Bodrum katlarda rutubet olmaması için temel pabuç hizasına delikli drenaj borusu döndük.'"
  },
  {
    usta: "Mantolama (Dış Cephe Yalıtımı)",
    literatur: "Dış Cephe Kompozit Isı Yalıtım Sistemi (ETICS)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Enerji Tasarrufu",
    desc: "Bina dış cephesinin ısı yalıtım levhaları (taş yünü veya EPS), dübel, donatı filesi ve dekoratif sıva ile kesintisiz olarak kaplanarak ısı köprülerinin yok edilmesidir.",
    quote: "Usta: 'Mantolama yapılan binada kışın doğalgaz tüketimi %45 oranında düşer.'"
  },
  {
    usta: "Isı Köprüsü",
    literatur: "Yapı Kabuğunda Isı Yalıtımının Kesintiye Uğradığı Zayıf Nokta",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Yoğuşma & Küf",
    desc: "Yalıtılmamış betonarme kolonlar, kirişler ve balkon çıkmalarında iç ortam sıcaklığının dışarı kaçtığı ve evin içinde nem yoğuşup siyah küf ürettiği soğuk bölgelerdir.",
    quote: "Mühendis: 'Balkon tabliyesi içeriye doğrudan bağlanırsa devasa bir ısı köprüsü olur, alınlarını yalıtın.'"
  },
  {
    usta: "Mahya",
    literatur: "İki Çatı Eğikliğinin Kesiştiği Tepe Sırt Hattı ve Mahya Kiremiti",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Çatı Tepe Noktası",
    desc: "Beşik veya kırma çatılarda iki meyilli yüzeyin birleştiği en tepe çizgisidir; buradaki boşluğu kapatmak için yarım yuvarlak harçlı/kuru mahya kiremitleri dizilir.",
    quote: "Çatıcı: 'Çatı kiremitlerini dizdikten sonra tepeye mahya bandını çekip mahya kiremitlerini harçladık.'"
  },
  {
    usta: "Çinko Dere (Asma Dere)",
    literatur: "Çatı Kenarı Yağmur Suyu Toplama ve İndirme Oluğu",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Yağmur Oluğu",
    desc: "Çatı saçak uçlarına kancalarla asılan; çatıdan süzülen yağmur suyunu toplayıp düşey iniş borularına ileten galvanizli sac, çinko veya PVC yarım daire oluktur.",
    quote: "Çatıcı: 'Saçak altına galvaniz çinko dere taktık, her 10 metreye bir iniş borusu bıraktık.'"
  },
  {
    usta: "Gizli Dere",
    literatur: "Parapet Arkasında Gizlenmiş Dahili Yağmur Oluğu Kanalı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Modern Mimari Çatı",
    desc: "Dışarıdan bakıldığında görünmeyen, bina cephesindeki parapet duvarının arkasında bırakılan ve içi su yalıtım membranı ile kaplanan gömme yağmur oluğudur.",
    quote: "Mimar: 'Modern görünüm için çatıya asma dere değil, parapet arkasında gizli dere çözümü uyguladık.'"
  },
  {
    usta: "Kalkan Duvar",
    literatur: "Beşik Çatı Alın Üçgen Duvarı (Gable Wall)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Çatı Alnı",
    desc: "Beşik çatılı binalarda çatı eğimine uygun olarak son kat döşemesinden çatı mahyasına kadar üçgen şeklinde örülen alın cephe duvarıdır.",
    quote: "Duvarcı: 'Çatı makaslarının yanındaki kalkan duvarı örerken rüzgarda devrilmesin diye hatıl bağladık.'"
  },
  {
    usta: "Saçak",
    literatur: "Çatı Kenarının Dış Duvar Düzleminden Dışa Taşma Bölümü (Eaves)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Cephe Koruması",
    desc: "Yağmur ve kar suyunun pencere ve duvarlara doğrudan vurmaması için çatının binanın dış cephe hattından 50 ila 80 cm dışarıya taşırılan etek kısmıdır.",
    quote: "Usta: 'Saçak altlarını fırınlanmış ahşap lambri ile kaplayıp spot aydınlatma delikleri açtık.'"
  },
  {
    usta: "Mertek",
    literatur: "Çatı Kaplamasını Taşıyan Eğim Doğrultusundaki Ahşap Kirişler (Rafter)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Çatı Karkası",
    desc: "Çatı eğimi yönünde 50-60 cm aralıklarla dizilen, üzerine tahta/OSB kaplanan ve yükünü aşıklara aktaran 5x10 veya 6x12 cm kesitli ahşap çatı iskelet elemanıdır.",
    quote: "Çatıcı: 'Mertek aralıklarını 50 cm yaptık, üzerine 15 mm OSB levhaları şaşırtmalı çaktık.'"
  },
  {
    usta: "Aşık",
    literatur: "Merteklerin Oturduğu Yatay Ana Çatı Kirişi (Purlin)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Çatı İskeleti",
    desc: "Çatı makaslarına veya dikmelerine oturan, eğime dik yatay yönde uzanan ve mertekleri taşıyan 10x10 veya 12x12 cm kesitli ana ahşap/çelik taşıyıcıdır.",
    quote: "Usta: 'Çatının orta kısmına gelen yükü karşılamak için makasların üstüne ana aşıkları oturttuk.'"
  },
  {
    usta: "Sandviç Panel",
    literatur: "İki Boyalı Galvaniz Sac Arası Poliüretan/Taş Yünü Yalıtımlı Kompozit Panel",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Hızlı Çatı/Cephe",
    desc: "Fabrika, depo ve spor salonlarının çatılarında kullanılan; hem iç hem dış kaplamayı ve ortasındaki ısı yalıtımını tek montajda çözen hafif kompozit levhadır.",
    quote: "Çatıcı: 'Fabrika çatısını 5 hadveli 50 mm poliüretan dolgulu sandviç panellerle 3 günde kapattık.'"
  },
  {
    usta: "Trapez Sac",
    literatur: "Soğuk Şekillendirilmiş Boyalı Galvanizli Çatı ve Cephe Sacı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Ekonomik Çatı",
    desc: "Yalıtımsız sundurmalarda, şantiye çevreleme perdelerinde ve depolarda kullanılan; mukavemeti artırmak için trapez dalgalı kıvrılmış boyalı çelik levhadır.",
    quote: "Usta: 'Otopark sundurmasının üzerine antrasit gri 27/200 formunda trapez sac vidaladık.'"
  },
  {
    usta: "Buhar Dengeleyici (Nefes Alan Örtü)",
    literatur: "Su Geçirmez Ancak Buhar Geçirgen Nefes Alabilen Çatı Membranı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Akıllı Membran",
    desc: "Kiremit altına serilen örtüdür; çatı arasından yükselen sıcak su buharını dışarı atarken kiremit arasından sızabilecek yağmur suyunun içeri girmesini engeller.",
    quote: "Çatıcı: 'OSB'nin üzerine buhar geçirgen nefes alan örtü serip üzerine çıtaları çaktık.'"
  },
  {
    usta: "Gargul / Çörten",
    literatur: "Teras Parapetinden Dışarıya Açılan Serbest Su Tahliye Borusu (Scupper)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Cephe",
    tag: "Emniyet Tahliyesi",
    desc: "Teras çatılarda yağmur süzgecinin tıkanması ihtimaline karşı parapet duvarına takılan, su seviyesi yükseldiğinde suyu dışarı fışkırtan acil durum taşma borusudur.",
    quote: "Mimar: 'Ana süzgeç tıkanırsa teras havuza dönmesin diye parapete iki adet emniyet gargulu koyduk.'"
  },

  /* ==========================================================================
     6. MEKANİK & ELEKTRİK TESİSAT TERİMLERİ
     ========================================================================== */
  {
    usta: "Kolektör (Manifold)",
    literatur: "Tesisat Dağıtım ve Dengeleme Kollektörü",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Isıtma Dağıtımı",
    desc: "Kombiden veya kazandan gelen ana sıcak suyu odalara giden ayrı ayrı boru hatlarına vanalarla kontrollü olarak paylaştıran pirinç/paslanmaz dağıtıcı gövdedir.",
    quote: "Tesisatçı: 'Kolektör dolabını koridora koyduk, her odanın debi ayarını vanasından yapabilirsiniz.'"
  },
  {
    usta: "PEX Boru (Oksijen Bariyerli)",
    literatur: "Çapraz Bağlı Polietilen Yerden Isıtma ve Tesisat Borusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Yerden Isıtma",
    desc: "Yerden ısıtma straforu üzerine döşenen; oksijen bariyeri sayesinde tesisata hava karıştırmayıp kombiyi paslandırmayan esnek kırmızı/şeffaf plastik borudur.",
    quote: "Usta: 'Yerden ısıtmada 16x2 oksijen bariyerli PEX boruyu salyangoz modelinde 15 cm arayla serdik.'"
  },
  {
    usta: "Kılıflı Boru",
    literatur: "Koruyucu Spiral Kılıf İçinden Geçirilen Değiştirilebilir Su Borusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Mobil Sistem",
    desc: "Şap altından radyatörlere giden PEX borunun dışına geçirilen kırmızı ve mavi renkli spiral borudur; boru patlarsa kırmadan içinden çekilip yenilenebilir.",
    quote: "Tesisatçı: 'Radyatör hatlarını kılıflı boruyla çektik, şap döküldükten sonra boru içinde serbest çalışır.'"
  },
  {
    usta: "Pik Boru (Font Boru)",
    literatur: "Dökme Demir Sessiz ve Yangına Dayanıklı Atık Su Borusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Akustik Drenaj",
    desc: "Lüks konut ve otellerde düşey ana atık su şaftlarında kullanılan; ağır gövdesi sayesinde su akma sesini sıfırlayan ve yangında erimeyen döküm borudur.",
    quote: "Tesisatçı: 'Ana düşey hatta pik boru kullandık, alt kattaki yatak odasına üst katın sifon sesi gitmez.'"
  },
  {
    usta: "Koruge Boru (HDPE)",
    literatur: "Yüksek Yoğunluklu Polietilen Çift Cidarlı Altyapı Borusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Altyapı Kanalizasyon",
    desc: "Dış yüzeyi kaburgalı halkalı, iç yüzeyi pürüzsüz açık mavi/sarı olan; toprak yüküne dayanıklı sokak kanalizasyon ve yağmur suyu altyapı borusudur.",
    quote: "Altyapıcı: 'Bina ana kanalizasyon bağlantısını belediye hattına 200'lük koruge boruyla bağladık.'"
  },
  {
    usta: "Büz (Beton Künk)",
    literatur: "Prekast Donatısız / Donatılı Beton Menfez ve Kanalizasyon Borusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Ağır Altyapı",
    desc: "Geleneksel altyapıda kullanılan; fabrikada dökülmüş ağır çimento borulardır; yolların altından geçen menfezlerde ve dere ıslahlarında kullanılır.",
    quote: "Usta: 'Şantiye giriş yolunun altından geçen yağmur kanalına 500'lük beton büzler döşedik.'"
  },
  {
    usta: "Rögar (Menhol / Muayene Bacası)",
    literatur: "Altyapı Hat Kontrol, Temizleme ve Yön Değiştirme Bacası",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Altyapı Girişi",
    desc: "Bina çıkışlarında ve sokak hatlarında belirli aralıklarla konulan; personelin inebildiği veya robot kamerayla tıkanıklık açılan kapaklı beton/plastik kuyudur.",
    quote: "Tesisatçı: 'Bina bahçesine ana rögardan önce çekvalfli bir kontrol rögarı koyduk, geri basmayı önler.'"
  },
  {
    usta: "Şiber Vana (Sürgülü Vana)",
    literatur: "Gövde İçi Sürgülü Tam Geçişli Akışkan Kesme Vanası",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Ağır Tesisat",
    desc: "Vana simidi çevrildikçe içindeki dikey metal diskin aşağı inerek akışı tamamen kestiği, sürtünme kaybı yaratmayan ağır hizmet su tesisat vanasıdır.",
    quote: "Tesisatçı: 'Ana su sayacı girişine pirinç döküm 1 parmak şiber vana bağladık.'"
  },
  {
    usta: "Küresel Vana",
    literatur: "Çeyrek Tur (90°) Kollu Delikli Küre Tipi Kesme Vanası",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Hızlı Kesme",
    desc: "İçindeki delikli kürenin kolu 90 derece çevrilerek bir saniyede tam açılan veya kapanan, kombi ve sayaç altlarında en çok kullanılan standart vanadır.",
    quote: "Usta: 'Kombi giriş çıkışlarına tam geçişli pirinç küresel vanalar taktık.'"
  },
  {
    usta: "Çekvalf (Geri Dönüş Önleme Ventili)",
    literatur: "Tek Yönlü Akış Emniyet Ventili (Non-Return Valve)",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Tesisat Emniyeti",
    desc: "Akışkanın sadece tek bir istikamete akmasına izin veren, ters yöne akmak istediğinde klapesini yay veya yerçekimiyle kilitleyen koruma parçasıdır.",
    quote: "Tesisatçı: 'Hidrofor basma hattına çekvalf koyduk, hidrofor durunca su tesisattan geri kaçmaz.'"
  },
  {
    usta: "Şamandıra (Flatör)",
    literatur: "Mekanik Sıvı Seviye Kontrol ve Otomatik Kesme Düzeneği",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Depo Emniyeti",
    desc: "Su deposu veya rezervuarda su doldukça yukarı kalkan plastik/metal top koluyla vanayı kapatıp deponun taşmasını önleyen seviye mekanizmasıdır.",
    quote: "Usta: 'Su deposuna pirinç gövdeli ağır hizmet şamandırası taktık, depo taşma yapmaz.'"
  },
  {
    usta: "Pislik Tutucu (Filtre)",
    literatur: "Y Tipi Çıkarılabilir Paslanmaz Elekli Mekanik Tortu Filtresi",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Pompa Koruması",
    desc: "Kombi, sayaç ve hidroforların girişine bağlanan; boru içindeki kaynak çapağı, pas ve taşları içine hapsedip hassas cihazları koruyan filtredir.",
    quote: "Tesisatçı: 'Kombiyi devreye almadan önce Y tipi pislik tutucunun tapasını söküp içindeki tortuyu temizleyin.'"
  },
  {
    usta: "Koku Önleyici Yer Süzgeci (Klapeli Süzgeç)",
    literatur: "Çekvalfli ve Koku Fermarlı Mekanik Zemin Süzgeci",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Banyo Konforu",
    desc: "Banyo ve teras zeminindeki suyun gidere akmasını sağlayan; su kesildiğinde mekanik kapağı kapanarak kanalizasyon kokusunun eve girmesini önleyen süzgeçtir.",
    quote: "Fayansçı: 'Banyoya klapeli ve susuz koku önleyicili paslanmaz ızgaralı yer süzgeci koyduk.'"
  },
  {
    usta: "Linye",
    literatur: "Ana Dağıtım Panosundan İlk Dağıtım Buatına Kadar Olan Hat",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Elektrik Altyapısı",
    desc: "Sigorta panosundaki münferit bir W-otomat sigortadan çıkıp belirli bir oda veya linyeye kadar kesintisiz giden 2.5 mm²'lik ana besleme kablosudur.",
    quote: "Elektrikçi: 'Mutfak prizleri çok yüklendiği için mutfağa panodan ayrı bir 3x2.5 linye hattı çektik.'"
  },
  {
    usta: "Sorti",
    literatur: "Buattan Anahtara, Prize veya Aydınlatma Armatürüne Giden Uç Hat",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Elektrik Ucu",
    desc: "Linye hattının ulaştığı buat kutusundan tek bir lambaya, anahtara veya prize giden en uç elektrik kablosu koludur; metraj hesabında birimdir.",
    quote: "Elektrikçi: 'Salon için 6 adet aydınlatma sortisi, 8 adet priz sortisi montajı tamamlandı.'"
  },
  {
    usta: "Buat",
    literatur: "Sıva Altı Kablo Ek ve Dağıtım Bağlantı Kutusu (Junction Box)",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Dağıtım Kutusu",
    desc: "Duvara sıva altına gömülen, elektrik borularının bir araya gelip kabloların klemenslerle birbirine bağlandığı yuvarlak veya kare kapaklı kutudur.",
    quote: "Elektrikçi: 'Kabloları buatta klemensle sıkıca bağlayıp üzerine buat kapağını kapattık.'"
  },
  {
    usta: "Kasa (Anahtar Kasası)",
    literatur: "Sıva Altı Anahtar ve Priz Montaj Yuvası Kutusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Priz Yuvası",
    desc: "Priz veya elektrik anahtarının duvara sağlam monte edilebilmesi için sıva altına harçla gömülen, tırnaklı vidalama yuvalarına sahip plastik kutudur.",
    quote: "Usta: 'Kaba sıvadan önce lazerle kot alıp tüm priz kasalarını 30 cm yüksekliğe teraziyle gömdük.'"
  },
  {
    usta: "Klemens",
    literatur: "İzoleli Vidalı / Yaylı İletken Bağlantı ve Ek Elemanı",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Güvenli Bağlantı",
    desc: "Elektrik kablolarının birbirine çıplak elle burulup bantlanması yerine; yangın ve kıvılcım çıkarmadan güvenli bağlanmasını sağlayan izoleli parçadır.",
    quote: "Elektrikçi: 'Kabloları bantlamak yasaktır; tüm buat eklerinde WAGO yaylı klemens kullandık.'"
  },
  {
    usta: "W-Otomat (Otomatik Sigorta)",
    literatur: "Termik-Manyetik Minyatür Devre Kesici (MCB)",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Pano Emniyeti",
    desc: "Elektrik hattında aşırı akım çekildiğinde veya kısa devre olduğunda mandalı aşağı düşerek yangını önleyen DIN rayına monteli standart ev sigortasıdır.",
    quote: "Elektrikçi: 'Aydınlatma linyelerine 10 Amper, priz linyelerine ise 16 Amper B tipi W-otomat taktık.'"
  },
  {
    usta: "Kaçak Akım Rölesi (K.A.R.)",
    literatur: "Artık Akım Anahtarı (Residual Current Device - RCD / 30mA)",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Hayati Emniyet",
    desc: "Fazdan giren akımla nötrden dönen akımı kıyaslayan; bir insan elektrik çarptığında 30 miliamperlik sızıntıda saliseler içinde elektriği kesen hayat koruma rölesidir.",
    quote: "Denetmen: 'Panoda 30 mA hayat koruma rölesi olmadan şantiye elektriği kesinlikle açılamaz!'"
  },
  {
    usta: "Kofra",
    literatur: "Bina Şebeke Giriş Dağıtım ve Bıçaklı Sigorta Ana Kutusu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Ana Giriş",
    desc: "Şehir elektrik şebekesinden binaya giren ana yer altı kablosunun bağlandığı, binanın ana NH bıçaklı sigortalarını barındıran kilitli metal/polyester panodur.",
    quote: "Elektrik İdaresi: 'Bina giriş kofrasına 160 Amperlik NH sigortaları takıp enerjiyi verdik.'"
  },
  {
    usta: "Topraklama Çubuğu",
    literatur: "Bakır Kaplı Çelik / Sıcak Daldırma Galvaniz Topraklama Elektrodu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Topraklama",
    desc: "Elektrikli cihazlardaki gövde kaçaklarını güvenle toprağa iletmek için temel çukuru yanına veya bahçeye balyozla çakılan 1.5 - 2 metrelik som çubuktur.",
    quote: "Mühendis: 'Topraklama ölçümü 2 Ohm'un altında çıktı, temeldeki galvaniz şerit ve çubuklar onaylandı.'"
  },
  {
    usta: "Paratoner",
    literatur: "Erken Akı Uyarılı Aktif Yıldırımdan Korunma Başlığı (ESE)",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Yıldırım Koruma",
    desc: "Binanın en yüksek noktasına dikilen; yıldırım darbesini havada yakalayarak kalın bakır iniş iletkeniyle binaya zarar vermeden toprağa akıtan sistemdir.",
    quote: "Usta: 'Çatı kulesinin tepesine aktif paratoner başlığı dikip inişini test klemensine bağladık.'"
  },
  {
    usta: "Kablo Tavası (Trunking)",
    literatur: "Delikli Galvanizli Sac Kablo Taşıma Kanal Sistemi",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Kablo Taşıyıcı",
    desc: "Otopark tavanlarında ve şaftlarda yüzlerce zayıf ve kuvvetli akım kablosunu sarkmadan düzenli taşımak için tavana tijlerle asılan galvaniz kanallardır.",
    quote: "Elektrikçi: 'Bodrum otopark tavanına 200'lük galvaniz kablo tavası asıp linye kablolarını yatırdık.'"
  },
  {
    usta: "Halojen Free Kablo (HFFR)",
    literatur: "Halojenden Arındırılmış Alev İletmeyen Düşük Dumanlı Güvenlik Kablosu",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Yangın Standardı",
    desc: "Yangın anında zehirli hidroklorik gaz çıkarmayan, duman yoğunluğu çok düşük ve insanların kaçış yollarında zehirlenmesini önleyen zorunlu güvenlik kablosudur.",
    quote: "Yangın Danışmanı: 'Kamu binalarında ve AVM'lerde tüm elektrik tesisatında HFFR kablo şarttır.'"
  },
  {
    usta: "Tesisat Şaftı",
    literatur: "Düşey Mekanik ve Elektrik Tesisat Geçiş Boşluğu / Bacası",
    cat: "tesisat",
    catName: "Mekanik & Elektrik Tesisat",
    tag: "Mimari Boşluk",
    desc: "Binanın bodrumundan çatısına kadar kat döşemelerinde bırakılan; boruların, kablo tavalarının ve havalandırma kanallarının katlar arasında yükseldiği dikey galeridir.",
    quote: "Mimar: 'Mekanik şaft kapaklarını yangına 90 dakika dayanıklı şaft kapağı ile kapattık.'"
  },

  /* ==========================================================================
     7. ŞANTİYE ÖLÇÜM, ALET, APLİKASYON & İDARİ TERİMLER
     ========================================================================== */
  {
    usta: "Şakül / Çekül",
    literatur: "Düşey Doğrultu Ölçer / Yerçekimi Düşeylik Kontrol Aleti",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Geometri",
    desc: "Bir ipin ucuna bağlı konik ağırlık veya lazerli cihaz ile duvar, kolon veya kalıbın yerçekimine göre tam 90° düşey (dik) olup olmadığını anlamak için kullanılan en temel alettir.",
    quote: "Usta: 'Duvarı örmeden önce köşeye bir şakül sal, duvarda kaçıklık olmasın.'"
  },
  {
    usta: "Hortum Terazi",
    literatur: "Bileşik Kaplar İlkesine Dayalı Sıvı Seviye Eşitleme Düzeneği",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Geleneksel Terazi",
    desc: "İçi suyla doldurulmuş uzun şeffaf plastik hortumdur; birbirini görmeyen iki ayrı odadaki kot yüksekliğini su seviyelerinin eşitlenmesi prensibiyle birebir aktarır.",
    quote: "Usta: 'Odanın kotunu koridora aktarmak için hortum terazinin suyunu çizgiye sıfırladık.'"
  },
  {
    usta: "Lazer Nivo (Lazer Terazi)",
    literatur: "Kendinden Dengelemeli Çok Eksenli 360° Çapraz Lazer Seviyeleme Cihazı",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Modern Ölçüm",
    desc: "Odanın ortasına üçayakla kurulan; duvara ve tavana 360 derece parlak yeşil yatay ve dikey çizgiler atarak tavan, priz ve seramik kotlarını sıfır hatayla veren alettir.",
    quote: "Alçıpancı: 'Asma tavan kotunu tavana lazer terazi kurarak tüm odalara 2 dakikada çizdik.'"
  },
  {
    usta: "Nivo",
    literatur: "Optik / Dijital Jeodezik Yükseklik Farkı Ölçme Dürbünü",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Saha Harita Aleti",
    desc: "Şantiyede iki nokta arasındaki kot farkını milimetrik okumak için mira (ölçekli cetvel) ile birlikte kullanılan optik topoğraf dürbünüdür.",
    quote: "Haritacı: 'Temel hafriyatının taban kotunu nivo ile okuyup kepçe operatörüne kota geldiğini söyledik.'"
  },
  {
    usta: "Total Station",
    literatur: "Elektronik Lazerli Açı ve Mesafe Ölçer / Koordinat İstasyonu",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Hassas Aplikasyon",
    desc: "Lazer reflektörüyle koordinat, mesafe ve açıları bilgisayarlı kaydeden; kolon akslarını ve arsa sınırlarını uydu koordinatlarına göre araziye milimetrik çakan cihazdır.",
    quote: "Harita Mühendisi: 'Binanın köşe akslarını Total Station ile çakıp demir çivilerle işaretledik.'"
  },
  {
    usta: "Röper (Röper Noktası / Benchmark)",
    literatur: "Jeodezik Sabit Yükseklik ve Konum Referans Noktası",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Sabit Referans",
    desc: "Kadastro veya şantiye başlangıcında sarsılmayacak sağlam bir kayaya veya kaldırıma çakılan; tüm kat yüksekliklerinin '±0.00' referansı alınan sabit noktadır.",
    quote: "Topoğraf: 'Elektrik direğindeki kırmızı çivi röper noktamızdır; temeli ve katları buradan okuyun.'"
  },
  {
    usta: "Aplikasyon",
    literatur: "Proje Çizgilerinin ve Akslarının Araziye Birebir Aktarılması",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Saha Başlangıcı",
    desc: "Mimari ve statik projedeki kolonların, perdelerin ve temelin tam sınırlarının arazi üzerine kireçle, iplerle ve kazıklarla milimetrik olarak işaretlenmesi işidir.",
    quote: "Haritacı: 'Temel kazısından önce arsa köşe kazıklarının aplikasyonunu yapıp tutanak tuttuk.'"
  },
  {
    usta: "Plankote",
    literatur: "Arazinin Doğal Kotlarını ve Rölyefini Gösteren Eşyükselti Haritası",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Harita Çizimi",
    desc: "Mimari proje çizilmeden önce arazinin ne kadar meyilli olduğunu, ağaçları ve yolları gösteren yükseklik eğrili resmi topoğrafik haritadır.",
    quote: "Mimar: 'Proje tasarımına başlamadan önce arazinin detaylı plankotesini istedik.'"
  },
  {
    usta: "Aks (Aks Çizgisi)",
    literatur: "Taşıyıcı Elemanların Geometrik Merkezinden Geçen Referans Doğrusu",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Proje Dili",
    desc: "Statik projede kolonların ve kirişlerin tam merkezinden geçen, A, B, C ve 1, 2, 3 harf-rakamlarıyla adlandırılan ana yerleşim çizgileridir.",
    quote: "Statikçi: 'B-3 aksındaki kolonun demir donatısını kontrol edip betona onay verdik.'"
  },
  {
    usta: "Aks Kaçıklığı",
    literatur: "Kolon veya Perdenin Tasarım Merkez Hattından Sapması Kusuru",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "İmalat Hatası",
    desc: "Kalıp çakılırken yapılan dikkatsizlik sonucu bir üst kat kolonunun alt kat kolonundan 3-5 cm kenara kayarak oturması ve statik eksantrisite yaratması hatasıdır.",
    quote: "Kontrol Mühendisi: 'Aks kaçıklığı yapmayın; kolon kaçık oturursa moment üretip binayı zorlar!'"
  },
  {
    usta: "Çırpı İpi (Boyalı İp)",
    literatur: "Tebeşir Tozlu Çırpılarak Çizgi Çıkaran İp Düzeneği (Chalk Line)",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Hızlı Çizgi",
    desc: "İçi renkli tebeşir tozu dolu kutudan çıkan ip iki nokta arasına gerilip ortasından çekilip bırakıldığında betona dümdüz renkli çizgi çıkaran pratik el aletidir.",
    quote: "Duvarcı: 'Duvar örülecek aksı döşemeye çırpı ipi vurarak çizdik, tuğlaları bu çizgiye dizdik.'"
  },
  {
    usta: "Puantaj",
    literatur: "İş Gücü & Günlük Adam-Saat / Mesai Takip Cetveli",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Şantiye İdaresi",
    desc: "Şantiyede çalışan ustaların, işçilerin ve taşeronların günlük giriş-çıkış, yevmiye ve mesai saatlerinin kaydedildiği resmi takip cetvelidir.",
    quote: "Puantör: 'Bugün demirci ekibinden 8 kişi tam gün, 2 kişi yarım gün çalıştı, deftere işledim.'"
  },
  {
    usta: "Formen / Şantiye Şefi",
    literatur: "Saha İmalat Koordinatörü / Kıdemli Uygulama Sorumlusu",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Yönetim",
    desc: "Şantiye sahasında taşeron ekipleri koordine eden, projeye uygunluğu denetleyen, malzeme siparişini ve iş güvenliğini yöneten yetkili saha lideridir.",
    quote: "Şantiye Şefi: 'Kalıp bitmeden demirci sahaya girmesin, önce paspaylarını kontrol edeceğim.'"
  },
  {
    usta: "Taşeron (Alt Yüklenici)",
    literatur: "Belirli Bir Uzmanlık Alanını Taahhüt Eden Sözleşmeli Alt Yüklenici",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "İş Sözleşmesi",
    desc: "Ana müteahhitten kalıp, demir, alçı, elektrik veya dış cephe gibi bağımsız imalat kalemlerini anahtar teslimi veya işçilik olarak üstlenen ekiptir.",
    quote: "Müteahhit: 'Kaba yapı bitti, ince işler için alçı ve seramik taşeronlarıyla sözleşme imzaladık.'"
  },
  {
    usta: "Hakediş",
    literatur: "Dönemsel İmalat Metrajı ve Kesin Hesap Ödeme Raporu (Progress Payment)",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Finans & Muhasebe",
    desc: "Taşeronun veya müteahhidin ay boyunca sahada imal ettiği işlerin yerinde ölçülerek birim fiyatlarla çarpılması ve resmi ödemeye bağlanması belgesidir.",
    quote: "Proje Müdürü: '3. ara hakediş dosyasını hazırladık; dökülen 850 m³ betonun bedeli ödenecek.'"
  },
  {
    usta: "Ataşman",
    literatur: "Projeden Farklı veya Gizli Kalan İmalatların Ölçülü Tespit Tutanağı",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Resmi Evrak",
    desc: "Hafriyat derinleşmesi veya zemin dolgusu gibi daha sonra üzeri kapanacak ve projede olmayan ek işlerin yerinde fotoğraflanıp çizilerek imzalandığı evraktır.",
    quote: "Kontrol Mühendisi: 'Temel altı balçık çıktığı için ek hafriyat yaptık, ataşmanını çizip imzaya sunduk.'"
  },
  {
    usta: "Rölöve",
    literatur: "Mevcut Yapının Sahadaki Birebir Gerçek Ölçülerinin Çizimi (As-Built)",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Tadilat & Tarihi Eser",
    desc: "Tadilat yapılacak veya tarihi bir yapının yerinde lazer metre ile tüm kapı, pencere, duvar kalınlıklarının tek tek ölçülüp autocad ortamına aktarılmasıdır.",
    quote: "Mimar: 'Dairenin tadilatına başlamadan önce tüm odaların rölövesini alıp planını çizdik.'"
  },
  {
    usta: "Yeşil Defter",
    literatur: "Hakedişe Esas Ayrıntılı İmalat ve Metraj Hesap Cetveli",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Metraj Kaydı",
    desc: "Şantiyedeki her imalat kaleminin (kalıp m², beton m³, demir tonajı) parça parça ölçülerinin girilip toplamının hesaplandığı resmi hakediş cetvelidir.",
    quote: "Metrajcı: '4. kat döşeme kalıbının metrajını yeşil deftere işleyip hakedişe ekledik.'"
  },
  {
    usta: "Birim Fiyat Analizi",
    literatur: "1 Birim İmalatın Malzeme, İşçilik, Makine ve Genel Gider Bileşeni",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Maliyet Hesabı",
    desc: "Örneğin 1 m³ C30 betonun veya 1 m² seramiğin maliyetini oluşturan; malzeme bedeli, usta yevmiyesi, mikser kirası ve %25 müteahhit kârının detay dökümüdür.",
    quote: "Maliyet Uzmanı: '2026 Çevre Şehircilik analizlerine göre 1 m² saten alçılı boya analizini güncelledik.'"
  },
  {
    usta: "Geçici Kabul",
    literatur: "İnşaatın Tamamlanarak İşverene İlk Eksikli Teslim Süreci",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Teslim Süreci",
    desc: "Bina bittiğinde kurulan heyetin sahayı gezerek 'Geçici Kabul Tutanağı' tutması; küçük kusurların listelenip giderilmesi için süre verilmesi aşamasıdır.",
    quote: "Şantiye Şefi: 'Geçici kabul heyeti geldi, ufak boya rötuşları dışında bina eksiksiz teslim alındı.'"
  },
  {
    usta: "Kesin Kabul",
    literatur: "Teminat Süresi Sonunda Nihai Sözleşme ve Teminat İadesi Aşaması",
    cat: "olcum_idari",
    catName: "Ölçüm, Alet & Şantiye İdaresi",
    tag: "Nihai Kapanış",
    desc: "Geçici kabulden genelde 12 ay sonra, bina kışı ve yazı geçirip gizli bir ayıp çıkmadığı görüldüğünde yapılan nihai kabul ve teminat mektubunun iadesidir.",
    quote: "Müteahhit: 'Binanın 1 yıllık garanti süresi doldu, kesin kabul tutanağı imzalandı ve teminat çözüldü.'"
  }
];
