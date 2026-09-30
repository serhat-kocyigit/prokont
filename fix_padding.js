const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

const target = '.p-gallery img { width: 85vw; height: 240px; }';
const replacement = `.p-gallery { margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-right: 10px; }
      .p-gallery img { width: 85vw; height: 240px; }
      .p-gallery::after { content: ''; flex: 0 0 1px; }`;

html = html.replace(target, replacement);
fs.writeFileSync('projeler.html', html, 'utf8');
