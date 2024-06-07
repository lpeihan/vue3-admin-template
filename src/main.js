import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/App.vue';
import { install } from '@/components';
import directives from '@/directives';
import i18n from '@/locales';
import router from '@/router';

import '../mocks/index';

window.env = process.env;

const pinia = createPinia();
const app = createApp(App);

app.use(i18n).use(pinia).use(router).use(directives).use(install).mount('#app');
