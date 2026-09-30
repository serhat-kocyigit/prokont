const fs = require('fs');

// Update the inline menu script in all HTML files to handle .mnav-links a and .mnav-cta clicks
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const oldScript = `mobileNav.querySelectorAll('a').forEach(a => a.onclick = () => {
        mobileNav.classList.remove('open');
        menuBtn.textContent = '☰';
        document.body.style.overflow = '';
      });`;

const newScript = `mobileNav.querySelectorAll('.mnav-links a, .mnav-cta').forEach(a => a.onclick = () => {
        mobileNav.classList.remove('open');
        menuBtn.textContent = '☰';
        document.body.style.overflow = '';
      });`;

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(oldScript)) {
    html = html.replace(oldScript, newScript);
    fs.writeFileSync(file, html, 'utf8');
    console.log(file + ': updated menu script');
  }
}
