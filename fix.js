const fs = require('fs');

let content = fs.readFileSync('ortak-hesap-motoru.js', 'utf8');

content = content.replace("['Banyo alanı (m²)','number',6],", "");
content = content.replace("['Mutfak dolabı (mtül)','number',5],", "");
content = content.replace("['Daire alanı (m²)','number',100],", "");
content = content.replace("['Banyo/WC sayısı','number',2],", "");

content = content.replace("['Banyo Tadilatı','Planlama','adet'", "['Banyo Tadilatı','Planlama','m²'");
content = content.replace("['Mutfak Tadilatı','Planlama','adet'", "['Mutfak Tadilatı','Planlama','mtül'");
content = content.replace("['Daire Elektrik','Elektrik','adet'", "['Daire Elektrik','Elektrik','m²'");

content = content.replace(
  "const _oEx=readOrtakExtras(),_oAdj=getOrtakAdjustments(tool[0],_oEx);",
  "const _oEx=readOrtakExtras(),_oAdj=getOrtakAdjustments(tool[0],_oEx,area);"
);

content = content.replace(
  "function getOrtakAdjustments(name,ex){const p={},a={};let lab=1;",
  "function getOrtakAdjustments(name,ex,area=1){\nconst p={},a={};let lab=1;"
);

content = content.replace(
  "}else if(name==='Banyo Tadilatı'){const ba=Math.max(2,+ex['Banyo alanı (m²)']||6),kq=ex['Tasarım kalitesi']||'Standart';a['Seramik ve yapıştırıcı']=ba/6;lab=ba/6;if(kq==='Lüks'){p['Seramik ve yapıştırıcı']=1.6;p['Vitrifiye ve bataryalar']=2.5;p['Duşakabin ve tekne']=2.0;p['Tesisat boru ve ekleme']=1.3;lab*=1.4;}else if(kq==='Ekonomik'){p['Seramik ve yapıştırıcı']=0.7;p['Vitrifiye ve bataryalar']=0.6;p['Duşakabin ve tekne']=0.7;lab*=0.8;}}",
  "}else if(name==='Banyo Tadilatı'){const ba=Math.max(2,area),kq=ex['Tasarım kalitesi']||'Standart';a['Seramik ve yapıştırıcı']=1/6;a['Vitrifiye ve bataryalar']=1/ba;a['Duşakabin ve tekne']=1/ba;a['Tesisat boru ve ekleme']=1/ba;a['Kırım, söküm ve moloz atımı']=1/ba;a['Banyo yenileme işçiliği']=1/ba;lab=1/6;if(kq==='Lüks'){p['Seramik ve yapıştırıcı']=1.6;p['Vitrifiye ve bataryalar']=2.5;p['Duşakabin ve tekne']=2.0;p['Tesisat boru ve ekleme']=1.3;lab*=1.4;}else if(kq==='Ekonomik'){p['Seramik ve yapıştırıcı']=0.7;p['Vitrifiye ve bataryalar']=0.6;p['Duşakabin ve tekne']=0.7;lab*=0.8;}}"
);

content = content.replace(
  "}else if(name==='Mutfak Tadilatı'){const mb=Math.max(2,+ex['Mutfak dolabı (mtül)']||5),kap=ex['Kapak türü']||'MDF Lam',tz=ex['Tezgah']||'Laminat';a['Mutfak dolabı gövde ve kapak']=mb/5;a['Tezgah ve evye']=mb/5;a['Tezgah arası seramik']=mb/5;lab=mb/5;if(kap==='Lake')p['Mutfak dolabı gövde ve kapak']=1.8;else if(kap==='Akrilik')p['Mutfak dolabı gövde ve kapak']=1.4;if(tz==='Çimstone')p['Tezgah ve evye']=1.6;else if(tz==='Granit')p['Tezgah ve evye']=1.8;}",
  "}else if(name==='Mutfak Tadilatı'){const mb=Math.max(2,area),kap=ex['Kapak türü']||'MDF Lam',tz=ex['Tezgah']||'Laminat';a['Mutfak dolabı gövde ve kapak']=1/5;a['Tezgah ve evye']=1/5;a['Tezgah arası seramik']=1/5;a['Kırım, moloz ve hazırlık']=1/mb;a['Elektrik ve su tesisat altyapı']=1/mb;a['Mutfak montaj ve işçiliği']=1/mb;lab=1/5;if(kap==='Lake')p['Mutfak dolabı gövde ve kapak']=1.8;else if(kap==='Akrilik')p['Mutfak dolabı gövde ve kapak']=1.4;if(tz==='Çimstone')p['Tezgah ve evye']=1.6;else if(tz==='Granit')p['Tezgah ve evye']=1.8;}"
);

