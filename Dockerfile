# utsman.works — landing page statik (nginx) + blog (volume /blog)
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY index.html robots.txt sitemap.xml /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY assets /usr/share/nginx/html/assets

EXPOSE 80
