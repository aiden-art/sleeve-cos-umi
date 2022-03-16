import { extend } from 'umi-request';

const request = extend({
  prefix: API_PREFIX,
  timeout: 5000,
});

export default request;
