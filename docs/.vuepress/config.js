import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  base: '/',
  lang: 'zh-CN',
  theme: plumeTheme({
    // more...
    blog: false,

    navbar: [
      {
        text: 'AI搞钱',
        link: '/aimoney/'
      },
      {
        text: 'AI提效',
        link: '/aiwork/'
      },
      {
        text: '智能体',
        link: '/agent/'
      }
    ],

    notes: {
      // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
      dir: '/notes/',
      link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/' （默认配置，通常您不需要声明它）
      notes: [
        // 每个笔记都是 `notes` 数组中的一个对象
        {
          // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/typescript` 目录
          dir: 'agent',
          // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/typescript/`
          // 笔记内的所有文章会以 `/typescript/` 作为访问链接前缀。
          link: '/agent/',
          // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档
          // 声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
          sidebar: 'auto'
        },
        {
          dir: 'aimoney',
          link: '/aimoney/',
          sidebar: 'auto'
        },
        {
          dir: 'aiwork',
          link: '/aiwork/',
          sidebar: 'auto'
        }
      ]
    }

  }),
  bundler: viteBundler(),
})