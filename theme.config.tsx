import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img
        src="/android-chrome-192x192.png"
        alt="RevvFi Logo"
        width={32}
        height={32}
        style={{ borderRadius: '50%' }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
        RevvFi Docs
      </span>
    </div>
  ),

  project: {
    link: 'https://github.com/RevvFi',
  },

  chat: {
    link: 'https://discord.gg/KJ3ttJq5D3',
  },

  docsRepositoryBase: 'https://github.com/RevvFi/revvfi-docs/blob/main',

  footer: {
    content: (
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem' }}>© 2026 RevvFi. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Liquidity-backed token launch protocol for trustless, LP-governed launches.
        </p>
      </div>
    ),
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  toc: {
    float: true,
  },

  search: {
    placeholder: 'Search documentation...',
  },

  darkMode: true,
}

export default config