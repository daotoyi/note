themeConfig:{
  nav: [{text: "主页", link: "/"      },
        { text: '网站', link: 'http://doc.itclan.cn' }, // 后面直接是链接
        { text: "前端",                                 // 二级菜单配置
        items: [
            { text: "html", link:"/fontend/html/"},
            { text: "css", link:"/font/css/"},
          ]
        },
        {
          text: "工具",
          items: [
            {
               text: "思维导图",
               items: [
                { text: "zhiMap", link: "https://zhimap.com/home" },
                { text: "processOn", link: "https://www.processon.com/" },
                { text: "gitmind", link: "https://gitmind.cn/" }
               ]
            },

            {
              text: "文档管理",
              items: [
                { text: "语雀", link: "https://www.yuque.com/dashboard" },
                { text: "腾讯文档", link: "https://docs.qq.com/desktop" }
              ]
            },

            {
              text: "实用工具",
              items: [
                { text: "声享-做ppt", link: "https://ppt.baomitu.com/" },
                { text: "马克鳗-量标注", link: "http://www.getmarkman.com/l" }
              ]
            }
          ]
        },
    ],
}