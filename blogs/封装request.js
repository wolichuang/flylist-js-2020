import axios from 'axios';
function getEnv() {
  return 'dev';
}
/**
 * 处理异常
 */
function handleError() {
  if (getEnv() === 'dev') {
    console.log(error, msg);
  } else {
    /*
    Store.dispatch('logs/push', {
      message: msg,
      type: 'danger'
		});
		*/
  }
}
/**
 * @components
 * @param {object} settings
 */
function createHttpServer(/*@type {object}*/ settings) {
  const service = axios.create(settings);
  service.interceptors.request.use(
    (config) => {
      // TODO: 添加token
      const token = localStorage.getItem('access_token');
      config.headers.token = token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      console.log(response);
      const { code, message, data } = response.data;
      // 自定义提示
      if (code >= 30000) {
        console.log('>>> 自定义错误信息，全局提示处理', message);
        return data;
      }
      // 正常的code
      if (code >= 200 && code < 300) {
        return data;
      }

      // 错误的code, 自己处理
      if (code >= 300 && code < 600) {
        return Promise.reject(response.data);
      }
    },
    (error) => {
      const { status = 404 } = error.response;
      if (Object.prototype.hasOwnProperty.call(codeMessage, status)) {
        handleError(error, codeMessage[status]);
      }
      throw error;
    }
  );
  return service;
}
const http = createHttpServer({
  withCredentials: false,
  timeout: 5000,
  baseURL: '/'
});

// babel-node 封装request.js
console.log(http);
// http({
//   baseURL: '/',
//   timeout: 5000,
//   withCredentials: false
// });
