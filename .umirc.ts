import { IConfig } from 'umi-types';
const myRouter = require('./config/routerConfig').globalRouters.routes;
// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: myRouter,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'Tool',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  hash: true
}

export default config;
