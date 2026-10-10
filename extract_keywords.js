const fs = require('fs');
const d = JSON.parse(fs.readFileSync('poz-2026.json', 'utf8'));

const core = ['çimento','alçı','boya','seramik','fayans','kablo','priz','boru','tuğla','beton','şap','parke','laminat','mantolama','çatı','yalıtım','demir','mermer','ahşap','cam','profil','sac','vana','kiremit','harç','sıva','kum','çakıl','panel','klima','radyatör','kombi','pompa','motor','kapı','pencere','kilit','menteşe','vana'];

const stops = new Set(['ile','ve','veya','için','esaslı','katkılı','yapıştırıcı','yapıştırıcısı','işleri','işçiliği','işçilik','rayici','göre','olarak','düz','kalınlık','tipi','olan','olmayan','dahil','hariç','sıcak','soğuk','yeni','eski','sökülmesi','söküm','yapılması','edilmesi','mm','cm','m2','m3','kg','adet','mt','çaplı','kalınlığında','birinci','ikinci','üçüncü','çeşitli','her','türlü','diğer','benzeri','çapında','kadar','üzeri','altı']);

d.pozlar.forEach(p => {
  let ad = p.ad.toLocaleLowerCase('tr');
  let ak = '';

  for (let k of core) {
    if (ad.includes(k)) {
      ak = k;
      break;
    }
  }

  if (!ak) {
    let words = ad.replace(/[\(\)\[\]\/\-\,\.\"]/g, ' ').split(/\s+/);
    for (let w of words) {
      if (w.length > 2 && isNaN(w) && !stops.has(w)) {
        ak = w;
        break;
      }
    }
  }

  if (!ak) {
    ak = ad.split(/\s+/)[0].replace(/[\W_]+/g, '') || 'malzeme';
  }

  p.anaKelime = ak;
});

fs.writeFileSync('poz-2026.json', JSON.stringify(d, null, 2));
console.log('Done!');
