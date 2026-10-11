const fs = require('fs');

const oldNav = `<div id="mobileNav">
    <a href="index.html">Ana Sayfa</a>
    <a href="hesaplama-araclari.html">Hesaplama Merkezi</a>
    <a href="poz-listesi.html">Poz Listesi</a>
    <a href="planlayici.html">Planlayıcı</a>
    <a href="karsilastir.html">Karşılaştır</a>
    <a href="projeler.html">Projelerimiz</a>
    <a href="index.html#offer">Teklif Al</a>
  </div>`;

const newNav = `<div id="mobileNav">
    <div class="mnav-links">
      <a href="index.html">Ana Sayfa</a>
      <a href="hesaplama-araclari.html">Hesaplama Merkezi</a>
      <a href="poz-listesi.html">Poz Listesi</a>
      <a href="planlayici.html">Planlayıcı</a>
      <a href="karsilastir.html">Karşılaştır</a>
      <a href="projeler.html">Projelerimiz</a>
    </div>
    <div class="mnav-info">
      <div class="mnav-card">
        <div class="mnav-card-header">
          <img src="prokont-logo.png" alt="PROKONT" class="mnav-logo">
          <div>
            <strong>PROKONT Mühendislik</strong>
            <span>İnşaat & Taahhüt</span>
          </div>
        </div>
        <div class="mnav-location">
          <a href="https://maps.google.com/?q=Sahabiye+Mah.+Ahmet+Paşa+Cd.+No:32/D+Kocasinan+Kayseri" target="_blank" class="mnav-map-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Sahabiye Mah. Ahmet Paşa Cd. No:32/D<br>Kocasinan / Kayseri</span>
          </a>
        </div>
        <div class="mnav-contacts">
          <a href="tel:05436192262" class="mnav-contact">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            0543 619 22 62
          </a>
          <a href="https://wa.me/905436192262" target="_blank" class="mnav-contact mnav-whatsapp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.532-1.47A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.308-.724-5.993-1.953l-.42-.306-2.693.874.894-2.657-.335-.437A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            0543 619 22 62
          </a>
          <a href="mailto:info@prokontinsaat.com" class="mnav-contact">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            info@prokontinsaat.com
          </a>
        </div>
        <a href="index.html#offer" class="mnav-cta">Teklif Al →</a>
      </div>
    </div>
  </div>`;

// Also handle the projeler.html variant
const oldNavAlt = `<div id="mobileNav">
    <a href="index.html">Ana Sayfa</a>
    <a href="hesaplama-araclari.html">Hesaplama Merkezi</a>
    <a href="poz-listesi.html">Poz Listesi</a>
    <a href="planlayici.html">Planlayıcı</a>
    <a href="karsilastir.html">Karşılaştır</a>
    <a href="projeler.html">Projelerimiz</a>
    <a href="index.html#offer">Teklif Al</a>
  </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<div id="mobileNav">')) {
    // Replace with new nav
    content = content.replace(oldNav, newNav);
    content = content.replace(oldNavAlt, newNav);
    
    // If neither matched, try a more flexible approach
    if (!content.includes('mnav-links')) {
      const startIdx = content.indexOf('<div id="mobileNav">');
      // Find the closing </div> that matches
      let depth = 0;
      let endIdx = startIdx;
      for (let i = startIdx; i < content.length; i++) {
        if (content.substring(i, i+4) === '<div') depth++;
        if (content.substring(i, i+6) === '</div>') {
          depth--;
          if (depth === 0) {
            endIdx = i + 6;
            break;
          }
        }
      }
      if (endIdx > startIdx) {
        content = content.substring(0, startIdx) + newNav + content.substring(endIdx);
      }
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(file + ': updated mobileNav');
  }
}
