const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

// Swap logos
html = html.replace('assets/referanslar/Adsiz-tasarim-6.png" alt="Donas Logo"', 'assets/referanslar/Adsiz-tasarim-TEMP.png" alt="Donas Logo"');
html = html.replace('assets/referanslar/Adsiz-tasarim-8-1.png" alt="Meka Logo"', 'assets/referanslar/Adsiz-tasarim-6.png" alt="Meka Logo"');
html = html.replace('assets/referanslar/Adsiz-tasarim-TEMP.png" alt="Donas Logo"', 'assets/referanslar/Adsiz-tasarim-8-1.png" alt="Donas Logo"');

// Update CSS for mobile view
html = html.replace('.p-logo, .p-logo.large { width: auto; height: 60px; max-width: 180px; margin-top: 10px; object-position: left; }',
  '.p-logo { width: auto; height: 60px; max-width: 180px; margin-top: 10px; object-position: left; }\n      .p-logo.large { width: auto; height: 120px; max-width: 320px; margin-top: 16px; object-position: left; }');

fs.writeFileSync('projeler.html', html, 'utf8');
