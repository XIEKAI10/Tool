exports.globalRouters = {
  routes: [
    {
      exact: true,
      title: '404',
      path: '/404',
      component: './404.js',
    },
    { path: '/', component: '../router.js' },
    { path: '/login', component: '../pages/login' },
    {
      path: './function',
      routes: [
        {
          title: 'hooks',
          path: '/function/hooks',
          component: './function/hooks'
        }
      ]
    }
  ],
}