content = content.replace(
  "}else if(name==='Daire Elektrik'){const da=Math.max(30,+ex['Daire alanı (m²)']||100),od=ex['Oda sayısı']||'3+1',mk=ex['Malzeme kalitesi']||'Standart',oc=od==='1+1'?0.6:od==='2+1'?0.8:od==='4+1'?1.2:od==='Dubleks'?1.8:1;a['Sigorta kutusu ve şalt']=oc;a['Kablo, boru ve buatlar']=da/100;a['Anahtar ve priz grubu']=(da/100)*oc*(mk==='Lüks'?1.2:1);lab=(da/100)*oc;if(mk==='Lüks'){p['Anahtar ve priz grubu']=1.8;p['Sigorta kutusu ve şalt']=1.5;}else if(mk==='Akıllı Ev'){p['Anahtar ve priz grubu']=3.5;p['Sigorta kutusu ve şalt']=3.0;p['Kablo, boru ve buatlar']=1.5;lab*=1.4;}}",
  "}else if(name==='Daire Elektrik'){const da=Math.max(30,area),od=ex['Oda sayısı']||'3+1',mk=ex['Malzeme kalitesi']||'Standart',oc=od==='1+1'?0.6:od==='2+1'?0.8:od==='4+1'?1.2:od==='Dubleks'?1.8:1;a['Sigorta kutusu ve şalt']=oc/da;a['Kablo, boru ve buatlar']=1/100;a['Anahtar ve priz grubu']=(1/100)*oc*(mk==='Lüks'?1.2:1);a['Altyapı kırım ve işçilik']=1/da;a['Daire elektrik işçiliği']=1/da;lab=(1/100)*oc;if(mk==='Lüks'){p['Anahtar ve priz grubu']=1.8;p['Sigorta kutusu ve şalt']=1.5;}else if(mk==='Akıllı Ev'){p['Anahtar ve priz grubu']=3.5;p['Sigorta kutusu ve şalt']=3.0;p['Kablo, boru ve buatlar']=1.5;lab*=1.4;}}"
);

content = content.replace(
  "}else if(name==='Daire Tesisat'){const bs=Math.max(1,+ex['Banyo/WC sayısı']||2),is=ex['Isıtma sistemi']||'Kombi & Radyatör';a['Temiz/pis su borulaması']=bs/2;a['Kolektör ve vanalar']=bs/2;lab=bs/2;if(is==='Yerden Isıtma'){p['Isıtma boru veya radyatör']=1.4;p['Kolektör ve vanalar']=1.5;lab*=1.3;}else if(is==='Sadece Altyapı'){a['Isıtma boru veya radyatör']=0.2;lab*=0.6;}}",
  "}else if(name==='Daire Tesisat'){const bs=Math.max(1,area),is=ex['Isıtma sistemi']||'Kombi & Radyatör';a['Temiz/pis su borulaması']=1/2;a['Kolektör ve vanalar']=1/2;a['Isıtma boru veya radyatör']=1/2;a['Tesisat kırım ve montaj işçiliği']=1/bs;lab=1/2;if(is==='Yerden Isıtma'){p['Isıtma boru veya radyatör']=1.4;p['Kolektör ve vanalar']=1.5;lab*=1.3;}else if(is==='Sadece Altyapı'){a['Isıtma boru veya radyatör']=0.2;lab*=0.6;}}"
);

fs.writeFileSync('ortak-hesap-motoru.js', content, 'utf8');


// ---- Now do app.js ----
let appContent = fs.readFileSync('app.js', 'utf8');

