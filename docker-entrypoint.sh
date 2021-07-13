#!/bin/sh
git clone https://hchou0906:sS_pXhfzt99xVM8ePv_2@gitlab.pdis.dev/web-application/ray2021.git /srv/www
cd /srv/www
npm install
npx hexo generate
rm -rf /usr/share/nginx/html
ln -s /srv/www/public /usr/share/nginx/html
nginx -g 'daemon off;'