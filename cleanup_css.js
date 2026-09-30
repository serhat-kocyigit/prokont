const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Remove old generic #mobileNav a styles since links are now inside .mnav-links
const oldLinkStyles = `#mobileNav a {
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

css = css.replace(oldLinkStyles, '/* old mobileNav a styles removed - now in .mnav-links */');

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Cleaned up old link styles');
