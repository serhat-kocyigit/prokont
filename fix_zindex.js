const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Bump header z-index above mobileNav
css = css.replace('header{height:86px;background:#fff;position:sticky;top:0;z-index:5}', 
                   'header{height:86px;background:#fff;position:sticky;top:0;z-index:51}');

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Header z-index bumped to 51');
