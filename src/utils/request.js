import axios from 'axios';

import { getToken, clearToken } from '@/utils/auth';
import { HttpCode } from '@/utils/constants';

const request = axios.create({
  timeout: 20000,
  baseURL: process.env.API_URL,

  toast: true,
});

request.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers['token'] = getToken();
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  },
);

request.interceptors.response.use(
  (res) => {
    const { data } = res;

    if (data.code === HttpCode.Success) {
      return data;
    }
    if (data.code === HttpCode.Unauthorized) {
      clearToken();

      setTimeout(() => {
        // location.reload();
      }, 1000);
      return;
    }

    return Promise.reject(data);
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default request;
