const withNextra = require('nextra')({
  theme: './components/Layout/Layout.tsx',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get_started/installation',
        permanent: true,
      }
    ];
  }
})
