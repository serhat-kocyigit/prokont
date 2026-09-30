const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(/@media\(max-width:950px\)\{.*?(?=@media\(max-width:650px\))/s, `@media(max-width:950px){
  nav{display:none}
  .actions #menu{display:block; width:24px; text-align:center;}
  
  #mobileNav.open {
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
  }

  .calc{grid-template-columns:1fr 1fr}
  .calc>div{grid-column:1/-1}
  .result{grid-column:1/-1}
  .hero aside{display:none}
}`);

fs.writeFileSync('styles.css', css, 'utf8');
