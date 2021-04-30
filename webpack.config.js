module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                strictMath: false,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
};
