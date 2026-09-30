const fs = require('fs');
let s = fs.readFileSync('index.html', 'utf8');

const plannerCTA = `
<section class="section" id="planner">
  <div class="shell">
    <div style="text-align:center; padding: 60px 0;">
      <p class="eyebrow">— TADİLAT PLANLAYICI</p>
      <h2 style="font-size: 32px; margin-bottom: 20px;">Tadilatını detaylıca planla, bütçeni kontrol et.</h2>
      <p style="margin-bottom: 30px; color: #71817c;">Tek bir malzeme hesabından fazlası. Yapı türünü, alanını ve yapmak istediğiniz işleri seçin; projenizin tahmini bütçesi kalem kalem oluşsun.</p>
      <a href="planlayici.html" class="btn navy" style="padding: 15px 30px; font-size: 16px;">Planlamayı Başlat →</a>
    </div>
  </div>
</section>
`;

s = s.replace(/<section class="section" id="planner">.*?<\/section>/s, plannerCTA);

s = s.replace(/>Tüm projeler →<\/a>/g, ' href="projeler.html">Tüm projeler →</a>');

// For #compare, add a button at the bottom
if (s.includes('id="compare"') && !s.includes('Daha Fazla Malzemeyi Karşılaştır')) {
  // Let's find the closing section of #compare
  const compareMatch = s.match(/<section class="tint section" id="compare">.*?<\/section>/s);
  if (compareMatch) {
    let compHtml = compareMatch[0];
    compHtml = compHtml.replace(/<\/div>\s*<\/section>$/, '\n<div style="text-align:center; margin-top:40px;"><a href="karsilastir.html" class="btn navy" style="padding:15px 30px;">Daha Fazla Seçenek İle Karşılaştır →</a></div>\n</div></section>');
    s = s.replace(compareMatch[0], compHtml);
  }
}

fs.writeFileSync('index.html', s, 'utf8');
fs.writeFileSync('dist/index.html', s, 'utf8');
console.log("Index updated.");
