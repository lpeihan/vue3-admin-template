import request from '@/utils/request';

export function getUserInfo() {
  return request({
    url: '/api/user/info/mine',
    loading: true,
  });
}

export function getShareRecords(params) {
  return request({
    url: '/api/user/share/list',
    params,
  });
}

export function sendCode(data) {
  return request({
    url: '/api/user/code',
    method: 'post',
    data,
    loading: true,
  });
}

export const login = (data) => {
  return request({
    url: '/api/user/info/login',
    method: 'POST',
    data,
    loading: true,
  });
};
