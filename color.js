
import path from 'path';
const { generateTheme } = require("antd-theme-generator");

const options = {
  antDir: path.join(__dirname, './node_modules/antd'), // antd包位置
  stylesDir: path.join(__dirname, './src'), // 需要检索的所有 less 文件的根目录
  varFile: path.join(__dirname, './src/variable.less'), // 自己设置默认的主题色
  indexFileName: './src/pages/document.ejs',
  outputFilePath: path.join(__dirname, './color.less'), // 输出到什么地方
  // lessUrl: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js',
  themeVariables: [
    // 这里写要改变的主题变量
    '@primary-color',
    '@secondary-color',
    '@text-color',
    '@text-color-secondary',
    '@heading-color',
    '@layout-body-background',
    '@btn-primary-bg',
    '@layout-header-background',
    '@btn-border-radius-base',
  ],
},

generateTheme(options)
  .then((less) => {
    console.log("Theme generated successfully");
  })
  .catch((error) => {
    console.log("Error", error);
  });


