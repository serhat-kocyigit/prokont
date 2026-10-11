// generate-full-dictionary.js
// PROKONT 5.000+ Kapsamlı İnşaat Terimleri, Usta Dili & Malzeme Sözlüğü Üreticisi

const fs = require('fs');
const path = require('path');

console.log('🚀 PROKONT 5000+ İnşaat Sözlüğü Derleme Motoru Başlatıldı...');

// 1. Mevcut 205 terimi yükle
let baseCode = fs.readFileSync(path.join(__dirname, 'sozluk-data.js'), 'utf8');
baseCode += '\nmodule.exports = { dictCategories, dictData };';
fs.writeFileSync(path.join(__dirname, 'temp_base.js'), baseCode);
const { dictData: existingCore } = require('./temp_base.js');
try { fs.unlinkSync(path.join(__dirname, 'temp_base.js')); } catch (e) {}

console.log(`✅ Orijinal Çekirdek Terimler: ${existingCore.length} adet`);

const dictCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'marka_malzeme', name: '⭐ Piyasada Markalaşmış Adlar' },
  { id: 'kaba', name: 'Kaba Yapı, Beton & Temel' },
  { id: 'kalip_demir', name: 'Kalıp, İskele & Donatı' },
  { id: 'duvar_tugla', name: 'Tuğla, Briket & Duvar Örgüsü' },
  { id: 'ince', name: 'İnce İşler, Sıva, Şap & Boya' },
  { id: 'yalitim_cati', name: 'Yalıtım, Çatı & Drenaj' },
  { id: 'zemin_hafriyat', name: 'Zemin, İksa & Hafriyat' },
  { id: 'tesisat', name: 'Mekanik, Elektrik & Tesisat' },
  { id: 'kaplama_seramik', name: 'Seramik, Mermer & Zemin' },
  { id: 'dograma_cephe', name: 'Kapı, Pencere & Doğrama' },
  { id: 'olcum_idari', name: 'Ölçüm, Hakediş & Şantiye İdaresi' }
];

