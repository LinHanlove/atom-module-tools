import { defineConfig } from 'vitepress'
import nav from '../src/layout/nav'
import sidebar from '../src/layout/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'atom-tools',
  description: 'atom-tools',
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: '/image/logo_2.png' }]],
  themeConfig: {
    logo: '/image/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/LinHanlove/atom-tools' }],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})
