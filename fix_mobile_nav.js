const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

const oldBlock = `#mobileNav.open {
    display:flex;
    flex-direction:column;
    position:fixed;
    top:86px;
    left:0;
    right:0;
    bottom:0;
    background: rgba(10,25,35,0.7);
    padding: 0;
    box-shadow: none;
    z-index: 4;
  }
  
  #mobileNav a {
    text-decoration:none;
    color:var(--navy);
    font-weight:bold;
    padding: 16px 24px;
    background: #fff;
    border-bottom: 1px solid var(--line);
    display: block;
    font-size: 15px;
  }
  
  #mobileNav a:first-child {
    border-top: 1px solid var(--line);
  }
  
  #mobileNav a:last-of-type {
    border-bottom: none;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }`;

const newBlock = `#mobileNav.open {
    display:flex;
    flex-direction:column;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(6,23,29,0.85);
    padding: 0;
    box-shadow: none;
    z-index: 50;
    padding-top: 80px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    overflow-y: auto;
  }
  
  #mobileNav a {
    text-decoration:none;
    color:#fff;
    font-weight:600;
    padding: 18px 28px;
    background: transparent;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: block;
    font-size: 16px;
    letter-spacing: 0.01em;
    transition: background 0.2s;
  }
  
  #mobileNav a:hover,
  #mobileNav a:active {
    background: rgba(255,255,255,0.08);
  }
  
  #mobileNav a:first-child {
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  
  #mobileNav a:last-of-type {
    border-bottom: none;
  }`;

if (css.includes(oldBlock)) {
  css = css.replace(oldBlock, newBlock);
  console.log('Replaced successfully');
} else {
  console.log('Block not found - trying line by line match');
  // Fallback: replace key parts
  css = css.replace(/#mobileNav\.open\s*\{[^}]+\}/s, `#mobileNav.open {
    display:flex;
    flex-direction:column;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(6,23,29,0.85);
    padding: 0;
    box-shadow: none;
    z-index: 50;
    padding-top: 80px;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    overflow-y: auto;
  }`);
  
  css = css.replace(/#mobileNav a\s*\{[^}]+\}/s, `#mobileNav a {
    text-decoration:none;
    color:#fff;
    font-weight:600;
    padding: 18px 28px;
    background: transparent;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: block;
    font-size: 16px;
    letter-spacing: 0.01em;
    transition: background 0.2s;
  }`);

  css = css.replace(/#mobileNav a:first-child\s*\{[^}]+\}/s, `#mobileNav a:first-child {
    border-top: 1px solid rgba(255,255,255,0.1);
  }`);

  css = css.replace(/#mobileNav a:last-of-type\s*\{[^}]+\}/s, `#mobileNav a:last-of-type {
    border-bottom: none;
  }`);
  console.log('Applied fallback replacements');
}

// Also bump the z-index of header so it stays on top of the overlay
if (!css.includes('header{') && !css.includes('header {')) {
  // header is inline, skip
}

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Done');
