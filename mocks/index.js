const Mock = require('mockjs');

const CODE_SUCCESS = 200;

Mock.mock('/mock/user/list', {
  code: CODE_SUCCESS,
  'data|10': [
    {
      id: '@id',
      name: '@word',
      description: '@sentence',
      created_at: '@time(yyyy-MM-dd HH:mm:ss)',
      updated_at: '@time(yyyy-MM-dd HH:mm:ss)',
      avatar: '@image(100, #FF6600)',
    },
  ],
  totalPage: 100,
});

Mock.mock('/mock/user/info', {
  code: CODE_SUCCESS,
  data: {
    id: '@id',
    name: '@word',
    description: '@sentence',
    created_at: '@time(yyyy-MM-dd HH:mm:ss)',
    updated_at: '@time(yyyy-MM-dd HH:mm:ss)',
    avatar: '@image(100, #FF6600)',
  },
});
