# Deploy

Production runs in Docker on a VPS at reg.ru.

| | |
|---|---|
| Server | reg.ru VPS, Ubuntu 26.04, 1 GB RAM + 1 GB swap |
| IP | `79.174.86.30` (A records `@` and `www` in the reg.ru DNS zone) |
| SSH | `ssh -i ~/.ssh/dozor_vps deploy@79.174.86.30` (key only, root login disabled) |
| App dir | `/opt/dozor-site` (`docker-compose.yml`, `Caddyfile`, `.env.production`) |
| Stack | `app` (Next.js standalone, no published ports) + `caddy` (80/443, auto HTTPS) |

Docker is used via `sudo docker` — `deploy` is intentionally not in the `docker` group.

## Release a new version

The image is built on the Mac, never on the VPS: `next build` does not fit in 1 GB RAM.
Bump the tag `N` on every release; the previous tag stays on the server for rollback.

1. Build (Mac, repo root):

   ```bash
   docker build --platform linux/amd64 \
     --build-arg NEXT_PUBLIC_SITE_URL=https://el-dozor.ru \
     --build-arg NEXT_PUBLIC_YM_COUNTER_ID=112564611 \
     -t dozor-site:N .
   ```

2. Ship (Mac). Keep the archive outside the repo:

   ```bash
   docker save dozor-site:N | gzip > ~/Downloads/dozor-site-N.tar.gz
   scp -i ~/.ssh/dozor_vps ~/Downloads/dozor-site-N.tar.gz deploy@79.174.86.30:~
   ```

3. Load and switch (VPS):

   ```bash
   sudo docker load -i ~/dozor-site-N.tar.gz && rm ~/dozor-site-N.tar.gz
   cd /opt/dozor-site
   sed -i 's/dozor-site:[0-9]*/dozor-site:N/' docker-compose.yml
   sudo docker compose up -d app
   sudo docker compose logs --tail 20 app
   ```

4. Check: open https://el-dozor.ru and send a test lead.

5. Clean up old images, keeping the previous one for rollback:

   ```bash
   sudo docker images dozor-site
   sudo docker rmi dozor-site:<older-than-previous>
   ```

## Rollback

```bash
cd /opt/dozor-site
sed -i 's/dozor-site:[0-9]*/dozor-site:<previous>/' docker-compose.yml
sudo docker compose up -d app
```

## Config changes

- `deploy/docker-compose.yml` or `deploy/Caddyfile` changed → copy to `/opt/dozor-site/` with `scp`, then `sudo docker compose up -d`.
  Keep the image tag on the server in sync before copying the compose file.
- `.env.production` changed → `sudo docker compose up -d app`.
  `restart` does not re-read `env_file`; only re-creating the container does.

## Environment

- `NEXT_PUBLIC_*` are inlined at build time → pass as `--build-arg` (step 1).
- Secrets (`SMTP_*`, `LEAD_*`) live only in `/opt/dozor-site/.env.production` (chmod 600), never in the image.
  See `.env.example` for the full list.

## Gotchas

- Docker-published ports bypass `ufw`. Only Caddy publishes ports; `app` must stay unpublished.
- The `caddy_data` volume holds the TLS certificates. Don't delete it: Let's Encrypt rate-limits re-issuing.
- Lead form errors are logged: `sudo docker compose logs app | grep "Lead delivery failed"`.
  SMTP `535` usually means an unpaid Yandex 360 org or a revoked app password.
- Multi-line pastes into the terminal can get mangled; `scp` files instead of pasting heredocs.
