const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const scriptToInject = `<script>
  (function(){
    const menuBtn = document.getElementById('menu');
    const mobileNav = document.getElementById('mobileNav');
    if(menuBtn && mobileNav) {
      menuBtn.onclick = () => mobileNav.classList.toggle('open');
      mobileNav.querySelectorAll('a').forEach(a => a.onclick = () => mobileNav.classList.remove('open'));
    }
  })();
</script>
</body>`;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('menuBtn.onclick')) {
    content = content.replace('</body>', scriptToInject);
    content = content.replace('<script src="app.js"></script>', '<script src="app.js?v=4"></script>');
    fs.writeFileSync(file, content, 'utf8');
  }
});

let file = fs.readFileSync('karsilastir.html', 'utf8');
if (!file.includes('id="mobileNav"')) {
  const mobileNav = `<div id="mobileNav"><a href="index.html">Ana Sayfa</a><a href="hesaplama-araclari.html">Hesaplama Merkezi</a><a href="poz-listesi.html">Poz Listesi</a><a href="planlayici.html">Planlayıcı</a><a href="karsilastir.html">Karşılaştır</a><a href="projeler.html">Projelerimiz</a><a href="index.html#offer">Teklif Al</a></div></header>`;
  file = file.replace('</header>', mobileNav);
  fs.writeFileSync('karsilastir.html', file, 'utf8');
}
