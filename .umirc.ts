import { defineConfig } from 'umi';
import webpackplugin from './config/plugin.js';
const myRouter = require('./config/routerConfig').globalRouters.routes;

export default defineConfig({
  base: '/',
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  lessLoader: { javascriptEnabled: true },
  title: '测试项目',
  // theme: {
  //   '@primary-color': 'red',
  //   // '@heading-color': 'rgba(255,255,255,1)',
  //   // 标题色
  //   // '@text-color': 'rgba(255,255,255,1)',
  //   // 主文本色
  // },
  // runtimePublicPath:true,
  // publicPath:'https://abcd/develop/',  //示例链接 此处替换发布环境
  routes: myRouter,
  // chainWebpack: webpackplugin,
  // mfsu: {}, // 加快热更新速度 版本需要3.5.0以上
  cssLoader: {},
  ignoreMomentLocale: true,
  hash: true,
  alias: {
    src: require('path').resolve(__dirname, './src'),
  },
  targets: {
    ie: 11,
  },
});
