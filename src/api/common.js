import request from '@/utils/request';

export function getUploadToken() {
  return request({
    url: '/mock/uploadToken',
  });
}