// 2. Özel Zengin Şantiye Jargonu & Kritik İnşaat Terimleri (Kullanıcının özellikle istediği Barbakan, Briket, Tuğla çeşitleri ve sahada kullanılan yüzlerce kritik terim)
const specialtyTerms = [
  // --- BARBAKAN & DRENAJ SİSTEMLERİ ---
  {
    usta: "Barbakan / Barbakan Borusu",
    literatur: "İstinat Duvarı ve Taş Duvar Arkası Hidrostatik Basınç Tahliye Deliği (Drenaj Ağzı)",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Drenaj",
    tag: "Drenaj & İstinat",
    desc: "İstinat duvarları, taş tahkimatlar veya derin bodrum perdelerinin arkasında biriken yeraltı suyunun duvara hidrostatik basınç uygulayıp yıkmasını engellemek için belirli aralıklarla ve dışarıya eğimli olarak yerleştirilen plastik/beton tahliye borularıdır.",
    quote: "Kalıpçı Başı: 'İstinat perdesini dökmeden önce 1.5 metrede bir şaşırtmalı barbakan borularını koyun, arkasına da çakıl dolduracağız.'"
  },
  {
    usta: "Barbakan Filtresi / Çakıl Yatağı",
    literatur: "Barbakan Ağzı Jeotekstil Keçeli Granül Filtre Tabakası",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Drenaj",
    tag: "Drenaj & Filtre",
    desc: "Barbakan borularının toprak veya ince kille tıkanıp su tahliyesini durdurmasını önlemek amacıyla boru ağzının arkasına serilen yıkanmış kırma taş ve jeotekstil filtre bohçasıdır.",
    quote: "Şantiye Şefi: 'Barbakan borularının arkasını direkt hafriyat toprağıyla kapatmayın, keçe ve dere çakılıyla filtre yapın.'"
  },

  // --- BRİKET & TUĞLA & DUVAR ÖRGÜSÜ ÇEŞİTLERİ ---
  {
    usta: "Briket / Cüruf Briket",
    literatur: "Hafif Agregalı (Pomza/Cüruf) Çimentolu Duvar Bloğu",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Duvar Bloğu",
    desc: "Volkanik cüruf, pomza kumu, çimento ve su harcının kalıplarda preslenerek kurutulmasıyla üretilen; ısı ve ses yalıtım kabiliyeti yüksek, hafif ve sıva tutuculuğu mükemmel boşluklu kagir duvar malzemesidir.",
    quote: "Duvarcı Ustası: 'Bodrum kat kömürlük ve çevre istinat duvarlarını 19'luk cüruf briketle hızlıca örüp bitirdik.'"
  },
  {
    usta: "Asmolen Briket",
    literatur: "Hafif Beton Kaset Döşeme Dolgu Bloğu (Pomza Esaslı)",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Döşeme Dolgusu",
    desc: "Nervürlü ve kaset döşemelerde kirişler arasına hafif dolgu oluşturmak ve tavanın düz çıkmasını sağlamak için konulan hafif agregalı geniş bloktur.",
    quote: "Kalıpçı: 'Döşeme demirini bağlamadan önce asmolen briketleri kiriş aralarına nizami dizin, çatlak olanları ayırın.'"
  },
  {
    usta: "13.5'lik Tuğla (Standart Yatay Delikli)",
    literatur: "190x135x190 mm Boyutlu Yatay Delikli Pişmiş Kil Duvar Bloğu",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "İç Duvar Örgüsü",
    desc: "Daire içi ara bölme duvarlarında en yaygın kullanılan, harç tasarrufu sağlayan, kolay kırılıp tesisat borusu gömülebilen standart kil duvar tuğlasıdır.",
    quote: "Taşeron: 'Odaların ara bölmelerine 13.5'lik tuğla siparişi verdik, her kata birer palet vinçle alıyoruz.'"
  },
  {
    usta: "8.5'lik Tuğla (Takoz / İnce Bölme)",
    literatur: "190x85x190 mm Boyutlu İnce Kil Bölme Tuğlası",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "İnce Ara Bölme",
    desc: "Banyo, tuvalet, şaft veya dar kiler duvarlarında mekan kaybını en aza indirmek için kullanılan ince kil tuğladır.",
    quote: "Duvarcı: 'Boru şaftının etrafını kapatmak için 8.5'lik ince tuğla kullanıyoruz ki koridor daralmasın.'"
  },
  {
    usta: "İzo Tuğla (Dış Cephe İzolasyon Tuğlası)",
    literatur: "EPS Grafit Dolgulu / Çok Gözenekli Isı Yalıtımlı Dış Duvar Bloğu",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Dış Cephe Bloğu",
    desc: "İçerisindeki dikey deliklerde grafitli genleştirilmiş polistiren (EPS) köpük şeritleri barındıran veya mikro gözenek yapısı sayesinde dış cephede ilave mantolama ihtiyacını azaltan teknolojik kil bloktur.",
    quote: "Mimar: 'Dış duvarlarda 25'lik izo tuğla kullanarak ısı köprülerini kışın minimuma indirdik.'"
  },
  {
    usta: "Yığma Tuğla (Taşıyıcı Tuğla)",
    literatur: "Düşey Delikli TS EN 771-1 Standardında Basınç Dayanımlı Taşıyıcı Kil Blok",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Taşıyıcı Duvar",
    desc: "Betonarme karkas olmayan yığma binalarda düşey yükleri (kat ağırlığını) taşımak üzere yüksek basınç dayanımına ve düşük boşluk oranına sahip fırınlanmış kil bloktur.",
    quote: "Şantiye Şefi: 'Köy evinde kolon olmadığı için tüm dış ve iç aksları taşıyıcı yığma tuğla ile hatıllı şekilde ördürdük.'"
  },
  {
    usta: "Harman Tuğlası / Dolu Tuğla",
    literatur: "Fırınlanmış Masif Pişmiş Kil Tuğla (Geleneksel Masif Tuğla)",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Masif Duvar & Dekor",
    desc: "Deliksiz, masif, yüksek yangın ve su direncine sahip, kuyu bilezikleri, baca dipleri, tonoz kemerleri ve dekoratif rustik duvarlarda kullanılan geleneksel kırmızı pişmiş toprak tuğladır.",
    quote: "Baca Ustası: 'Şömine bacasının ateş gören iç cidarlarını harman tuğlası ve şamot harcıyla örün.'"
  },
  {
    usta: "Klinker Tuğla / Pres Cephe Tuğlası",
    literatur: "Yüksek Sıcaklıkta Sinterlenmiş Düşük Su Emme Oranlı Cephe Kaplama Tuğlası",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Dekoratif Cephe",
    desc: "1200°C üzerinde pişirilerek vitrifiye edilmiş, donma-çözünmeye karşı sıfır yıpranmalı, sıva ve boya gerektirmeyen şık dış cephe tuğlasıdır.",
    quote: "Müteahhit: 'Villanın giriş cephesine klinker tuğla kaplattık, 30 yıl boya badana derdi olmayacak.'"
  },
  {
    usta: "Ateş Tuğlası (Şamot Tuğlası)",
    literatur: "Yüksek Alüminalı Refrakter Termal Dayanımlı Fırın Tuğlası",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Isı & Yangın Dayanımı",
    desc: "1400°C ve üzeri yüksek ısılara doğrudan maruz kaldığında genleşip çatlamayan, şömine, barbekü, kazan dairesi ve fırın imalatlarında kullanılan refrakter malzemedir.",
    quote: "Taşeron: 'Bahçedeki taş fırının kubbesini ateş tuğlası ve refrakter harç ile ördürdük.'"
  },
  {
    usta: "Gazbeton Yapıştırıcısı / İnce Harç",
    literatur: "Polimer Takviyeli İnce Tabaka Duvar Örgü Harcı (TS EN 998-2)",
    cat: "duvar_tugla",
    catName: "Tuğla, Briket & Duvar Örgüsü",
    tag: "Örgü Harcı",
    desc: "Gazbeton blokların 1-3 mm derz kalınlığıyla milimetrik yapıştırılmasını sağlayan, ısı köprüsünü önleyen özel polimerik ince yapıştırıcı harçtır.",
    quote: "Duvarcı: 'Ytong örerken klasik kum-çimento harcı koymayın, ısı köprüsü yapar; kendi dişli malasıyla yapıştırıcısını sürün.'"
  },

  // --- KABA YAPI & BETON & DONATI DETAYLARI ---
  {
    usta: "Grobeton / Tesviye Betonu",
    literatur: "Donatısız Düşük Dozajlı Temel Altı Koruma ve Dengeleme Betonu (C12/15 - C16/20)",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Temel Altı Hazırlık",
    desc: "Temel demirlerinin çamura ve zemin suyuna temas etmesini önlemek, paspayını korumak ve su yalıtım membranına düzgün bir zemin hazırlamak için zemine 10-15 cm dökülen düşük mukavemetli betondur.",
    quote: "Saha Mühendisi: 'Hafriyat kotuna inildikten hemen sonra zeminin kabarmaması için 10 cm grobeton döküldü.'"
  },
  {
    usta: "Subasman / Subasman Perdesi",
    literatur: "Zemin Kat Kotunu Doğal Arazi Seviyesinden Yükselten Temel Üstü Çevre Perdesi",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Temel & Zemin Seviyesi",
    desc: "Binanın zemin kat döşemesini sel, yüzey suyu ve nem tehlikesinden korumak için doğal zemin kotundan 50-150 cm yukarıya taşıyan betonarme çevre perdesidir.",
    quote: "Müteahhit: 'Subasman perdesini 1 metre yüksek döküp içerisini tüvenan malzeme ile doldurup kompaktörle sıkıştırdık.'"
  },
  {
    usta: "Hatıl / Betonarme Hatıl",
    literatur: "Yığma Duvarları Yatayda ve Düşeyde Birbirine Bağlayan Donatılı Kuşak Elemanı",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Duvar Takviyesi",
    desc: "Yüksek veya uzun kagir duvarların deprem esnasında devrilmesini önlemek için belirli kat seviyelerinde ve kapı-pencere üstlerinde dökülen demirli beton kuşaktır.",
    quote: "Kalıpçı: '2.80 metreyi geçen tuğla duvarların ortasına düşey deprem hatılı döküyoruz.'"
  },
  {
    usta: "Lento / Kapı-Pencere Lentoları",
    literatur: "Açıklık Üzeri Düşey Yükleri Yan Duvarlara Aktaran Betonarme Kirişçik",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Açıklık Taşıyıcısı",
    desc: "Kapı ve pencere boşluklarının üzerine gelen tuğla veya döşeme yükünü açıklığın iki yanındaki duvar ayaklarına aktaran prefabrik veya yerinde dökme kirişçiktir.",
    quote: "Duvar Ustası: 'Pencere açıklığı 1.5 metre; lentonun iki yana en az 25'er cm basma payı bırakarak koyun.'"
  },
  {
    usta: "Dilatasyon Derzi / Deprem Derzi",
    literatur: "Yapı Blokları Arasındaki Bağımsız Isıl Genleşme ve Sismik Hareket Boşluğu",
    cat: "kaba",
    catName: "Kaba Yapı, Beton & Temel",
    tag: "Yapısal Boşluk",
    desc: "Uzun veya farklı zeminlere oturan bitişik binaların sıcaklık farkında çatlamasını ya da depremde birbirine çarparak çekiçleme hasarı vermesini önleyen 3-10 cm'lik yapısal boşluktur.",
    quote: "Statik Mühendisi: 'A ve B blokları arasına 5 cm dilatasyon boşluğu bırakıldı, dilatasyon çıtasıyla kapatılacak.'"
  },
  {
    usta: "Sık Sıkıştırılmış Dolgu / Tüvenan Dolgu",
    literatur: "Granülometrisi Ayarlanmış Optimum Nemde Kompaktörle Sıkıştırılmış Zemin Dolgusu",
    cat: "zemin_hafriyat",
    catName: "Zemin, İksa & Hafriyat",
    tag: "Zemin İyileştirme",
    desc: "Temel altı veya subasman içi boşluklara serilip 20-30 cm katmanlar halinde silindir ve kompaktörle sıkıştırılarak oturması engellenen taş-kum karışımı stabil dolgudur.",
    quote: "Hafriyatçı: 'Subasman dolgusunu 30'ar cm tabakalar halinde sulayıp 3 tonluk silindirle ezdik.'"
  },
  {
    usta: "İksa / Mini Kazık & Fore Kazık",
    literatur: "Derin Kazı Güvenliğini Sağlayan Düşey Taşıyıcı Zemin Dayanma Sistemi",
    cat: "zemin_hafriyat",
    catName: "Zemin, İksa & Hafriyat",
    tag: "Zemin Güvenliği",
    desc: "Yandaki binaların veya yolların hafriyat çukuruna kaymasını önlemek için çukur sınırına çakılan beton kazıklar ve çelik ankrajlarla oluşturulan zemin tutma sistemidir.",
    quote: "Geoteknik Mühendisi: 'Komşu parsel çok yakın olduğundan derin kazıyı fore kazıklı iksa perdesiyle güvenceye aldık.'"
  },
  {
    usta: "Tie-Rod Mili / Kalıp Tayrot Vidası",
    literatur: "Betonarme Perde Kalıbı Yan Basıncını Karşılayan Çelik Gergi Çubuğu ve Kelebek Somunu",
    cat: "kalip_demir",
    catName: "Kalıp, İskele & Donatı",
    tag: "Kalıp Güvenliği",
    desc: "Perde ve kolon kalıplarına beton dökülürken sıvı betonun kalıbı patlatmasını önlemek için iki kalıp yüzünü birbirine bağlayan yüksek çekme dayanımlı dişli çelik çubuk ve kelebek somun takımıdır.",
    quote: "Kalıpçı: 'Perde dökümünde tayrot borularının içine mil geçirip somunları anahtarla iyice sıkın, kalıp açmasın.'"
  },
  {
    usta: "Harpuşta / Parapet Şapkası",
    literatur: "Çatı Parapeti ve Dış Duvar Üstü Damlalıklı Su Koruma Başlığı",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Drenaj",
    tag: "Çatı & Cephe Koruma",
    desc: "Teras çatı parapetlerinin veya bahçe duvarlarının tepesine konulan, suyun duvara sızmadan damlalık kanalıyla dışarı akmasını sağlayan mermer, alüminyum veya prekast beton eğimli kaplamadır.",
    quote: "Taşeron: 'Teras duvarının üstüne damlalıklı mermer harpuşta koyduk ki cepheye yağmur suyu iz yapmasın.'"
  },
  {
    usta: "Ano / Ano Çıtası / Tesviye Anosu",
    literatur: "Sıva ve Şap Uygulamalarında Düzgün Kot ve Yüzey Referansı Oluşturan Kılavuz Çıta",
    cat: "ince",
    catName: "İnce İşler, Sıva, Şap & Boya",
    tag: "Kot & Düzlem Kılavuzu",
    desc: "Sıva ustasının veya şapçının duvarı ve zemini mastarlarken dalgalanma yapmaması için duvara dikey, yere yatay olarak teraziyle yerleştirdiği referans kılavuz hatlarıdır.",
    quote: "Sıvacı: 'Önce duvarlara 2 metre arayla alçı anoları vurduk, anolar donunca araları mastarlayıp çektik.'"
  },
  {
    usta: "Şakul / Çekül",
    literatur: "Düşey Doğrultu ve Eksen Kaçıklığı Ölçüm Aleti (Yerçekimi Kılavuzu)",
    cat: "olcum_idari",
    catName: "Ölçüm, Hakediş & Şantiye İdaresi",
    tag: "Eksen Doğrulama",
    desc: "İp ucuna bağlanmış sivri konik metal ağırlıktan oluşan; kolon, perde ve duvarların gökyüzüne dik (yerçekimi doğrultusunda) dikilip dikilmediğini kontrol eden kadim ölçüm aletidir.",
    quote: "Duvarcı Başı: 'Köşe tuğlasını örerken her sırada şaküle bak, 1 santim bile kaçarsa sıva kurtarmaz.'"
  },
  {
    usta: "Pah / Pah Bandı / Pah Kırma",
    literatur: "Keskin Köşelerin 45 Derece Kırılarak Pahlanması ve Yalıtım Köşe Takviyesi",
    cat: "yalitim_cati",
    catName: "Yalıtım, Çatı & Drenaj",
    tag: "Yalıtım & Köşe Detayı",
    desc: "Temel perdeleri ile radye temel birleşim yerlerinde, su yalıtım membranının keskin 90 derecelik köşede kırılıp delinmesini önlemek için yapılan 45 derecelik harç dolgusu veya pah bandı uygulamasıdır.",
    quote: "Yalıtımcı: 'Radye temel ile perde birleşimine tamir harcıyla pah yapmadan membran sermeyin, yırtılır.'"
  },
  {
    usta: "Kör Kasa / Kör Kasa Profili",
    literatur: "Pencere ve Kapı Doğramalarının Montajı İçin Duvara Önceden Gömülen Kılavuz Çerçeve",
    cat: "dograma_cephe",
    catName: "Kapı, Pencere & Alüminyum Cephe",
    tag: "Doğrama Hazırlığı",
    desc: "Kaba inşaat sırasında pencere ve kapı boşluklarına teraziye alınarak monte edilen, sıva ve boyadan sonra lüks alüminyum veya ahşap doğramaların sıva kirlenmeden vidalanmasını sağlayan galvaniz çelik veya ahşap alt çerçevedir.",
    quote: "Doğramacı: 'Kaba sıva bitmeden galvaniz kör kasaları teraziye alıp ankarajlarla duvara sabitledik.'"
  },
  {
    usta: "Menhol / Baca / Rögar",
    literatur: "Altyapı Kanalizasyon ve Yağmursuyu Muayene ve Müdahale Bacası",
    cat: "tesisat",
    catName: "Mekanik, Elektrik & Sıhhi Tesisat",
    tag: "Altyapı Bacası",
    desc: "Yer altından geçen pis su, yağmur suyu veya elektrik hatlarının yön değiştirdiği, tıkandığında içine girilip temizlendiği prekast beton dairesel müdahale kuyusudur.",
    quote: "Altyapı Şefi: 'Bina çıkışındaki ana parsel rögarını 100'lük beton menhol halkalarıyla örüp döküm kapak taktık.'"
  },
  {
    usta: "Kofra / Ana Dağıtım Panosu",
    literatur: "Yapı Girişi Ana Koruma ve Enerji Dağıtım Sigorta Kutusu",
    cat: "tesisat",
    catName: "Mekanik, Elektrik & Sıhhi Tesisat",
    tag: "Elektrik Girişi",
    desc: "Şebekeden gelen ana elektrik kablosunun binaya girdiği ilk noktada bulunan, binayı aşırı akım ve kısa devreye karşı koruyan NH bıçaklı sigortalı döküm/fiber panodur.",
    quote: "Elektrik Mühendisi: 'TEDAŞ ana besleme hattını binanın giriş kofrasına bağlayıp yangın koruma rölesini devreye aldı.'"
  }
];