appContent = appContent.replace("['Banyo alanı (m²)','number',6],", "");
appContent = appContent.replace("['Mutfak dolabı (mtül)','number',5],", "");
appContent = appContent.replace("['Daire alanı (m²)','number',100],", "");
appContent = appContent.replace("['Banyo/WC sayısı','number',2],", "");

appContent = appContent.replace("banyo:{name:'Banyo Tadilatı',category:'Planlama',poz:'Komple Paket',unit:'adet'", "banyo:{name:'Banyo Tadilatı',category:'Planlama',poz:'Komple Paket',unit:'m²'");
appContent = appContent.replace("mutfak:{name:'Mutfak Tadilatı',category:'Planlama',poz:'Komple Paket',unit:'adet'", "mutfak:{name:'Mutfak Tadilatı',category:'Planlama',poz:'Komple Paket',unit:'mtül'");
appContent = appContent.replace("daire_elektrik:{name:'Daire Elektrik',category:'Elektrik',poz:'Komple Tesisat',unit:'adet'", "daire_elektrik:{name:'Daire Elektrik',category:'Elektrik',poz:'Komple Tesisat',unit:'m²'");

appContent = appContent.replace(
  "const adj=getExtraAdjustments(active,extras);",
  "const adj=getExtraAdjustments(active,extras,area);"
);

appContent = appContent.replace(
  "function getExtraAdjustments(key,ex){const p={},a={};let lab=1;",
  "function getExtraAdjustments(key,ex,area=1){\nconst p={},a={};let lab=1;"
);

appContent = appContent.replace(
  "}else if(key==='banyo'){const ba=Math.max(2,+ex['Banyo alanı (m²)']||6),kq=ex['Tasarım kalitesi']||'Standart';a['Seramik ve yapıştırıcı']=ba/6;lab=ba/6;if(kq==='Lüks'){p['Seramik ve yapıştırıcı']=1.6;p['Vitrifiye ve bataryalar']=2.5;p['Duşakabin ve tekne']=2.0;p['Tesisat boru ve ekleme']=1.3;lab*=1.4;}else if(kq==='Ekonomik'){p['Seramik ve yapıştırıcı']=0.7;p['Vitrifiye ve bataryalar']=0.6;p['Duşakabin ve tekne']=0.7;lab*=0.8;}}",
  "}else if(key==='banyo'){const ba=Math.max(2,area),kq=ex['Tasarım kalitesi']||'Standart';a['Seramik ve yapıştırıcı']=1/6;a['Vitrifiye ve bataryalar']=1/ba;a['Duşakabin ve tekne']=1/ba;a['Tesisat boru ve ekleme']=1/ba;a['Kırım, söküm ve moloz atımı']=1/ba;a['Banyo yenileme işçiliği']=1/ba;lab=1/6;if(kq==='Lüks'){p['Seramik ve yapıştırıcı']=1.6;p['Vitrifiye ve bataryalar']=2.5;p['Duşakabin ve tekne']=2.0;p['Tesisat boru ve ekleme']=1.3;lab*=1.4;}else if(kq==='Ekonomik'){p['Seramik ve yapıştırıcı']=0.7;p['Vitrifiye ve bataryalar']=0.6;p['Duşakabin ve tekne']=0.7;lab*=0.8;}}"
);

appContent = appContent.replace(
  "}else if(key==='mutfak'){const mb=Math.max(2,+ex['Mutfak dolabı (mtül)']||5),kap=ex['Kapak türü']||'MDF Lam',tz=ex['Tezgah']||'Laminat';a['Mutfak dolabı gövde ve kapak']=mb/5;a['Tezgah ve evye']=mb/5;a['Tezgah arası seramik']=mb/5;lab=mb/5;if(kap==='Lake')p['Mutfak dolabı gövde ve kapak']=1.8;else if(kap==='Akrilik')p['Mutfak dolabı gövde ve kapak']=1.4;if(tz==='Çimstone')p['Tezgah ve evye']=1.6;else if(tz==='Granit')p['Tezgah ve evye']=1.8;}",
  "}else if(key==='mutfak'){const mb=Math.max(2,area),kap=ex['Kapak türü']||'MDF Lam',tz=ex['Tezgah']||'Laminat';a['Mutfak dolabı gövde ve kapak']=1/5;a['Tezgah ve evye']=1/5;a['Tezgah arası seramik']=1/5;a['Kırım, tesisat ve hazırlık']=1/mb;a['Mutfak montaj ve işçiliği']=1/mb;lab=1/5;if(kap==='Lake')p['Mutfak dolabı gövde ve kapak']=1.8;else if(kap==='Akrilik')p['Mutfak dolabı gövde ve kapak']=1.4;if(tz==='Çimstone')p['Tezgah ve evye']=1.6;else if(tz==='Granit')p['Tezgah ve evye']=1.8;}"
);

