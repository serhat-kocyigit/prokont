const fs = require('fs');
let html = fs.readFileSync('projeler.html', 'utf8');

const target = `.p-gallery { margin-left: -18px; margin-right: -18px; padding-left: 10px; padding-right: 10px; }`;
const replacement = `.p-gallery { margin-left: -18px; margin-right: -18px; padding-left: 18px; padding-right: 18px; }`;

html = html.replace(target, replacement);
fs.writeFileSync('projeler.html', html, 'utf8');
