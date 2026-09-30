const fs = require('fs');
const files = ['hesaplama-araclari.html', 'poz-listesi.html', 'planlayici.html'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let s = fs.readFileSync(f, 'utf8');
    // Just in case it has the old link
    s = s.replace('<a href="planlayici.html">Tadilat Planlayıcı</a>', '<a href="planlayici.html">Hızlı Planlayıcı</a><a class="poz-nav active" href="detayli-planlayici.html">Detaylı Planlayıcı <span>Pro</span></a>');
    
    // Also clean up any corrupted characters just in case
    s = s.replace(/\uFFFD/g, '');
    fs.writeFileSync(f, s, 'utf8');
    if (fs.existsSync('dist/' + f)) fs.writeFileSync('dist/' + f, s, 'utf8');
  }
});
