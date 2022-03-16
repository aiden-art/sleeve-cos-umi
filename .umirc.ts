import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 8888,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/assets/scss/variable.scss', './src/assets/scss/mixin.scss'],
        })
        .end();
    });
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/home',
        },
        {
          path: '/category',
          component: '@/pages/category',
        },
        {
          path: '/cart',
          component: '@/pages/cart',
        },
        {
          path: '/my',
          component: '@/pages/my',
        },
      ],
    },
  ],
  fastRefresh: {},
});
