# utsman.works — landing page statik (nginx)
FROM nginx:1.27-alpine

RUN printf 'server {\n\
  listen 80;\n\
  server_name _;\n\
  server_tokens off;\n\
  root /usr/share/nginx/html;\n\
  index index.html;\n\
\n\
  gzip on;\n\
  gzip_types text/plain text/css application/javascript application/json image/svg+xml;\n\
  gzip_min_length 512;\n\
\n\
  location = /index.html { add_header Cache-Control "no-cache, must-revalidate"; }\n\
  location ~* \\.(css|js)$ { expires 7d; add_header Cache-Control "public, max-age=604800"; try_files $uri =404; }\n\
  location ~* \\.(svg|png|jpg|jpeg|webp|ico|woff2?)$ { expires 7d; add_header Cache-Control "public, max-age=604800"; try_files $uri =404; }\n\
  location / { try_files $uri $uri/ /index.html; }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY index.html robots.txt sitemap.xml /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
