# Production deployment

## Stack

- `app`: Prokont Node.js app. `data/` and `uploads/` are mounted from the host so blog content survives image rebuilds.
- `nginx`: the only public entry point. It proxies the main site and analytics subdomain.
- `umami` and `postgres`: private self-hosted traffic dashboard and database. Neither is exposed directly.

## First deployment

1. Install Docker Engine and Docker Compose plugin on Ubuntu 24.04.
2. Clone the repository to `/opt/prokont`.
3. Copy `.env.example` to `.env`; replace every placeholder with a unique value. Do not commit `.env`.
4. Start the containers: `docker compose up -d --build`.
5. Point the primary domain, `www`, and `istatistik.<domain>` to the VPS IP address.
6. Before public launch, provision TLS certificates and update Nginx to serve HTTPS on port 443 and redirect port 80 to HTTPS.

## Traffic dashboard

1. Open `http://istatistik.<domain>` before TLS is configured. Sign in with Umami's initial `admin` / `umami` credentials, then change the password immediately and enable two-factor authentication.
2. Create a website for the main domain and copy its website ID.
3. Set `UMAMI_WEBSITE_ID` in `.env` to that ID, then run `docker compose up -d nginx`. Nginx injects the tracker into every HTML page, so individual pages do not need editing.

## Daily operations

- Status: `docker compose ps`
- Logs: `docker compose logs -f app nginx umami`
- Deploy updates: `git pull && docker compose up -d --build app nginx`
- Backup: keep copies of `data/`, `uploads/`, and `docker compose exec -T postgres pg_dump -U umami umami > umami.sql` outside the VPS.

Never run `docker compose down -v` in production: it removes the Umami database volume.
