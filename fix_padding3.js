const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

const target = `.p-gallery { margin-left: -18px; margin-right: -18px; padding-left: 18px; padding-right: 18px; }
      .p-gallery img { width: 85vw; height: 240px; }
      .p-gallery::after { content: ''; flex: 0 0 1px; }`;

const replacement = `.p-gallery { margin-left: -18px; margin-right: -18px; scroll-padding: 0 24px; }
      .p-gallery img { width: 85vw; height: 240px; }
      .p-gallery::before, .p-gallery::after { content: ''; flex: 0 0 24px; }`;

html = html.replace(target, replacement);
fs.writeFileSync('projeler.html', html, 'utf8');
