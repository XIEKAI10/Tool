import antdThemeWebpackPlugin from 'antd-theme-webpack-plugin';
import path from 'path';

export default (config) => {
  config.plugin('ant-design-theme').use(antdThemeWebpackPlugin, [
    {
      antDir: path.join(__dirname, '../node_modules/antd'), // antd包位置
      stylesDir: path.join(__dirname, '../src'), // 指定皮肤文件夹
      varFile: path.join(__dirname, '../src/variable.less'), // 自己设置默认的主题色
      indexFileName: '../src/pages/document.ejs',
      mainLessFile: path.join(__dirname, '../src/index.less'),
      outputFilePath: path.join(__dirname, '../color.less'), // 输出到什么地方
      javascriptEnabled: true,
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
      generateOnce: false,
    },
  ]);
};
