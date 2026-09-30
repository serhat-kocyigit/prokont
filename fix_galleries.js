const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

// 1. Remove 3rd image from Lavaş Center
html = html.replace('<img src="assets/referanslar/128941867_151dMB5mwEFu8AHG86SNGxNLVMrKJeuLQMTB7h2osX0.jpg" alt="Lavaş Proje 3">\n      ', '');
html = html.replace('<img src="assets/referanslar/128941867_151dMB5mwEFu8AHG86SNGxNLVMrKJeuLQMTB7h2osX0.jpg" alt="Lavaş Proje 3">', '');

// 2. Add it to Belediyeler
const belediyeTarget = '<img src="assets/referanslar/erciyes_univ.jpg" alt="Belediye Proje 7">';
if (!html.includes('alt="Belediye Proje 8"')) {
  html = html.replace(belediyeTarget, belediyeTarget + '\n      <img src="assets/referanslar/128941867_151dMB5mwEFu8AHG86SNGxNLVMrKJeuLQMTB7h2osX0.jpg" alt="Belediye Proje 8">');
}

// 3. Remove 2nd image from Meka Boya
html = html.replace('<img src="assets/referanslar/IMG-20210402-WA0014-1024x768.jpg" alt="Meka Proje 2">\n    ', '');
html = html.replace('<img src="assets/referanslar/IMG-20210402-WA0014-1024x768.jpg" alt="Meka Proje 2">', '');

fs.writeFileSync('projeler.html', html, 'utf8');
