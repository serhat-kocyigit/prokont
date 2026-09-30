const fs = require('fs');

const oldUrl = 'https://maps.google.com/?q=Sahabiye+Mah.+Ahmet+Pa%C5%9Fa+Cd.+No:32/D+Kocasinan+Kayseri';
const oldUrl2 = 'https://maps.google.com/?q=Sahabiye+Mah.+Ahmet+Paşa+Cd.+No:32/D+Kocasinan+Kayseri';
const newUrl = 'https://maps.app.goo.gl/gHApgxnrrzLfrx4T9';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (html.includes(oldUrl)) { html = html.replace(oldUrl, newUrl); changed = true; }
  if (html.includes(oldUrl2)) { html = html.replace(oldUrl2, newUrl); changed = true; }
  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    console.log(file + ': updated');
  }
}
