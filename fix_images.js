const fs = require('fs');

const realImages = [
  '128941867_151dMB5mwEFu8AHG86SNGxNLVMrKJeuLQMTB7h2osX0.jpg',
  '141130294_tCT6cwPJOrWMhT50V3mzJXDU_19YjqoJadrPsr-6iNE.jpg',
  '2K1j.jpg',
  '51004000_84YQ0g7QPwtR08b-aww1GHfdL_FFCOPkjJL18T4Ltd8.jpg',
  'e4cbd96c85d64c1a477a44b1141808d0.jpg',
  'erciyes-hukuk-5-Custom.jpg',
  'erciyes_univ.jpg',
  'IMG-20210402-WA0014-1024x768.jpg',
  'IMG-20220125-WA0007-1024x1021.jpg',
  'IMG-20221223-WA0017-1024x768.jpg',
  'IMG_20220323_094101-1024x768.jpg',
  'IMG_20220323_094315-1024x768.jpg',
  'IMG_20220323_094438-1024x768.jpg',
  'IMG_20220323_095027-1024x768.jpg',
  'IMG_20220527_155452-1024x768.jpg',
  'IMG_20220608_195129-1024x768.jpg',
  'IMG_20220609_192030-1024x768.jpg',
  'IMG_20221127_133309-1024x768.jpg',
  'IMG_20230111_075557-1024x764.jpg',
  'IMG_20230415_144347-1024x768.jpg',
  'IMG_20240930_133539-1024x771.jpg',
  'IMG_20240930_133541-1024x771.jpg',
  'IMG_20240930_140325-1024x771.jpg'
];

let html = fs.readFileSync('projeler.html', 'utf8');

html = html.replace('assets/referanslar/lavas-center-logo.png', 'assets/referanslar/Adsiz-tasarim-8-1.png');
html = html.replace('assets/referanslar/sato-logo.png', 'assets/referanslar/Adsiz-tasarim-9.png');
html = html.replace('assets/referanslar/donas-logo.png', 'assets/referanslar/Adsiz-tasarim-7-e1732093901753.png');
html = html.replace('assets/referanslar/meka-logo.png', 'assets/referanslar/Adsiz-tasarim-6.png');

html = html.replace(/<img src="assets\/referanslar\/royal1.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');
html = html.replace(/<img src="assets\/referanslar\/royal2.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');
html = html.replace(/<img src="assets\/referanslar\/royal3.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');

html = html.replace(/<img src="assets\/referanslar\/milky1.jpeg".*?>/g, '<img src="assets/referanslar/milkyroyalpeyniraltisuyutozuuretimi.webp">');
html = html.replace(/<img src="assets\/referanslar\/milky2.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');

html = html.replace(/<img src="assets\/referanslar\/lavas1.jpeg".*?>/g, '<img src="assets/referanslar/438231-0-lavas-center-1024x576.jpg">');
html = html.replace(/<img src="assets\/referanslar\/lavas2.jpeg".*?>/g, '<img src="assets/referanslar/r6ab-Lavas-Center-exterior.jpg">');
html = html.replace(/<img src="assets\/referanslar\/lavas3.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');
html = html.replace(/<img src="assets\/referanslar\/lavas4.jpeg".*?>/g, '');

html = html.replace(/<img src="assets\/referanslar\/sato1.jpeg".*?>/g, '<img src="assets/referanslar/SATO-YEMEK-1024x945.jpg">');
html = html.replace(/<img src="assets\/referanslar\/sato2.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');
html = html.replace(/<img src="assets\/referanslar\/sato3.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');

html = html.replace(/<img src="assets\/referanslar\/donas1.jpeg".*?>/g, '<img src="assets/referanslar/donas-istasyon-subesi-1024x576.jpg">');
html = html.replace(/<img src="assets\/referanslar\/donas2.jpeg".*?>/g, '<img src="assets/referanslar/r467-Donas-Duvenonu-design-1024x576.jpg">');

html = html.replace(/<img src="assets\/referanslar\/meka1.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');
html = html.replace(/<img src="assets\/referanslar\/meka2.jpeg".*?>/g, '<img src="assets/referanslar/' + realImages.shift() + '">');

fs.writeFileSync('projeler.html', html, 'utf8');
console.log('Done');
