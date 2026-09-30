const fs = require('fs');
const glob = require('fs').readdirSync('.');
const htmlFiles = glob.filter(f => f.endsWith('.html'));

const baseNav = `
<nav>
  <a href="index.html" data-page="index">Ana Sayfa</a>
  <a href="hesaplama-araclari.html" data-page="hesaplama-araclari">Hesaplama Merkezi</a>
  <a href="poz-listesi.html" data-page="poz-listesi">Poz Listesi</a>
  <a href="planlayici.html" data-page="planlayici">Planlayıcı</a>
  <a href="karsilastir.html" data-page="karsilastir">Karşılaştır</a>
  <a href="projeler.html" data-page="projeler">Projelerimiz</a>
</nav>
`.replace(/\n/g, '').replace(/\s{2,}/g, ''); // minify

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace everything between <nav> and </nav>
  content = content.replace(/<nav>.*?<\/nav>/s, baseNav);
  
  // Now add class="active" to the correct link based on filename
  const page = file.replace('.html', '');
  if (page === 'index') {
    content = content.replace('data-page="index"', 'class="active"');
  } else {
    content = content.replace(`data-page="${page}"`, 'class="active"');
  }
  
  // Remove the remaining data-page attributes
  content = content.replace(/ data-page="[^"]+"/g, '');
  
  fs.writeFileSync(file, content, 'utf8');
  if (fs.existsSync('dist/' + file)) {
    fs.writeFileSync('dist/' + file, content, 'utf8');
  }
});
console.log("Navs updated!");
