<div align="center">

<img src="/public/favicon.svg" width="88" height="88" alt="RevvFi Logo" />

<h1>RevvFi Documentation</h1>

<p>
Official technical documentation for the RevvFi Decentralized Lending Protocol<br/>
Built with Next.js, Nextra & React. Deployed on Vercel.
</p>

<p>
  <a href="https://revvfi.xyz"><img src="https://img.shields.io/badge/Website-revvfi.xyz-000000?style=flat-square&logo=vercel&logoColor=white" /></a>
  <a href="https://docs.revvfi.xyz"><img src="https://img.shields.io/badge/Docs-live-f97316?style=flat-square" /></a>
  <a href="https://github.com/RevvFi"><img src="https://img.shields.io/badge/GitHub-repo-181717?style=flat-square&logo=github" /></a>
</p>

</div>

---

## Overview

This repository contains the official technical documentation for **RevvFi** — a decentralized lending protocol enabling peer-to-peer loan matching with competitive interest rates and reputation-based risk assessment.

The docs cover:

- **Smart Contract Architecture** — Multi-market matching engine and collateral escrow
- **Mechanics** — Competitive offer matching, Dutch auction liquidations, and reputation scoring
- **Data Structures** — Lender position NFTs and global reputation registry
- **Technical Reference** — Smart contract specifications, event logs, and deployment details

The site is built with **Nextra 2 (Docs Theme)** on top of Next.js 14 and styled with the **Orange Dark Premium** brand palette.

---

## Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Framework  | Next.js 14.2.35               |
| Docs Theme | Nextra 2.13.4                 |
| Styling    | Tailwind CSS 4                |
| Runtime    | React 18                      |
| Deployment | Vercel                        |

---

## Getting Started

### Prerequisites
- Node.js 20+ (Required for Tailwind 4 / Oxide)
- npm

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
│   ├── _meta.ts
│   ├── architecture/
│   │   ├── _meta.ts
│   │   ├── index.mdx
│   │   └── contracts.mdx
│   ├── mechanics/
│   │   ├── _meta.ts
│   │   ├── index.mdx
│   │   ├── matching.mdx
│   │   ├── liquidation.mdx
│   │   └── reputation.mdx
│   └── reference/
│       ├── _meta.ts
│       ├── index.mdx
│       ├── deployment.mdx
│       └── events.mdx
├── public/
│   └── favicon.svg (Logo)
├── theme.config.tsx
├── styles/
│   └── globals.css (Orange Dark Premium theme)
└── package.json
```

---

## Build & Deployment

### Local Build

```bash
npm run build
npm run start
```

### CI/CD
Automated deployment is handled via Vercel for production and GitHub Actions for CI validation on every push to `main`.

---

## Contributing

Contributions to the documentation are welcome. Please:

- Open a PR against `main`
- Keep formatting consistent with the **Orange Dark Premium** design
- Update `_meta.ts` files when adding new sections
- Verify the build with `npm run build` locally before submitting

---

## Community & Contact

<p align="left">
  <a href="https://revvfi.xyz">
    <img src="https://img.shields.io/badge/Website-revvfi.xyz-000000?style=flat-square&logo=vercel&logoColor=white" />
  </a>
  <a href="https://docs.revvfi.xyz">
    <img src="https://img.shields.io/badge/Docs-docs.revvfi.xyz-f97316?style=flat-square" />
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

## License

This documentation is released under the **MIT License**.

Copyright (c) 2026 RevvFi.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

<div align="center">
  <p><strong>Decentralized peer-to-peer lending with competitive offer matching.</strong></p>
  <p>© 2026 RevvFi. All rights reserved.</p>
</div>
