import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div className="site-brand" role="img" aria-label="RevvFi docs">
      <img
        src="/favicon.svg"
        alt="RevvFi Logo"
        className="site-logo"
        width={40}
        height={40}
        title="RevvFi"
      />
      <span className="site-title">RevvFi Docs</span>
    </div>
  ),

  project: {
    link: 'https://github.com/RevvFi',
  },

  chat: {
    link: 'https://discord.gg/KJ3ttJq5D3',
  },

  navbar: {
    extraContent: null
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