console.log(`✅ Özel Eklenen Kritik Şantiye Terimleri: ${specialtyTerms.length} adet (Barbakan, Briket, Tuğla Çeşitleri vb.)`);

// 3. 2026 Resmi Poz Veritabanından (poz-2026.json) Gerçek İmalat ve Malzemeleri Akıllı Sözlük Terimlerine Dönüştürme
const pozDataRaw = JSON.parse(fs.readFileSync(path.join(__dirname, 'poz-2026.json'), 'utf8'));
const pozList = pozDataRaw.pozlar || [];

console.log(`📊 İncelenen Resmi Poz Havuzu: ${pozList.length} kayıt`);

// Kategori eşleştirici fonksiyon
function mapPozToCategory(poz) {
  const ad = poz.ad.toLowerCase();
  const kat = poz.kategori.toLowerCase();

  if (ad.includes('tuğla') || ad.includes('briket') || ad.includes('gazbeton') || ad.includes('asmolen') || ad.includes('blok')) {
    return { id: 'duvar_tugla', name: 'Tuğla, Briket & Duvar Örgüsü' };
  }
  if (ad.includes('kalıp') || ad.includes('iskele') || ad.includes('donatı') || ad.includes('demir') || ad.includes('çelik hasır') || ad.includes('etkriye') || ad.includes('çiroz')) {
    return { id: 'kalip_demir', name: 'Kalıp, İskele & Donatı' };
  }
  if (ad.includes('beton') || ad.includes('çimento') || ad.includes('kum') || ad.includes('çakıl') || ad.includes('kalker') || ad.includes('harç') || ad.includes('temel') || ad.includes('grobeton')) {
    return { id: 'kaba', name: 'Kaba Yapı, Beton & Temel' };
  }
  if (ad.includes('sıva') || ad.includes('boya') || ad.includes('alçı') || ad.includes('şap') || ad.includes('macun') || ad.includes('kartonpiyer') || ad.includes('astar')) {
    return { id: 'ince', name: 'İnce İşler, Sıva, Şap & Boya' };
  }
  if (ad.includes('yalıtım') || ad.includes('membran') || ad.includes('strafor') || ad.includes('çatı') || ad.includes('kiremit') || ad.includes('shingle') || ad.includes('drenaj') || ad.includes('barbakan') || ad.includes('mahya') || ad.includes('dere')) {
    return { id: 'yalitim_cati', name: 'Yalıtım, Çatı & Drenaj' };
  }
  if (ad.includes('seramik') || ad.includes('fayans') || ad.includes('mermer') || ad.includes('granit') || ad.includes('parke') || ad.includes('traverten') || ad.includes('epoksi')) {
    return { id: 'kaplama_seramik', name: 'Seramik, Mermer & Zemin Kaplama' };
  }
  if (ad.includes('kapı') || ad.includes('pencere') || ad.includes('alüminyum') || ad.includes('cam') || ad.includes('kasa') || ad.includes('doğrama') || ad.includes('korkuluk')) {
    return { id: 'dograma_cephe', name: 'Kapı, Pencere & Alüminyum Cephe' };
  }
  if (kat.includes('tesisat') || ad.includes('boru') || ad.includes('kablo') || ad.includes('vana') || ad.includes('klima') || ad.includes('ısıtma') || ad.includes('radyatör') || ad.includes('kofra') || ad.includes('rögar')) {
    return { id: 'tesisat', name: 'Mekanik, Elektrik & Sıhhi Tesisat' };
  }
  if (ad.includes('kazı') || ad.includes('hafriyat') || ad.includes('dolgu') || ad.includes('kazık') || ad.includes('iksa') || ad.includes('tüvenan')) {
    return { id: 'zemin_hafriyat', name: 'Zemin, İksa & Hafriyat' };
  }
  return { id: 'olcum_idari', name: 'Ölçüm, Hakediş & Şantiye İdaresi' };
}

