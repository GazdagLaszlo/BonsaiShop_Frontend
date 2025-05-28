//Ez a fájl inicializálja a Vue alkalmazást.
//Itt regisztráljuk a routert, pinia-t.

import './assets/css/bulma/css/bulma.css';
import './assets/css/style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';

const app = createApp(App);
app.use(router);
app.mount('#app');