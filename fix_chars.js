const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// All corrupted Turkish words: x was used in place of ş and ğ
const fixes = [
  // ş -> x corruptions
  ['Baxla', 'Başla'],
  ['baxla', 'başla'],
  ['Karxılaxtırmayı', 'Karşılaştırmayı'],
  ['karxılaxtır', 'karşılaştır'],
  ['Karxılaxtır', 'Karşılaştır'],
  ['Kexif', 'Keşif'],
  ['kexif', 'keşif'],
  ['Destexi', 'Desteği'],
  ['destexi', 'desteği'],
  ['yaklaxık', 'yaklaşık'],
  ['Yaklaxık', 'Yaklaşık'],
  ['xilte', 'şilte'],
  ['Xilte', 'Şilte'],
  ['konuxalım', 'konuşalım'],
  ['İxinize', 'İşinize'],
  ['ixinize', 'işinize'],
  ['seçtixin', 'seçtiğin'],
  ['laxtır', 'laştır'],
  ['laxtı', 'laştı'],
  ['ixle', 'işle'],
  ['ixi ', 'işi '],
  ['ıxtır', 'ıştır'],
  ['axağı', 'aşağı'],
  ['Axağı', 'Aşağı'],
  ['dönüxtür', 'dönüştür'],
  ['Dönüxtür', 'Dönüştür'],
  ['fotoxraf', 'fotoğraf'],
  ['Fotoxraf', 'Fotoğraf'],
  ['koxul', 'koşul'],
  ['Koxul', 'Koşul'],
  ['görüx', 'görüş'],
  ['Görüx', 'Görüş'],
  ['dexer', 'değer'],
  ['Dexer', 'Değer'],
  ['dexil', 'değil'],
  ['Dexil', 'Değil'],
  ['doxru', 'doğru'],
  ['Doxru', 'Doğru'],
  ['Dixer', 'Diğer'],
  ['dixer', 'diğer'],
  ['Tuxla', 'Tuğla'],
  ['tuxla', 'tuğla'],
  ['tax ', 'taş '],
  ['Tax ', 'Taş '],
  ['taxı', 'taşı'],
  ['xinize', 'şinize'],
  ['tixin', 'tiğin'],
];

let count = 0;
for (const [bad, good] of fixes) {
  while (html.includes(bad)) {
    html = html.replace(bad, good);
    count++;
  }
}

// Check all other HTML files too
const otherFiles = ['hesaplama-araclari.html', 'poz-listesi.html', 'planlayici.html', 'karsilastir.html', 'paket-hesaplar.html'];
for (const file of otherFiles) {
  try {
    let fhtml = fs.readFileSync(file, 'utf8');
    let fcount = 0;
    for (const [bad, good] of fixes) {
      while (fhtml.includes(bad)) {
        fhtml = fhtml.replace(bad, good);
        fcount++;
      }
    }
    if (fcount > 0) {
      fs.writeFileSync(file, fhtml, 'utf8');
      console.log(file + ': fixed ' + fcount + ' corruptions');
    }
  } catch(e) {}
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html: fixed ' + count + ' corruptions');

// Verify
html = fs.readFileSync('index.html', 'utf8');
const remaining = html.match(/[a-zığüöçşA-ZİĞÜÖÇŞ]x[a-zığüöçşA-ZİĞÜÖÇŞ]/g);
if(remaining) {
  const unique = [...new Set(remaining)];
  console.log('Remaining suspicious patterns:', unique.join(', '));
} else {
  console.log('No more suspicious x patterns found!');
}
