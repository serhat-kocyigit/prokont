const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('<div id="mobileNav">');
const end = html.indexOf('</div>', start) + 6;
console.log(html.substring(start, end));
