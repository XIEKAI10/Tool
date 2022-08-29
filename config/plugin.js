import path from 'path';
import AntdThemeWebpackplugin from 'antd-theme-webpack-plugin';
// const AntdThemeWebpackplugin = require('antd-theme-webpack-plugin');

export default (config) => {
  config.plugin('ant-design-theme').use(AntdThemeWebpackplugin, [
    {
      antDir: path.join(__dirname, '../node_modules/antd'), // antd包位置
      stylesDir: path.join(__dirname, '../src'), // 需要检索的所有 less 文件的根目录
      varFile: path.join(__dirname, '../src/variable.less'), // 自己设置默认的主题色
      indexFileName: '../src/pages/document.ejs',
      outputFilePath: path.join(__dirname, '../color.less'), // 输出到什么地方
      lessUrl: 'https://cdn.bootcdn.net/ajax/libs/less.js/3.7.0/less.min.js',
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
  ]);
};