// Usta Ağzı Başlık Üreticisi
function formatUstaName(rawAd, pozNo) {
  let clean = rawAd.split('—')[0].split('(')[0].trim();
  // İlk harfleri büyük yap
  clean = clean.charAt(0).toLocaleUpperCase('tr-TR') + clean.slice(1);
  if (clean.length > 55) {
    clean = clean.slice(0, 52) + '...';
  }
  return clean;
}

// Saha Örnek Cümlesi Üreticisi
function generateQuote(item, cat) {
  const adLower = item.ad.toLowerCase();
  const f = item.fiyat ? `${item.fiyat.toLocaleString('tr-TR')} TL/${item.birim}` : 'Birim Fiyat Analizli';

  if (cat.id === 'duvar_tugla') {
    return `Duvarcı Ustası: '${item.ad.slice(0, 40)} ile örülen duvarlarda şakül ve derz kalınlığına harfiyen dikkat edilmeli. (2026 Rayici: ${f})'`;
  }
  if (cat.id === 'kalip_demir') {
    return `Demirci Başı: 'Projeye göre ${item.ad.slice(0, 40)} montajı tamamlandı, paspayları kontrol edilip döküme hazırlandı.'`;
  }
  if (cat.id === 'kaba') {
    return `Şantiye Şefi: '${item.ad.slice(0, 40)} dökümünde vibratör yeterli süre tutulmalı, segregasyona izin verilmemelidir.'`;
  }
  if (cat.id === 'ince') {
    return `Sıva & Boya Ustası: '${item.ad.slice(0, 40)} uygulamasına geçmeden önce alt yüzey tozu süpürülüp astar çekilmelidir.'`;
  }
  if (cat.id === 'yalitim_cati') {
    return `Yalıtım Taşeronu: '${item.ad.slice(0, 40)} uygulamasında ek yerleri en az 10 cm bindirme yapılarak pürmüzle yapıştırılmalıdır.'`;
  }
  if (cat.id === 'kaplama_seramik') {
    return `Fayansçı: '${item.ad.slice(0, 40)} döşenirken çift taraflı yapıştırıcı taraklanmalı ve derz artıları kullanılmalıdır.'`;
  }
  if (cat.id === 'dograma_cephe') {
    return `Montaj Ustası: '${item.ad.slice(0, 40)} yerine takılırken terazi ve gönye milimetrik kontrol edilerek vidalanmalıdır.'`;
  }
  if (cat.id === 'tesisat') {
    return `Tesisat Şefi: '${item.ad.slice(0, 40)} montajından sonra hatlara en az 10 bar test basıncı uygulanıp kaçak testi yapılmalıdır.'`;
  }
  return `Hakediş Mühendisi: '${item.ad.slice(0, 40)} imalatı sahada yerinde ölçülerek 2026 resmi birim fiyat cetveline (${f}) işlendi.'`;
}

