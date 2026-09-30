import urllib.request, re, os, ssl

url = 'https://prokontinsaat.com/referanslar/'
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    
    img_urls = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
    
    out_dir = 'assets/referanslar'
    os.makedirs(out_dir, exist_ok=True)
    
    downloaded = set()
    for img_url in img_urls:
        if not img_url.startswith('http'):
            if img_url.startswith('/'):
                img_url = 'https://prokontinsaat.com' + img_url
            else:
                img_url = 'https://prokontinsaat.com/' + img_url
        
        filename = img_url.split('/')[-1].split('?')[0]
        if not filename:
            filename = 'img_' + str(len(downloaded)) + '.jpg'
            
        filepath = os.path.join(out_dir, filename)
        
        if img_url not in downloaded:
            print('Downloading:', img_url)
            try:
                # Add headers for image download too
                req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req_img, context=ctx) as response, open(filepath, 'wb') as out_file:
                    out_file.write(response.read())
                downloaded.add(img_url)
            except Exception as e:
                print('Failed to download', img_url, e)
                
    print(f'Successfully downloaded {len(downloaded)} images.')
except Exception as e:
    print('Error:', e)
