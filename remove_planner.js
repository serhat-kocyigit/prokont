const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

// Find and remove enhancePlanner definition
const start = s.indexOf('function enhancePlanner()');
if (start !== -1) {
  let depth = 0;
  let end = -1;
  let started = false;
  for (let i = start; i < s.length; i++) {
    if (s[i] === '{') {
      depth++;
      started = true;
    } else if (s[i] === '}') {
      depth--;
      if (started && depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end !== -1) {
    s = s.substring(0, start) + s.substring(end + 1);
  }
}

// Remove the call
s = s.replace(/enhancePlanner\(\);?/g, '');

fs.writeFileSync('app.js', s, 'utf8');
fs.writeFileSync('dist/app.js', s, 'utf8');
console.log('Done.');
