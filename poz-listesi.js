/* ═══════════════════════════════════════════════════
   POZ LİSTESİ – Search, Add-to-List & Excel Export
   ═══════════════════════════════════════════════════ */

let pozlar = [];
let myList = [];

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const money = n => n == null ? '—' : new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(n) + ' TL';
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char]));

// ────── LocalStorage persistence ──────
function saveList() {
  localStorage.setItem('prokontPozList', JSON.stringify(myList));
}
function loadList() {
  try {
    const saved = localStorage.getItem('prokontPozList');
    if (saved) myList = JSON.parse(saved);
  } catch (e) { myList = []; }
}

// ────── Render search results ──────
function renderSearch() {
  const q = $('#pozSearch').value.toLocaleLowerCase('tr').trim();
  const cat = $('#category').value;
  const type = $('#type').value;

  const words = q.split(/\s+/).filter(Boolean);
  
  const rows = pozlar.filter(p => {
    if (cat !== 'all' && p.kategori !== cat) return false;
    if (type !== 'all' && p.tur !== type) return false;
    if (!q) return true;
    
    const text = [p.poz, p.ad, p.kategori, p.tur].join(' ').toLocaleLowerCase('tr');
    return words.every(w => text.includes(w));
  });


  const resultCount = $('#resultCount');
  if (resultCount) resultCount.textContent = new Intl.NumberFormat('tr-TR').format(rows.length);
  const display = rows.slice(0, 80);

  $('#pozRows').innerHTML = display.map(p => `
    <div class="poz-row" data-poz="${encodeURIComponent(p.poz)}">
      <div class="pr-info">
        <span class="pr-poz">${p.poz}</span>
        <span class="pr-name" title="${p.ad}">${p.ad}</span>
        <span class="pr-cat">${p.kategori} · ${p.tur}</span>
      </div>
      <div class="pr-right">
        <span class="pr-price">${money(p.fiyat)}</span>
        <span class="pr-unit">${p.birim || '—'}</span>
      </div>
      <button class="pr-add" onclick="event.stopPropagation(); openQtyModal('${encodeURIComponent(p.poz)}')">+ Ekle</button>
    </div>
  `).join('');

  $('#empty').hidden = !!rows.length;
  $('#clearSearch').hidden = !q;

  const note = $('#resultNote');
  if (note) {
    note.textContent = rows.length > 80
      ? 'İlk 80 sonuç gösteriliyor. Aramayı daraltarak daha spesifik sonuçlar elde edin.'
      : rows.length ? `${rows.length} sonuç listelendi.` : '';
  }

  // Click row to open modal
  $$('.poz-row').forEach(row => {
    row.addEventListener('click', () => {
      openQtyModal(row.dataset.poz);
    });
  });
}

// ────── Quantity Modal ──────
let selectedPoz = null;

function openQtyModal(encodedPoz) {
  const pozNo = decodeURIComponent(encodedPoz);
  selectedPoz = pozlar.find(p => p.poz === pozNo);
  if (!selectedPoz) return;

  $('#qtyTitle').textContent = selectedPoz.ad;
  $('#qtyPozNo').textContent = selectedPoz.poz;
  $('#qtyUnit').textContent = 'Birim: ' + (selectedPoz.birim || '—');
  $('#qtyPrice').textContent = money(selectedPoz.fiyat);
  $('#qtyInput').value = '';
  $('#qtySubtotal').textContent = '0,00 TL';
  $('#qtyModal').classList.add('active');
  setTimeout(() => $('#qtyInput').focus(), 100);
}

function closeQtyModal() {
  $('#qtyModal').classList.remove('active');
  selectedPoz = null;
}

function updateSubtotal() {
  const qty = parseFloat($('#qtyInput').value) || 0;
  const price = selectedPoz ? selectedPoz.fiyat : 0;
  $('#qtySubtotal').textContent = money(qty * price);
}

function addToList() {
  if (!selectedPoz) return;
  const qty = parseFloat($('#qtyInput').value);
  if (!qty || qty <= 0) {
    $('#qtyInput').style.borderColor = '#d14040';
    $('#qtyInput').focus();
    setTimeout(() => $('#qtyInput').style.borderColor = '', 1500);
    return;
  }

  // Check if already in list
  const existing = myList.find(item => !item.ozel && item.poz === selectedPoz.poz);
  if (existing) {
    existing.miktar += qty;
  } else {
    myList.push({
      poz: selectedPoz.poz,
      ad: selectedPoz.ad,
      birim: selectedPoz.birim,
      fiyat: selectedPoz.fiyat,
      kategori: selectedPoz.kategori,
      tur: selectedPoz.tur,
      miktar: qty,
      key: `poz-${selectedPoz.poz}`
    });
  }

  saveList();
  renderMyList();
  $('#myListDetails').open = true;
  closeQtyModal();
}

