const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const newScript = `<script>
  (function(){
    const menuBtn = document.getElementById('menu');
    const mobileNav = document.getElementById('mobileNav');
    if(menuBtn && mobileNav) {
      menuBtn.onclick = () => {
        const isOpen = mobileNav.classList.toggle('open');
        menuBtn.textContent = isOpen ? '✕' : '☰';
        document.body.style.overflow = isOpen ? 'hidden' : '';
      };
      mobileNav.querySelectorAll('a').forEach(a => a.onclick = () => {
        mobileNav.classList.remove('open');
        menuBtn.textContent = '☰';
        document.body.style.overflow = '';
      });
      mobileNav.addEventListener('click', (e) => {
        if(e.target === mobileNav) {
          mobileNav.classList.remove('open');
          menuBtn.textContent = '☰';
          document.body.style.overflow = '';
        }
      });
    }
  })();
</script>
</body>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<script>\s*\(function\(\)\{\s*const menuBtn = document\.getElementById\('menu'\);.*?<\/script>\s*<\/body>/s, newScript);
  fs.writeFileSync(file, content, 'utf8');
});
