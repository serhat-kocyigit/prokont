const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

// The ambiguous images are:
// IMG-20220125-WA0007-1024x1021.jpg (was in Meka Boya)
// 141130294_tCT6cwPJOrWMhT50V3mzJXDU_19YjqoJadrPsr-6iNE.jpg (was in Donas AND Meka Boya)

html = html.replace('<img src="assets/referanslar/141130294_tCT6cwPJOrWMhT50V3mzJXDU_19YjqoJadrPsr-6iNE.jpg" alt="Donas Proje 4">', '<img src="assets/referanslar/IMG-20220125-WA0007-1024x1021.jpg" alt="Donas Proje 4">');

html = html.replace('<img src="assets/referanslar/IMG-20220125-WA0007-1024x1021.jpg" alt="Meka Proje 1">\n      <img src="assets/referanslar/141130294_tCT6cwPJOrWMhT50V3mzJXDU_19YjqoJadrPsr-6iNE.jpg" alt="Meka Proje 2">', '<img src="assets/referanslar/141130294_tCT6cwPJOrWMhT50V3mzJXDU_19YjqoJadrPsr-6iNE.jpg" alt="Meka Proje 1">\n      <img src="assets/referanslar/IMG-20210402-WA0014-1024x768.jpg" alt="Meka Proje 2">');

fs.writeFileSync('projeler.html', html, 'utf8');
