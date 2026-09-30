const fs = require('fs');
let s = fs.readFileSync('index.html', 'utf8');

// The file was read as ansi and saved as utf8, effectively turning utf8 bytes into utf8 string.
// A more robust way to fix it is to convert it back to buffer using latin1, then decode as utf8.
const buf = Buffer.from(s, 'latin1');
try {
  const decoded = buf.toString('utf8');
  if (decoded.includes('Tadilat')) {
    s = decoded;
  }
} catch(e) {}

// Or just string replace:
s = s.replace(/Ã§/g, 'ç').replace(/Ã¼/g, 'ü').replace(/Ã¶/g, 'ö')
     .replace(/Ä±/g, 'ı').replace(/ÅŸ/g, 'ş').replace(/ÄŸ/g, 'ğ')
     .replace(/Ã‡/g, 'Ç').replace(/Ãœ/g, 'Ü').replace(/Ã–/g, 'Ö')
     .replace(/Ä°/g, 'İ').replace(/Åž/g, 'Ş').replace(/Äž/g, 'Ğ');

// Clean up BOM if present
if (s.charCodeAt(0) === 0xFEFF) {
  s = s.substring(1);
}

s = s.replace('<a href="planlayici.html">Tadilat Planlayıcı</a>', '<a href="planlayici.html">Hızlı Planlayıcı</a><a class="poz-nav" href="detayli-planlayici.html">Detaylı Planlayıcı <span>Pro</span></a>');

fs.writeFileSync('index.html', s, 'utf8');
fs.writeFileSync('dist/index.html', s, 'utf8');
console.log("Fixed!");