appContent = appContent.replace(
  "}else if(key==='daire_elektrik'){const da=Math.max(30,+ex['Daire alanı (m²)']||100),od=ex['Oda sayısı']||'3+1',mk=ex['Malzeme kalitesi']||'Standart',oc=od==='1+1'?0.6:od==='2+1'?0.8:od==='4+1'?1.2:od==='Dubleks'?1.8:1;a['Sigorta kutusu ve şalt']=oc;a['Kablo, boru ve buatlar']=da/100;a['Anahtar ve priz grubu']=(da/100)*oc*(mk==='Lüks'?1.2:1);lab=(da/100)*oc;if(mk==='Lüks'){p['Anahtar ve priz grubu']=1.8;p['Sigorta kutusu ve şalt']=1.5;}else if(mk==='Akıllı Ev'){p['Anahtar ve priz grubu']=3.5;p['Sigorta kutusu ve şalt']=3.0;p['Kablo, boru ve buatlar']=1.5;lab*=1.4;}}",
  "}else if(key==='daire_elektrik'){const da=Math.max(30,area),od=ex['Oda sayısı']||'3+1',mk=ex['Malzeme kalitesi']||'Standart',oc=od==='1+1'?0.6:od==='2+1'?0.8:od==='4+1'?1.2:od==='Dubleks'?1.8:1;a['Sigorta kutusu ve şalt']=oc/da;a['Kablo, boru ve buatlar']=1/100;a['Anahtar ve priz grubu']=(1/100)*oc*(mk==='Lüks'?1.2:1);a['Altyapı kırım ve işçilik']=1/da;lab=(1/100)*oc;if(mk==='Lüks'){p['Anahtar ve priz grubu']=1.8;p['Sigorta kutusu ve şalt']=1.5;}else if(mk==='Akıllı Ev'){p['Anahtar ve priz grubu']=3.5;p['Sigorta kutusu ve şalt']=3.0;p['Kablo, boru ve buatlar']=1.5;lab*=1.4;}}"
);

appContent = appContent.replace(
  "}else if(key==='daire_tesisat'){const bs=Math.max(1,+ex['Banyo/WC sayısı']||2),is=ex['Isıtma sistemi']||'Kombi & Radyatör';a['Temiz/pis su borulaması']=bs/2;a['Kolektör ve vanalar']=bs/2;lab=bs/2;if(is==='Yerden Isıtma'){p['Isıtma boru veya radyatör']=1.4;p['Kolektör ve vanalar']=1.5;lab*=1.3;}else if(is==='Sadece Altyapı'){a['Isıtma boru veya radyatör']=0.2;lab*=0.6;}}",
  "}else if(key==='daire_tesisat'){const bs=Math.max(1,area),is=ex['Isıtma sistemi']||'Kombi & Radyatör';a['Temiz/pis su borulaması']=1/2;a['Kolektör ve vanalar']=1/2;a['Isıtma boru veya radyatör']=1/2;a['Tesisat kırım ve işçiliği']=1/bs;lab=1/2;if(is==='Yerden Isıtma'){p['Isıtma boru veya radyatör']=1.4;p['Kolektör ve vanalar']=1.5;lab*=1.3;}else if(is==='Sadece Altyapı'){a['Isıtma boru veya radyatör']=0.2;lab*=0.6;}}"
);

fs.writeFileSync('app.js', appContent, 'utf8');

console.log("Done");