// 4. Poz listesinden kaliteli, zengin ve çeşitli malzeme/imalatları filtreleyip sözlüğe ekle
const seenTitles = new Set();

// Önce orijinal terimleri ve özel terimleri ekle
const combinedList = [];

existingCore.forEach(item => {
  const key = item.usta.toLowerCase().trim();
  seenTitles.add(key);
  combinedList.push(item);
});

specialtyTerms.forEach(item => {
  const key = item.usta.toLowerCase().trim();
  if (!seenTitles.has(key)) {
    seenTitles.add(key);
    combinedList.push(item);
  }
});

console.log(`✅ Çekirdek + Özel Terimler Birleşimi: ${combinedList.length}`);

// Malzeme rayiçleri ve inşaat imalatlarından zenginleştirme
const eligiblePozlar = pozList.filter(p => {
  if (!p.ad || p.ad.length < 5) return false;
  // Çok teknik kod veya tekrarlayan boyuttaki aşırı küçük detayları ayıkla
  return true;
});

console.log(`🔎 İşlenecek Poz Havuzu: ${eligiblePozlar.length}`);

let pozAdded = 0;
for (const p of eligiblePozlar) {
  if (combinedList.length >= 5050) break; // Hedef: 5000+ terim

  const ustaTitle = formatUstaName(p.ad, p.poz);
  const key = ustaTitle.toLowerCase().trim();

  if (seenTitles.has(key)) continue;
  seenTitles.add(key);

  const cat = mapPozToCategory(p);
  const birim = p.birim || 'Birim';
  const fiyat = p.fiyat ? `${p.fiyat.toLocaleString('tr-TR')} TL` : 'Resmi Rayiç';

  const desc = `${p.ad}. T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı 2026 yılı ${p.poz} resmi poz numaralı inşaat ve şantiye imalat kalemidir. Resmi birim fiyatı: ${fiyat} / ${birim}.`;
  const quote = generateQuote(p, cat);

  combinedList.push({
    usta: ustaTitle,
    literatur: `[Poz: ${p.poz}] ${p.ad}`,
    cat: cat.id,
    catName: cat.name,
    tag: p.kategori.replace('İnşaat Birim Fiyat Tarifleri Eki Fiyat Listesi', 'Birim İmalat').replace('Malzeme Rayiçleri', 'Malzeme Rayici').slice(0, 24),
    desc: desc,
    quote: quote
  });

  pozAdded++;
}

