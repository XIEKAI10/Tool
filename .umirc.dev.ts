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
  define: {
    "process.env.UMI_ENV": process.env.UMI_ENV,
  },
  hash: true,
  publicPath: "https://develop/",
  theme: {
    // 'primary-color': '#00BCFF',
    // '@body-background':rgba(0,0,0,0.1),
    // '@component-background':rgba(0,0,0,0.1),
    // '@opacity': 0
    // '@text-color': 'white',
    // '@text-color-secondary':'white',
    // '@heading-color':"#2ed2f2",
    // '@font-size-base': '16px',
    // '@border-color-base': '#2BEAF5'
  },
  targets: {
    ie: 11,
  }
}

export default config;
