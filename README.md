<div align="center">

<img src="/public/android-chrome-192x192.png" width="88" height="88" alt="RevvFi Logo" />

<h1>RevvFi Docs</h1>

<p>
Official technical documentation for the RevvFi protocol<br/>
Built with Next.js, Nextra & React. Deployed on Vercel.
</p>

<p>
  <a href="https://revvfi.xyz"><img src="https://img.shields.io/badge/Website-revvfi.xyz-000000?style=flat-square&logo=vercel&logoColor=white" /></a>
  <a href="https://docs.revvfi.xyz"><img src="https://img.shields.io/badge/Docs-live-7c3aed?style=flat-square" /></a>
  <a href="https://github.com/RevvFi"><img src="https://img.shields.io/badge/GitHub-repo-181717?style=flat-square&logo=github" /></a>
</p>

</div>

---

## Overview

This repository contains the official technical documentation for **RevvFi** — a liquidity-backed token launch protocol for trustless, LP-governed launches.

The docs cover:

- **Smart Contract Architecture** — Core contract designs and specifications
- **System Flows** — Deployment, deposit, launch, and refund mechanics  
- **Data Structures** — State variables, mappings, and governance
- **Security Boundaries** — Safety assumptions and attack vectors
- **Deployment Patterns** — Network selection and configuration

The site is built with **Nextra (Docs Theme)** on top of Next.js and deployed automatically on Vercel.

---

## Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Framework  | Next.js 16                    |
| Docs Theme | Nextra (`nextra-theme-docs`)  |
| Styling    | Tailwind CSS 4                |
| Runtime    | React 19                      |
| Deployment | Vercel                        |

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm)

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/RevvFi/revvfi-docs.git
cd revvfi-docs

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit: http://localhost:3000
```

### Project Structure

```
revvfi-docs/
├── pages/
│   ├── index.mdx
│   ├── _meta.json
│   ├── architecture/
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   └── [smart-contracts].mdx
│   ├── mechanics/
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   └── [flows].mdx
│   ├── reference/
│   │   ├── _meta.json
│   │   ├── index.mdx
│   │   └── [specs].mdx
│   └── security/
│       ├── _meta.json
│       └── index.mdx
├── public/
├── theme.config.tsx
├── next.config.mjs
└── package.json
```

---

## Build & Deployment

### Local Build

```bash
pnpm build
pnpm start
```
---

## Contributing

Contributions to the documentation are welcome. Please:

- Open a PR against `main`
- Keep formatting consistent with existing docs
- Update `_meta.json` files when adding new pages
- Test locally with `pnpm dev` before submitting

For protocol-level contributions:

- Smart contract improvements → [revvfi-contracts](https://github.com/RevvFi/revvfi-contracts)
- Security issues → Security team (see contacts below)

---

## Community & Contact

<p align="left">
  <a href="https://revvfi.xyz">
    <img src="https://img.shields.io/badge/Website-revvfi.xyz-000000?style=flat-square&logo=vercel&logoColor=white" />
  </a>
  <a href="https://docs.revvfi.xyz">
    <img src="https://img.shields.io/badge/Docs-docs.revvfi.xyz-7c3aed?style=flat-square" />
  </a>
  <a href="https://x.com/revvfi_xyz">
    <img src="https://img.shields.io/badge/X-@revvfi__xyz-000000?style=flat-square&logo=x&logoColor=white" />
  </a>
  <a href="https://discord.gg/KJ3ttJq5D3">
    <img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&logo=discord&logoColor=white" />
  </a>
  <a href="https://github.com/RevvFi">
    <img src="https://img.shields.io/badge/GitHub-RevvFi-181717?style=flat-square&logo=github" />
  </a>
</p>

---

## Licenses

This documentation is released under the **MIT License**.

The RevvFi protocol and smart contracts are licensed separately.

**Third-party libraries:**

- [Next.js](https://nextjs.org) — MIT License
- [React](https://react.dev) — MIT License
- [Nextra](https://nextra.site) — MIT License
- [Tailwind CSS](https://tailwindcss.com) — MIT License
- [Vercel](https://vercel.com) — Apache 2.0 License

---

<div align="center">
  <p><strong>Liquidity-backed token launch protocol for trustless, LP-governed launches.</strong></p>
  <p>© 2026 RevvFi. All rights reserved.</p>
</div>
