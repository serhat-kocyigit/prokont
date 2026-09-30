const fs = require('fs');
let s = fs.readFileSync('index.html', 'utf8');

s = s.replace(/MSHENDİSLİK/g, 'MÜHENDİSLİK');
s = s.replace(/Karxılaxtır/g, 'Karşılaştır');
s = s.replace(/R"/g, '⌕');
s = s.replace(/\x1D/g, '—');
s = s.replace(/inxaat/g, 'inşaat');
s = s.replace(/Baxla/g, 'Başla');
s = s.replace(/ \x19/g, '→');
s = s.replace(/ \x14/g, '→');
s = s.replace(/ \x1C/g, '→');
s = s.replace(/ܰ/g, '☰');
s = s.replace(/Kexif Destexi/g, 'Keşif Desteği');
s = s.replace(/\x13rn./g, 'Örn.');
s = s.replace(/!atı/g, 'Çatı');
s = s.replace(/İxinize/g, 'İşinize');
s = s.replace(/\x13lçü/g, 'Ölçü');
s = s.replace(/yaklaxık/g, 'yaklaşık');
s = s.replace(/R\x1A/g, '◧');
s = s.replace(/\x13/g, '▤');
s = s.replace(/\x1A/g, '◧');

// Some others might be 


if (!s.includes('detayli-planlayici.html')) {
  s = s.replace('<a href="planlayici.html">Hızlı Planlayıcı</a>', '<a href="planlayici.html">Hızlı Planlayıcı</a><a class="poz-nav" href="detayli-planlayici.html">Detaylı Planlayıcı <span>Pro</span></a>');
}

fs.writeFileSync('index.html', s, 'utf8');
fs.writeFileSync('dist/index.html', s, 'utf8');
console.log("Fixed texts.");
