# mikemorlock.de

Static rebuild of [mikemorlock.de](https://www.mikemorlock.de) — Mike Morlock’s brand activation & campaign consultant portfolio (Berlin). Migrated off Cargo Collective into plain HTML + CSS + assets, following the same approach as [number1plus.com](https://number1plus.com) ([`number1plus/N1-`](https://github.com/number1plus/N1-)).

## Pages

- `/` — home (intro, selected cases, further clients)
- `/about/` — services, experience, selected clients
- Six case studies (N26, Holvi, Volkswagen × Hermes, WERDER LAB, 42 Berlin & Wolfsburg, COUNCIL+)
- `/imprint/` · `/privacy-policy/` (hosting section updated for GitHub Pages)

## Local preview

```bash
python3 -m http.server 43147 --bind 127.0.0.1
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147).

Any static file server works; no build step, Node, or bundler required.

## Deploy (GitHub Pages)

Repo: [`number1plus/mikemorlock.de`](https://github.com/number1plus/mikemorlock.de)

1. Merge to `main` (or set Pages to the release branch).
2. GitHub → **Settings → Pages** → Deploy from branch `main`, folder `/` (root).
3. This tree already includes `.nojekyll` and `CNAME` = `mikemorlock.de`.
4. Until the custom domain DNS is cut over, the Pages preview is typically  
   `https://number1plus.github.io/mikemorlock.de/`.

## Domain / IONOS DNS (high level)

Today the live domain still points at **Cargo** nameservers. To cut over like [number1plus.com](https://number1plus.com):

1. In IONOS, set nameservers back to IONOS UI-DNS (if they currently are `ns1/ns2.cargo.site`).
2. Add DNS records:
   - `www` → `CNAME` → `number1plus.github.io`
   - Apex `@` → GitHub Pages `A` records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
3. Keep existing IONOS mail/MX if you use them.
4. In GitHub Pages, confirm custom domain `mikemorlock.de` and enable HTTPS; wait for the certificate (verify both apex and `www`).

Until DNS is switched, use the `number1plus.github.io/mikemorlock.de` preview URL from Pages.

## Stack

- Static HTML / CSS only
- Media exported from the former Cargo site into `assets/`
