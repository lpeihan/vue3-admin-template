import { defineStore } from 'pinia';

import { getUserInfo } from '@/api/user';
import { clearToken } from '@/utils/auth';

export const useStore = defineStore('store', {
  state: () => {
    return {
      userInfo: {},
    };
  },
  actions: {
    async getUserInfo() {
      const res = await getUserInfo();

      this.userInfo = res.data;
    },
    logout() {
      clearToken();
    },
  },
});
