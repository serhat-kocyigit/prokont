const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Add new mobile nav styles right after the existing mobileNav a:last-of-type block
const insertAfter = `#mobileNav a:last-of-type {
    border-bottom: none;
  }`;

const newStyles = `#mobileNav a:last-of-type {
    border-bottom: none;
  }

  /* ── Mobile Nav Links Container ── */
  #mobileNav .mnav-links {
    display: flex;
    flex-direction: column;
  }
  #mobileNav .mnav-links a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    padding: 18px 28px;
    background: transparent;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: block;
    font-size: 16px;
    letter-spacing: 0.01em;
    transition: background 0.2s;
  }
  #mobileNav .mnav-links a:first-child {
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  #mobileNav .mnav-links a:hover,
  #mobileNav .mnav-links a:active {
    background: rgba(255,255,255,0.08);
  }

  /* ── Mobile Nav Info Panel ── */
  .mnav-info {
    padding: 20px 20px 30px;
    margin-top: auto;
  }
  .mnav-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px;
    padding: 20px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .mnav-card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 16px;
  }
  .mnav-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  .mnav-card-header strong {
    display: block;
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.01em;
  }
  .mnav-card-header span {
    color: rgba(255,255,255,0.5);
    font-size: 11px;
    font-weight: 500;
  }

  /* Location */
  .mnav-location {
    margin-bottom: 14px;
  }
  .mnav-map-link {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 13px;
    line-height: 1.5;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255,255,255,0.04);
    transition: background 0.2s;
  }
  .mnav-map-link:hover {
    background: rgba(255,255,255,0.08);
  }
  .mnav-map-link svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: var(--green);
  }

  /* Contacts */
  .mnav-contacts {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
  }
  .mnav-contact {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 12px;
    border-radius: 10px;
    background: rgba(255,255,255,0.04);
    transition: background 0.2s;
  }
  .mnav-contact:hover {
    background: rgba(255,255,255,0.08);
  }
  .mnav-contact svg {
    flex-shrink: 0;
    color: var(--green);
  }
  .mnav-whatsapp {
    color: #25d366;
  }
  .mnav-whatsapp svg {
    color: #25d366;
  }

  /* CTA Button */
  .mnav-cta {
    display: block;
    text-align: center;
    background: var(--orange);
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    padding: 14px 20px;
    border-radius: 10px;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: filter 0.2s;
  }
  .mnav-cta:hover {
    filter: brightness(1.1);
  }`;

css = css.replace(insertAfter, newStyles);
fs.writeFileSync('styles.css', css, 'utf8');
console.log('Mobile nav info panel styles added');
