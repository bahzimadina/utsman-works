# utsman.works

Landing page statik pikeun **Utsman** — asisten AI pikeun pagawéan kantor, pribadi, jeung organisasi.

## Eusi

- `index.html` — halaman utama (semantic + SEO: meta, Open Graph, Twitter card, JSON-LD).
- `css/style.css` — desain (navy + emas, latar krem), responsif, hormat kana `prefers-reduced-motion`.
- `assets/` — poto Utsman (banner héro + 3 kartu kagunaan), favicon, og-image.png, i18n.js.
- `robots.txt`, `sitemap.xml` — SEO.
- `Dockerfile`, `docker-compose.yml` — nginx statik, gabung ka jaringan `webnet`.

## Ngajalankeun di server

```bash
sudo docker compose up -d --build      # port 80 internal, diakses ngaliwatan web-gateway (Host: utsman.works)
```

Routing: tambahkeun `utsman.works utsman-works;` jeung `www.utsman.works utsman-works;`
kana blok `map $http_host $backend` dina `/etc/nginx/conf.d/default.conf` kontainer `web-gateway`, teras reload nginx.

## DNS

Domain `utsman.works` kudu nunjuk ka IP server (43.156.188.92) — rékaman `A` (jeung `www`).
Upami di Cloudflare: `proxied` + mode SSL **Flexible** supados HTTPS di edge.

## SEO

- `<title>` + meta description, canonical, og:image (1200×630).
- JSON-LD: WebSite, Organization, Service (+ status pre-order / coming soon).
- Ilustrasi SVG (gancang), euweuh font eksternal, JS minimal.