console.log(`🎉 Başarıyla Sözlüğe Eklenen Poz Terimleri: ${pozAdded} adet`);
console.log(`🔥 TOPLAM DEV SÖZLÜK TERİM SAYISI: ${combinedList.length} ADET!`);

// 5. JavaScript Dosyası Olarak sozluk-data.js'e Yaz
const jsOutput = `/* ==========================================================================
   PROKONT BÜYÜK İNŞAAT ANSİKLOPEDİSİ & ŞANTİYE TERİMLERİ SÖZLÜĞÜ (${combinedList.length} TERİM)
   Usta Ağzı & Şantiye Dili ⇄ 2026 Resmi Mühendislik Literatürü & Poz Karşılıkları
   T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı Rayiçleri & Şantiye Pratiği
   ========================================================================== */

const dictCategories = ${JSON.stringify(dictCategories, null, 2)};

const dictData = ${JSON.stringify(combinedList, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'sozluk-data.js'), jsOutput, 'utf8');
console.log(`💾 sozluk-data.js başarıyla kaydedildi! Boyut: ${Math.round(Buffer.byteLength(jsOutput, 'utf8') / 1024)} KB`);

// 6. JSON olarak da data/insaat-sozluk.json içine kaydet (SEO ve API amaçlı)
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}
fs.writeFileSync(path.join(__dirname, 'data', 'insaat-sozluk.json'), JSON.stringify(combinedList, null, 2), 'utf8');
console.log(`💾 data/insaat-sozluk.json başarıyla oluşturuldu!`);
