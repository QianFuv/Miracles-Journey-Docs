import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "奇迹之旅维基",
  description: "寻找你需要的一切",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '如何安装', link: '/posts/install' },
          { text: '可选优化', link: '/posts/optimize' },
          { text: '常见问题', link: '/posts/common_issue' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '贡献指南', link: '/posts/contribute' },
          { text: '分支目录树', link: '/posts/tree' }
        ]
      }
    ],

    sidebar: [
      {
        text: '基础指南',
        items: [
          { text: '如何安装', link: '/posts/install' },
          { text: '可选优化', link: '/posts/optimize' },
          { text: '常见问题', link: '/posts/common_issue' }
        ]
      },
      {
        text: '进阶指南',
        items: [
          { text: '贡献指南', link: '/posts/contribute' },
          { text: '分支目录树', link: '/posts/tree' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qian-F/Miracles-Journey' }
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
