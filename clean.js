const fs = require('fs');
let s = fs.readFileSync('index.html', 'utf8');
s = s.replace(/\uFFFD/g, '');
s = s.replace(/MŞHENDİSLİK/g, 'MÜHENDİSLİK');
fs.writeFileSync('index.html', s, 'utf8');
fs.writeFileSync('dist/index.html', s, 'utf8');
console.log("Cleaned.");
