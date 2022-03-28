import { defineConfig } from 'umi';

const FAVICON_URL = 'https://fx-go-upload.oss-cn-shanghai.aliyuncs.com/favicon.ico';

export default defineConfig({
  define: {
    API_PREFIX: ' https://sleeve.api.vowui.com/api',
  },
  favicon: FAVICON_URL,
  title: 'sleeve-cos',
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
        {
          path: `/spu/:spuId`,
          component: '@/pages/spu',
        },
      ],
    },
  ],
  fastRefresh: {},
});
