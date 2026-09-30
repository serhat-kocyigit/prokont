const fs = require('fs');
let s = fs.readFileSync('karsilastir.html', 'utf8');

const newDb = `const db = {
  alci_siva: [
    { name: 'Makine Sıva Alçısı', desc: 'İç mekan kaba alçı uygulaması.', price: 145, unit: 'Torba (35kg)', features: ['Hızlı kuruma', 'Kolay mastar'], perf: 'Orta', badge: 'mid' },
    { name: 'Saten Perdah Alçısı', desc: 'Boya öncesi pürüzsüz yüzey.', price: 165, unit: 'Torba (25kg)', features: ['Cam gibi yüzey', 'Boyaya hazır'], perf: 'Yüksek', badge: 'high' },
    { name: 'Çimento Esaslı Sıva', desc: 'Islak hacim ve dış cephe kaba sıva.', price: 190, unit: 'Torba (25kg)', features: ['Neme dayanım', 'Yüksek mukavemet'], perf: 'Yüksek', badge: 'high' },
    { name: 'Alçıpan Levha (Beyaz)', desc: 'Standart bölme duvar levhası.', price: 185, unit: 'Adet (2.5m²)', features: ['Hızlı uygulama', 'Ekonomik'], perf: 'Orta', badge: 'mid' },
    { name: 'Alçıpan Levha (Yeşil)', desc: 'Neme dayanıklı ıslak hacim levhası.', price: 260, unit: 'Adet (2.5m²)', features: ['Su itici', 'Küf tutmaz'], perf: 'Yüksek', badge: 'high' }
  ],
  insulation: [
    { name: 'Beyaz EPS (16 Dansite)', desc: 'Ekonomik geleneksel ısı yalıtım levhası.', price: 280, unit: 'm²', features: ['Standart yalıtım', 'Çok ekonomik'], perf: 'Orta', badge: 'mid' },
    { name: 'Karbonlu EPS', desc: 'Isı iletkenliği düşük yalıtım.', price: 420, unit: 'm²', features: ['%20 Daha fazla yalıtım', 'İnce uygulama'], perf: 'Yüksek', badge: 'high' },
    { name: 'Taş Yünü', desc: 'A1 Sınıfı yanmaz doğal yalıtım.', price: 950, unit: 'm²', features: ['Tam yanmaz', 'Ses yalıtımı'], perf: 'Yüksek', badge: 'high' },
    { name: 'XPS Levha', desc: 'Sert, yüksek basınca dayanıklı.', price: 650, unit: 'm²', features: ['Su emmez', 'Zemin/Tavan altı'], perf: 'Yüksek', badge: 'high' }
  ],
  flooring: [
    { name: 'Laminat Parke (31. Sınıf)', desc: 'Ekonomik konut tipi laminat.', price: 280, unit: 'm²', features: ['Hızlı montaj', 'Uygun fiyat'], perf: 'Orta', badge: 'mid' },
    { name: 'Laminat Parke (33. Sınıf)', desc: 'Yoğun trafik AC5 derzli parke.', price: 480, unit: 'm²', features: ['Çizilmez', 'Suya ekstra direnç'], perf: 'Yüksek', badge: 'high' },
    { name: 'Lamine Parke', desc: 'Doğal ahşap prestijli zemin.', price: 2200, unit: 'm²', features: ['Gerçek ahşap', 'Zımparalanabilir'], perf: 'Yüksek', badge: 'high' },
    { name: 'LVT / SPC Vinil', desc: 'Taş kompozit suya dayanıklı zemin.', price: 850, unit: 'm²', features: ['%100 Suya dayanım', 'Yerden ısıtmaya uygun'], perf: 'Yüksek', badge: 'high' },
    { name: 'Epoksi Zemin', desc: 'Eksiz sanayi / dekoratif zemin.', price: 1400, unit: 'm²', features: ['Kimyasal direnci', 'Eksiz bütünlük'], perf: 'Yüksek', badge: 'high' }
  ],
  seramik: [
    { name: 'Standart Fayans', desc: '30x60 veya 45x45 iç mekan.', price: 350, unit: 'm²', features: ['Geniş desen seçeneği', 'Duvar için ideal'], perf: 'Orta', badge: 'mid' },
    { name: 'Granit Seramik', desc: '60x60 sırlı granit.', price: 650, unit: 'm²', features: ['Aşınma direnci', 'Dış mekan uyumu'], perf: 'Yüksek', badge: 'high' },
    { name: 'Porselen Seramik', desc: '60x120 büyük ebat rektifiyeli.', price: 1200, unit: 'm²', features: ['Dar derz aralığı', 'Lüks görünüm'], perf: 'Yüksek', badge: 'high' },
    { name: 'Cam Mozaik', desc: 'Banyo ve havuz içi fileli mozaik.', price: 1800, unit: 'm²', features: ['Kıvrımlı yüzey', 'Dekoratif'], perf: 'Yüksek', badge: 'high' }
  ],
  paint: [
    { name: 'Plastik Boya', desc: 'Mat, ekonomik tavan/duvar boyası.', price: 950, unit: 'Kova (15L)', features: ['Mat görünüm', 'Ucuz'], perf: 'Orta', badge: 'mid' },
    { name: 'Silikonlu İç Cephe', desc: 'Tam silinebilir ipek mat (Marshall/Filli vb).', price: 3950, unit: 'Kova (15L)', features: ['Leke tutmaz', 'Kolay silinir'], perf: 'Yüksek', badge: 'high' },
    { name: 'Akrilik Dış Cephe', desc: 'Su bazlı standart dış cephe.', price: 3200, unit: 'Kova (15L)', features: ['UV direnci', 'Renk solmazlığı'], perf: 'Orta', badge: 'mid' },
    { name: 'Elastik Dış Cephe', desc: 'Çatlak köprüleyici saf akrilik.', price: 5800, unit: 'Kova (15L)', features: ['Su geçirmez', 'Esnek yapı'], perf: 'Yüksek', badge: 'high' }
  ],
  roof: [
    { name: 'Toprak Kiremit', desc: 'Klasik geçmeli kiremit.', price: 550, unit: 'm²', features: ['Nefes alır', 'Geleneksel'], perf: 'Orta', badge: 'mid' },
    { name: 'Sandviç Panel', desc: '40mm poliüretan dolgulu.', price: 1100, unit: 'm²', features: ['Hızlı kaplama', 'Isı yalıtımlı'], perf: 'Yüksek', badge: 'high' },
    { name: 'Shingle', desc: 'Membran üzeri esnek kaplama.', price: 420, unit: 'm²', features: ['Hafif', 'Karmaşık çatılar'], perf: 'Orta', badge: 'mid' },
    { name: 'Trapez Sac', desc: 'Boyalı galvaniz sac levha.', price: 380, unit: 'm²', features: ['Çok ekonomik', 'Endüstriyel'], perf: 'Orta', badge: 'mid' }
  ],
  kitchen: [
    { name: 'Laminat Tezgah', desc: 'Sunta üzeri HPL kaplama.', price: 1800, unit: 'mtül', features: ['Ahşap görünüm', 'Ekonomik'], perf: 'Orta', badge: 'mid' },
    { name: 'Doğal Granit', desc: 'Sert yüzeyli doğal taş.', price: 5500, unit: 'mtül', features: ['Isıya dayanıklı', 'Doğal damarlar'], perf: 'Yüksek', badge: 'high' },
    { name: 'Kuvars (Çimstone)', desc: '%93 Kuvars reçine kompozit.', price: 8500, unit: 'mtül', features: ['Çizilmez', 'Asit ve limona dirençli'], perf: 'Yüksek', badge: 'high' },
    { name: 'Akrilik (Corian vb.)', desc: 'Eksiz birleşen katı yüzey.', price: 13500, unit: 'mtül', features: ['Eksiz lavabo', 'Tamir edilebilir'], perf: 'Yüksek', badge: 'high' },
    { name: 'Porselen (Dekton vb.)', desc: 'Ultra sıkıştırılmış yeni nesil.', price: 21000, unit: 'mtül', features: ['Ateşe tam dayanım', 'UV solmazlığı'], perf: 'Yüksek', badge: 'high' }
  ],
  doors: [
    { name: 'Amerikan Panel Kapı', desc: 'MDF pres standart iç kapı.', price: 2800, unit: 'Adet', features: ['Ekonomik', 'Hafif'], perf: 'Orta', badge: 'mid' },
    { name: 'Melamin Kapı', desc: 'Ahşap desenli çizilmez yüzey.', price: 4500, unit: 'Adet', features: ['Çizilme direnci', 'Boyasız'], perf: 'Yüksek', badge: 'high' },
    { name: 'Lake Kapı', desc: 'Poliüretan boyalı pürüzsüz yüzey.', price: 11500, unit: 'Adet', features: ['Lüks görünüm', 'İstenen renk'], perf: 'Yüksek', badge: 'high' },
    { name: 'Çelik Kapı (Standart)', desc: '1.2mm sac, ahşap kaplama dış kapı.', price: 12500, unit: 'Adet', features: ['Temel güvenlik', 'Apartman içi'], perf: 'Orta', badge: 'mid' },
    { name: 'Çelik Kapı (Villa Tipi)', desc: 'Kompakt laminant, çift kilit.', price: 32000, unit: 'Adet', features: ['Dış iklim dayanımı', 'Yüksek güvenlik'], perf: 'Yüksek', badge: 'high' }
  ],
  windows: [
    { name: 'PVC Doğrama (70mm)', desc: '5 odacıklı standart PVC.', price: 2500, unit: 'm²', features: ['Isı yalıtımı', 'Uygun fiyat'], perf: 'Orta', badge: 'mid' },
    { name: 'PVC Doğrama (80mm)', desc: 'Üst düzey ısı ve ses yalıtımı.', price: 4200, unit: 'm²', features: ['3 Conta', 'Maksimum yalıtım'], perf: 'Yüksek', badge: 'high' },
    { name: 'Alüminyum (Yalıtımsız)', desc: 'Standart vitrin ve iç bölme.', price: 4800, unit: 'm²', features: ['İnce profil', 'Uzun ömür'], perf: 'Orta', badge: 'mid' },
    { name: 'Alüminyum (Isı Yalıtımlı)', desc: 'Isı bariyerli cephe doğraması.', price: 9500, unit: 'm²', features: ['Rijit yapı', 'Terleme yapmaz'], perf: 'Yüksek', badge: 'high' }
  ],
  waterproofing: [
    { name: 'Bitümlü Membran', desc: 'Şalümo ile uygulanan rulo.', price: 220, unit: 'm²', features: ['Temel ve çatı', 'Geleneksel'], perf: 'Orta', badge: 'mid' },
    { name: 'Çift Komponentli Çimento', desc: 'Sürme esaslı banyo/havuz yalıtımı.', price: 850, unit: 'Takım (30kg)', features: ['Seramik altına uygun', 'Esnek'], perf: 'Yüksek', badge: 'high' },
    { name: 'Poliüretan Likit', desc: 'Güneş dayanımlı eksiz teras yalıtımı.', price: 2400, unit: 'Kova (20kg)', features: ['UV Dayanımlı', 'Üzerinde yürünebilir'], perf: 'Yüksek', badge: 'high' }
  ],
  plumbing: [
    { name: 'PPRC Plastik Boru', desc: 'Temiz su tesisat borusu.', price: 65, unit: 'mtül', features: ['Kaynaklı birleşim', 'Standart'], perf: 'Orta', badge: 'mid' },
    { name: 'PEX Mobil Sistem', desc: 'Kılıflı kırmadan değişen sistem.', price: 160, unit: 'mtül', features: ['Eksiz hat', 'Değiştirilebilir'], perf: 'Yüksek', badge: 'high' },
    { name: 'PVC Pis Su Borusu', desc: 'Gri atık su borusu.', price: 110, unit: 'mtül', features: ['Contalı sistem', 'Kolay montaj'], perf: 'Orta', badge: 'mid' },
    { name: 'Sessiz Pis Su Borusu', desc: 'Kalın cidarlı akustik boru.', price: 280, unit: 'mtül', features: ['Ses yalıtımı', 'Darbelere dayanıklı'], perf: 'Yüksek', badge: 'high' }
  ],
  electric: [
    { name: 'Standart Beyaz Priz', desc: 'Klasik plastik gövde.', price: 140, unit: 'Adet', features: ['Ekonomik', 'Kolay bulunabilirlik'], perf: 'Orta', badge: 'mid' },
    { name: 'Metalik / Renkli Seriler', desc: 'Antrasit, inox renk seçenekli.', price: 350, unit: 'Adet', features: ['Dekoratif', 'Leke göstermez'], perf: 'Yüksek', badge: 'high' },
    { name: 'Cam Çerçeveli', desc: 'Cam görünümlü lüks mekanizma.', price: 650, unit: 'Adet', features: ['Çizilmez çerçeve', 'Prestijli görünüm'], perf: 'Yüksek', badge: 'high' },
    { name: 'Akıllı Ev Anahtarı', desc: 'Wi-fi / Dokunmatik akıllı priz.', price: 1850, unit: 'Adet', features: ['Uygulama kontrolü', 'Senaryo özelliği'], perf: 'Yüksek', badge: 'high' }
  ]
};`;

s = s.replace(/const db = \{[\s\S]*?\n\};\n/, newDb + '\n');
fs.writeFileSync('karsilastir.html', s, 'utf8');
fs.writeFileSync('dist/karsilastir.html', s, 'utf8');
console.log('Fixed real prices');