// ────── Custom item ──────
function openCustomItemModal() {
  ['customName', 'customPoz'].forEach(id => $(`#${id}`).value = '');
  $('#customUnit').value = 'adet';
  $('#customQty').value = '1';
  $('#customPrice').value = '0';
  updateCustomSubtotal();
  $('#customItemModal').classList.add('active');
  $('#customItemModal').setAttribute('aria-hidden', 'false');
  setTimeout(() => $('#customName').focus(), 100);
}

function closeCustomItemModal() {
  $('#customItemModal').classList.remove('active');
  $('#customItemModal').setAttribute('aria-hidden', 'true');
}

function updateCustomSubtotal() {
  const qty = parseFloat($('#customQty').value) || 0;
  const price = parseFloat($('#customPrice').value) || 0;
  $('#customSubtotal').textContent = money(qty * price);
}

function addCustomItem() {
  const name = $('#customName').value.trim();
  const qty = parseFloat($('#customQty').value);
  const price = parseFloat($('#customPrice').value) || 0;
  if (!name || !qty || qty <= 0) {
    const invalid = !name ? $('#customName') : $('#customQty');
    invalid.style.borderColor = '#d14040';
    invalid.focus();
    setTimeout(() => invalid.style.borderColor = '', 1500);
    return;
  }
  const poz = $('#customPoz').value.trim() || 'ÖZEL';
  myList.push({
    key: `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    poz,
    ad: name,
    birim: $('#customUnit').value.trim() || 'adet',
    fiyat: Math.max(0, price),
    kategori: 'Özel kalem',
    tur: 'Kullanıcı girişi',
    miktar: qty,
    ozel: true
  });
  saveList();
  renderMyList();
  $('#myListDetails').open = true;
  closeCustomItemModal();
}

// ────── Render My List ──────
function renderMyList() {
  const empty = $('#myListEmpty');
  const items = $('#myListItems');
  const footer = $('#myListFooter');
  $('#listItemCount').textContent = myList.length;

  if (!myList.length) {
    empty.hidden = false;
    items.innerHTML = '';
    footer.hidden = true;
    return;
  }

  empty.hidden = true;
  footer.hidden = false;

  items.innerHTML = myList.map((item, i) => `
      <div class="ws-item" data-index="${i}">
        <div class="wi-info">
          <span class="wi-poz">${escapeHtml(item.poz)}</span>
          <span class="wi-name" title="${escapeHtml(item.ad)}">${escapeHtml(item.ad)}</span>
          <span class="wi-meta" style="display:flex; align-items:center; gap:6px;">
            ${item.miktar} ${escapeHtml(item.birim || '-')} &times; 
            <input type="number" value="${item.fiyat}" min="0" step="any" onchange="setPrice(${i}, this.value)" title="Birim Fiyatı Değiştir" style="width: 85px; padding: 2px 4px; border: 1px solid #dce6df; border-radius: 4px; font-family: inherit; font-size: 13px; color: #21805d; font-weight: 700; background: #fff; text-align: right;"> TL
          </span>
        </div>
        <div class="wi-right">
          <span class="wi-subtotal">${money(item.miktar * item.fiyat)}</span>
          <button class="wi-remove" onclick="removeItem(${i})" title="Kaldır">×</button>
        </div>
      </div>
    `).join('');

  // Totals
  const totalItems = myList.length;
  const grandTotal = myList.reduce((sum, item) => sum + item.miktar * item.fiyat, 0);
  $('#totalItems').textContent = totalItems;
  $('#grandTotal').textContent = money(grandTotal);
}

function changeQty(index, delta) {
  if (!myList[index]) return;
  myList[index].miktar = Math.max(0.01, myList[index].miktar + delta);
  saveList();
  renderMyList();
}


function setPrice(index, val) {
    if (!myList[index]) return;
    const v = parseFloat(val);
    if (!isNaN(v) && v >= 0) {
      myList[index].fiyat = v;
    }
    saveList();
    renderMyList();
  }
function setQty(index, val) {
  if (!myList[index]) return;
  const v = parseFloat(val);
  if (v && v > 0) {
    myList[index].miktar = v;
  }
  saveList();
  renderMyList();
}

function removeItem(index) {
  myList.splice(index, 1);
  saveList();
  renderMyList();
}

function clearList() {
  if (!myList.length) return;
  if (!confirm('Çalışma listesindeki tüm kalemler silinecek. Emin misiniz?')) return;
  myList = [];
  saveList();
  renderMyList();
}

// ────── PDF Export ──────
function exportPdf() {
  if (!myList.length) {
    alert('Listeniz boş. Önce poz ekleyin.');
    return;
  }

  const btn = $('#exportPdf');
  const originalText = btn.innerHTML;
  btn.innerHTML = 'İndiriliyor...';
  btn.disabled = true;

  const grandTotal = myList.reduce((s, i) => s + i.miktar * i.fiyat, 0);
  const now = new Date();
  const dateStr = now.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  const logoUrl = 'prokont-logo.png';

  const container = document.createElement('div');
  container.innerHTML = `
    <div style="width: 100%; max-width: 900px; margin: 0 auto; padding: 10px; box-sizing: border-box; font-family: 'DM Sans', sans-serif; color: #13242c; background: #fff;">
      <!-- Banner -->
      <div style="background: linear-gradient(135deg, #123a35 0%, #0c2634 60%, #102b3a 100%); color: #fff; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${logoUrl}" alt="PROKONT" style="width: 45px; height: 45px; object-fit: contain;">
          <div>
            <div style="font: 800 20px Manrope, sans-serif; letter-spacing: .04em;">PROKONT<span style="display: block; font: 500 8px 'DM Sans', sans-serif; letter-spacing: .1em; color: #a7d9c5; margin-top: 3px;">MÜHENDİSLİK & İNŞAAT</span></div>
          </div>
        </div>
        <div style="text-align: right; font-size: 11px; color: #c8d8d4;">
          <b style="display: block; color: #fff; font-size: 13px; margin-bottom: 2px;">Poz Çalışma Listesi</b>
          ${dateStr} · ${timeStr}
        </div>
      </div>

      <!-- Info strip -->
      <div style="background: #21805d; color: #fff; padding: 8px 30px; display: flex; justify-content: space-between; font-size: 10px; font-weight: 600; letter-spacing: .03em;">
        <span>ÇŞİDB Yüksek Fen Kurulu · 2026 Resmi Birim Fiyatları</span>
        <span>${myList.length} kalem</span>
      </div>

      <!-- Table -->
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr style="background: #f4f8f5; border-bottom: 2px solid #dce6df; font-weight: 800; font-size: 9px; color: #21805d; text-transform: uppercase; letter-spacing: .08em; text-align: left;">
            <th style="padding: 10px 8px; width: 30px; text-align: center;">#</th>
            <th style="padding: 10px 8px;">Poz No / İmalat Adı</th>
            <th style="padding: 10px 8px; width: 120px;">Kategori</th>
            <th style="padding: 10px 8px; width: 40px; text-align: center;">Birim</th>
            <th style="padding: 10px 8px; width: 70px; text-align: right;">Birim Fiyat</th>
            <th style="padding: 10px 8px; width: 50px; text-align: center;">Miktar</th>
            <th style="padding: 10px 8px; width: 80px; text-align: right;">Toplam</th>
          </tr>
        </thead>
        <tbody>
          ${myList.map((item, i) => `
            <tr class="pdf-row" style="background: ${i % 2 === 0 ? '#fff' : '#fafcfa'}; border-bottom: 1px solid #edf2ee;">
              <td style="padding: 10px 8px; text-align: center; color: #71817c; font-weight: 600; vertical-align: top;">${i + 1}</td>
              <td style="padding: 10px 8px; vertical-align: top;">
                <div style="font-size: 9px; color: #21805d; font-weight: 800; letter-spacing: .04em;">${item.poz}</div>
                <div style="font-weight: 600; color: #102b3a; margin-top: 2px;">${item.ad}</div>
              </td>
              <td style="padding: 10px 8px; color: #405650; vertical-align: top;">${item.kategori || '—'}</td>
              <td style="padding: 10px 8px; text-align: center; color: #405650; vertical-align: top;">${item.birim || '—'}</td>
              <td style="padding: 10px 8px; text-align: right; color: #405650; vertical-align: top;">${money(item.fiyat)}</td>
              <td style="padding: 10px 8px; text-align: center; font-weight: 600; color: #405650; vertical-align: top;">${new Intl.NumberFormat('tr-TR', {maximumFractionDigits:2}).format(item.miktar)}</td>
              <td style="padding: 10px 8px; text-align: right; font-weight: 700; color: #102b3a; vertical-align: top;">${money(item.miktar * item.fiyat)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Totals -->
      <div class="totals" style="border-top: 3px solid #21805d; margin-top: 8px; padding: 16px 0;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 10px; font-size: 12px;">
          <span>Toplam Kalem Sayısı</span>
          <b>${myList.length}</b>
        </div>
        <div style="background: linear-gradient(135deg, #123a35, #0c2634); color: #fff; padding: 16px 20px; border-radius: 8px; margin-top: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 14px;">Genel Toplam</span>
          <b style="font: 800 22px Manrope, sans-serif; color: #99d9b7;">${money(grandTotal)}</b>
        </div>
      </div>

      <!-- Footer -->
      <div style="border-top: 1px solid #e0e8e2; margin-top: 30px; padding: 16px 0 20px; display: flex; justify-content: space-between; align-items: center; font-size: 9px; color: #71817c;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="${logoUrl}" alt="" style="width: 18px; height: 18px; opacity: 0.6;">
          <span style="font-weight: 700; color: #405650;">PROKONT Mühendislik & İnşaat Ltd. Şti.</span>
        </div>
        <div>
          Bu belge PROKONT Poz Listesi aracı ile oluşturulmuştur. Hesaplamalar yaklaşık maliyetlerdir.
        </div>
      </div>
    </div>
  `;

  // Yeni sekme açmak yerine görünmez bir iframe kullanıp, sadece yazdırma/PDF penceresini çıkartıyoruz.
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>PROKONT_Poz_Listesi_${dateStr.replace(/ /g, '_')}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');
        @page {
          size: A4 portrait;
          margin: 12mm 15mm;
        }
        body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #fff; }
        @media print {
          body { margin: 0; }
          .pdf-row { page-break-inside: avoid; }
          .main-container { max-width: none !important; width: 100% !important; padding: 0 !important; }
        }
      </style>
    </head>
    <body>
      ${container.innerHTML.replace('max-width: 900px;', 'max-width: none;')}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
          }, 500);
        };
        window.onafterprint = function() {
          // Yazdırma veya kaydetme bittiğinde iframe'i temizle
          setTimeout(function() {
             if(window.frameElement) window.frameElement.remove();
          }, 500);
        };
      </script>
    </body>
    </html>
  `);
  doc.close();

  // Butonu geri yükle
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1000);
}

// ────── Init ──────
async function init() {
  try {
    const response = await fetch('poz-2026.json');
    if (!response.ok) throw new Error('Veri dosyası yüklenemedi');
    const data = await response.json();
    pozlar = data.pozlar || [];

    // Populate filters
    const cats = [...new Set(pozlar.map(p => p.kategori))].sort((a, b) => a.localeCompare(b, 'tr'));
    const types = [...new Set(pozlar.map(p => p.tur))].sort((a, b) => a.localeCompare(b, 'tr'));
    $('#category').insertAdjacentHTML('beforeend', cats.map(x => `<option>${x}</option>`).join(''));
    $('#type').innerHTML = '<option value="all">Tüm türler</option>' + types.map(x => `<option>${x}</option>`).join('');

    // Counter
    $('#pozCount').textContent = new Intl.NumberFormat('tr-TR').format(pozlar.length);

    // Events
    $('#pozSearch').oninput = renderSearch;
    $('#category').onchange = renderSearch;
    $('#type').onchange = renderSearch;
    $('#clearSearch').onclick = () => { $('#pozSearch').value = ''; renderSearch(); $('#pozSearch').focus(); };
    $('#resetFilters').onclick = () => { $('#category').value = 'all'; $('#type').value = 'all'; $('#pozSearch').value = ''; renderSearch(); };

    // Quick tags
    $$('.ws-quick-tags button').forEach(b => b.onclick = () => {
      $('#pozSearch').value = b.textContent;
      renderSearch();
    });

    // Quantity modal events
    $('#qtyInput').oninput = updateSubtotal;
    $('#qtyInput').addEventListener('keydown', e => { if (e.key === 'Enter') addToList(); });
    $('#qtyAdd').onclick = addToList;
    $('#qtyClose').onclick = closeQtyModal;
    $('#qtyModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeQtyModal(); });

    // List actions
    $('#addCustomItem').onclick = openCustomItemModal;
    $('#clearList').onclick = clearList;
    $('#exportPdf').onclick = exportPdf;

    // Custom item dialog actions
    $('#customQty').oninput = updateCustomSubtotal;
    $('#customPrice').oninput = updateCustomSubtotal;
    $('#customItemAdd').onclick = addCustomItem;
    $('#customItemClose').onclick = closeCustomItemModal;
    $('#customItemModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeCustomItemModal(); });
    $('#customName').addEventListener('keydown', e => { if (e.key === 'Enter') addCustomItem(); });

    // Load saved list
    loadList();
    renderMyList();
    if (myList.length) $('#myListDetails').open = true;

    // Initial render
    renderSearch();

  } catch (error) {
    $('#pozRows').innerHTML = '';
    $('#empty').hidden = false;
    $('#empty').innerHTML = '<b>2026 veri listesi yüklenemedi</b><p>Sayfayı yerel sunucu üzerinden açtığınızdan emin olun.</p>';
    console.error(error);
  }
}

init();
