import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',

  title: "奇迹之旅维基",

  description: "寻找你需要的一切",

  cleanUrls: true,

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /Fusion-Pixel-12px-Monospaced-zh_hans-Regular\.\w+\.woff2/)
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: '基础指南',
        items: [
          { text: '如何安装', link: '/posts/guide/install' },
          { text: '如何更新', link: '/posts/guide/update' },
          { text: '可选优化', link: '/posts/guide/optimize' },
          { text: '常见问题', link: '/posts/guide/issue' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/WaxingMoonStudio/Miracles-Journey-Home' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',

    sidebarMenuLabel: '菜单',

    darkModeSwitchLabel: '主题',

    lightModeSwitchTitle: '切换到浅色模式',

    darkModeSwitchTitle: '切换到深色模式'
  }
})
