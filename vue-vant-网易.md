# 项目安装

vuex-vueRouter-sass-vant(插件)

如果是通过vue ui图形命名安装 babel-plugin-import也就不用再手动安装了，因为已经再配置默认按需导入的时候就已经装了babel-plugin-import。连babel.config.js都配好了。

```js
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ],
   
  ]
}

```

# vant组件模块化导入

注意

1. 按需引入vant组件，不用在main.js引入vant样式。

   import 'vant/lib/button/style';  import 'vant/lib/index.css';都不用。

![dxqugU.png](https://s1.ax1x.com/2020/09/01/dxqugU.png)

## vant.js



```js
import Vue from 'vue'
import {
  Button,Cell,CellGroup,Icon ,Image as VanImage , Col, Row ,
  Calendar ,Checkbox, CheckboxGroup ,DatetimePicker ,Field ,Form,NumberKeyboard  ,PasswordInput,Picker, RadioGroup, Radio,Search 
 , Switch,Uploader , Swipe, SwipeItem ,Tag,Grid, GridItem ,NavBar,Pagination ,Tab, Tabs ,Tabbar, TabbarItem ,TreeSelect } from 'vant'

Vue.use(Button)
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row)
Vue.use(Calendar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatetimePicker);
Vue.use(Field);
Vue.use(Form);
Vue.use(NumberKeyboard);
Vue.use(PasswordInput);
Vue.use(Picker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Search);
Vue.use(Switch);
Vue.use(Uploader);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tag);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Pagination);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem)
Vue.use(TreeSelect);
```



## scss样式配置

[![dxjtdH.png](https://s1.ax1x.com/2020/09/01/dxjtdH.png)](https://imgchr.com/i/dxjtdH)

vue.config.js

```
 css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
```

main.scss

```scss
@import "./normalize.scss";
@import './config.scss';
@import "./vant.scss";

```

normalize.scss

```scss

 html, body, div, span, applet, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 a, abbr, acronym, address, big, cite, code,
 del, dfn, em, img, ins, kbd, q, s, samp,
 small, strike, strong, sub, sup, tt, var,
 b, u, i, center,
 dl, dt, dd, ol, ul,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, embed, 
 figure, figcaption, footer, header, hgroup, 
 menu, nav, output, ruby, section, summary,
 time, mark, audio, video {
   margin: 0;
   padding: 0;
   font-size: 100%;
   font: inherit;
   vertical-align: baseline;
 }
 /* HTML5 display-role reset for older browsers */
 article, aside, details, figcaption, figure, 
 footer, header, hgroup, menu, nav, section {
   display: block;
 }
 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */  
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
    font-family: 'Microsoft YaHei';
    font-size: 15px;
  }
 
  main {
    display: block;
  }
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  a {
    background-color: transparent;
    text-decoration: none;
  }
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  img {
    display: block;
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
 
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  details {
    display: block;
  }
  
  ul, li { list-style: none; }
```



config.scss

```scss

$navMenu: 250px;
$navMenuMin: 64px;
$layoutHeader: 75px;

$mainCcolor: #f56c6c; // 主颜色
$consoleAsideBgColor:#344a5f; // 控制台侧边栏颜色

```

vant.scss 重置一些vant内置样式

```scss

```

App.vue

必须按照下面的格式，不然样式会出错。

```vue
<style  lang="scss">
#app {
  
}
</style>
```

