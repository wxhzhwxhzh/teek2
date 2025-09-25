import { defineConfig } from "vitepress";

import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  
  author: { name: "g1879", link: "https://github.com/g1879" },
  footerInfo: {
    theme: {
      name: `Theme By Teek`,
    },
    copyright: {
      createYear: 2025,
      suffix: "Teek",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});

// 搜索框配置
const search_config = {
  provider: 'local',
  options: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换',
        },
      },
    },
  },
};



// https://vitepress.dev/reference/site-config
// 主体配置
export default defineConfig({
  title: "DrissionPage文档镜像站",
  description: "DrissionPage文档镜像",
  // 改成你自己的仓库名
  base: '/teek2/',
  outDir: './docs',
  extends: teekConfig,
  themeConfig: {        
    search: search_config,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏠️Home", link: "/" },
      { text: "📘文档", link: "/dp/prepare/intro" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
