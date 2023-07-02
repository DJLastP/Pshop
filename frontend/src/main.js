import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(router);
app.mount('#app');

//createApp(App).use({ router, axios }).mount('#app')
