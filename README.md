

用element-ui创建vue项目：
一：创建项目
1.在需要创建项目的文件夹内打开cmd,输入vue ui
2.创建——在此创建项目
——包管理器：npm 初始化git仓库：打开
——手动配置项目   除了默认打开的，Router,Vuex,CSS,Linter:打开
——1.Vue加载语法的选择：2.x  (2：import Vue 3：createVue)，
  2.Sass/SCSS(只能用Sass和SCSS和CSS,不能用less(lang=less)),
  3.ESlint with error prevention only(只有错误时才提醒)
3.注意：项目打包前，网页窗口和cmd窗口都不要关，否则会断联
4.左边第二个，搜索插件element-ui——vue-cli-plugin-element 1.0.1——选择import on demand  zh-CN

二：写项目
1：plugins/element.js删除原本的，按需引入
2：删除assets,components/views里面之前的东西，修改public/index.html,   router/index.js,   app.vue,    main.js
3：views里面放主要展示的子组件内容，components里面放公共组件（如导航，页脚）,在vue.config.js里面加上lintOnSave:false
4：导航组件引入跳转，layout,main.js,index.js修改
5：运行npm run serve


perskill:
个人技能组件主要就是技能模块的布局所有的技能模块均使用span元素实现默认的情况下，这七个技能模块并排在一行显示，且没有任何样式，然后给这七个模块设置共同的样式：字体颜色白色、圆角50%；在给这七个技能模块设置你想要的元素大小（width/height）字体大小、背景颜色。然后我们需要设置两个定位：技能模块的父元素div#skill设置为relative相对定位　将vue技能模块之外的其他六个技能模块进行absolute绝对定位最后一步就是根据自己的喜好设置其他六个技能模块的偏移量（top、bottom、left、right），将不同的技能模块移动到不同的位置。

技能模块的父元素div#skill设置为relative相对定位　将vue技能模块之外的其他六个技能模块进行absolute绝对定位   在没有父级元素定位时，以浏览器的左上角为基准     2>有父级的情况下，父级设置相对定位，子级设置绝对定位 是以父盒子进行定位的
实际项目开发当中，这种“父相子绝”的样式手法经常用到。





用cmd，vue脚手架（Vue-CLI）直接创建vue项目：
一、安装node环境
检查是否安装成功：node -v  如果输出版本号，说明我们安装node环境成功
使用淘宝的镜像输入：npm install -g cnpm –registry=https://registry.npm.taobao.org，即可安装npm镜像
检查是否安装成功：npm -v

二、搭建vue项目环境
1、全局安装vue-cli      npm install --global vue-cli
2、进入你的项目目录，创建一个基于 webpack 模板的新项目
Vue build ==> 打包方式，回车即可；
Install vue-router ==> 是否要安装 vue-router，项目中肯定要使用到 所以Y 回车；
Use ESLint to lint your code ==> 是否需要 js 语法检测 目前我们不需要 所以 n 回车；
Set up unit tests ==> 是否安装 单元测试工具 目前我们不需要 所以 n 回车；
Setup e2e tests with Nightwatch ==> 是否需要 端到端测试工具 目前我们不需要 所以 n 回车；
3、进入项目：cd vue-demo，安装依赖      安装成功后，项目文件夹中会多出一个目录：　node_modules
4、npm run dev，启动项目

三、vue项目目录讲解
1、build：构建脚本目录
2、config：项目配置
3、node_modules：npm 加载的项目依赖模块

4、src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
    1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；
    2）components：组件目录，我们写的组件就放在这个目录里面；
    3）router：前端路由，我们需要配置的路由路径写在index.js里面；
    4）App.vue：根组件；
    5）main.js：入口js文件；

5、static：静态资源目录，如图片、字体等。不会被webpack构建
6、index.html：首页入口文件，可以添加一些 meta 信息等

7、package.json：npm包配置文件，定义了项目的npm脚本，依赖包等信息
8、README.md：项目的说明文档，markdown 格式
9、.xxxx文件：这些是一些配置文件，包括语法配置，git配置等



