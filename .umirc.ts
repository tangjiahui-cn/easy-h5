import { defineConfig } from 'umi';

// https://v3.umijs.org/zh-CN/config
export default defineConfig({
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  devServer: {
    https: true,
    port: 10000,
  },
});
