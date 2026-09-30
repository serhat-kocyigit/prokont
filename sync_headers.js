const fs = require('fs');
const glob = require('fs').readdirSync('.');
const htmlFiles = glob.filter(f => f.endsWith('.html'));

const baseHeader = `
<header id="top">
  <div class="shell nav">
    <a class="brand" href="index.html">
      <img src="prokont-logo.png" alt="PROKONT">
      <span>PROKONT<small>MÜHENDİSLİK & İNŞAAT</small></span>
    </a>
    <nav>
      <a href="index.html" data-page="index">Ana Sayfa</a>
      <a href="hesaplama-araclari.html" data-page="hesaplama-araclari">Hesaplama Merkezi</a>
      <a href="poz-listesi.html" data-page="poz-listesi">Poz Listesi</a>
      <a href="planlayici.html" data-page="planlayici">Planlayıcı</a>
      <a href="karsilastir.html" data-page="karsilastir">Karşılaştır</a>
      <a href="projeler.html" data-page="projeler">Projelerimiz</a>
    </nav>
    <div class="actions">
      <button id="searchToggle" aria-label="Arama">⌕</button>
      <a class="btn orange" href="index.html#offer">Teklif Al →</a>
      <button id="menu" aria-label="Menü">☰</button>
    </div>
  </div>
  <div id="mobileNav">
    <a href="index.html">Ana Sayfa</a>
    <a href="hesaplama-araclari.html">Hesaplama Merkezi</a>
    <a href="poz-listesi.html">Poz Listesi</a>
    <a href="planlayici.html">Planlayıcı</a>
    <a href="karsilastir.html">Karşılaştır</a>
    <a href="projeler.html">Projelerimiz</a>
    <a href="index.html#offer">Teklif Al</a>
  </div>
</header>
`.trim();

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Clean up any remaining U+FFFD just in case
  content = content.replace(/\uFFFD/g, '');
  content = content.replace(/MŞHENDİSLİK/g, 'MÜHENDİSLİK');
  
  // Replace everything between <header> and </header>
  // Sometimes it's <header id="top"> or just <header>
  content = content.replace(/<header\b[^>]*>.*?<\/header>/s, baseHeader);
  
  // Set active class
  const page = file.replace('.html', '');
  if (page === 'index') {
    content = content.replace('data-page="index"', 'class="active"');
  } else {
    content = content.replace(`data-page="${page}"`, 'class="active"');
  }
  content = content.replace(/ data-page="[^"]+"/g, '');
  
  fs.writeFileSync(file, content, 'utf8');
  if (fs.existsSync('dist/' + file)) {
    fs.writeFileSync('dist/' + file, content, 'utf8');
  }
});
console.log("Headers updated!");
