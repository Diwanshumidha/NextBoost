import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NextBoost Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"https://cdn-icons-png.flaticon.com/512/5731/5731863.png",
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Why NextBoost', link: '/guide/why.md' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'FAQ', link: '/guide/faq.md' },
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Templates Next Js ', link: '/guide/template-next.md' },
          { text: 'Custom Next Js', link: '/guide/custom-next.md' },
          { text: 'Custom React Js', link: '/guide/custom-react.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
