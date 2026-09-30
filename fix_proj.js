const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');
css += `
/* Lightbox Modal */
.lightbox { position: fixed; inset: 0; background: rgba(10, 25, 35, 0.95); z-index: 9999; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; pointer-events: none; transition: 0.3s; }
.lightbox.active { opacity: 1; visibility: visible; pointer-events: auto; }
.lightbox img { max-width: 90vw; max-height: 90vh; border-radius: 4px; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
.lightbox-close { position: absolute; top: 20px; right: 25px; color: #fff; font-size: 40px; background: none; border: none; cursor: pointer; }
.p-logo.large { width: 360px; height: 180px; }
@media(max-width: 600px) {
  .p-logo.large { width: auto; height: 60px; max-width: 180px; }
}
`;
fs.writeFileSync('styles.css', css, 'utf8');

let projeler = fs.readFileSync('projeler.html', 'utf8');
projeler = projeler.replace('</body>', `
<script>
  document.body.insertAdjacentHTML('beforeend', '<div class="lightbox" id="lightbox"><button class="lightbox-close" id="lightboxClose">&times;</button><img src="" alt="Büyütülmüş Görsel" id="lightboxImg"></div>');
  const lightbox = document.getElementById('lightbox'), lightboxImg = document.getElementById('lightboxImg'), lightboxClose = document.getElementById('lightboxClose');
  document.querySelectorAll('.p-gallery img, .projects img, article img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() { lightboxImg.src = this.src; lightbox.classList.add('active'); });
  });
  const closeLightbox = () => lightbox.classList.remove('active');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
</script>
</body>`);

fs.writeFileSync('projeler.html', projeler, 'utf8');
