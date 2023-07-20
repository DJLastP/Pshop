import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router'
import axios from "axios";
import moment from 'moment'
import store from './store'

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$moment = moment;
app.use(store);
app.use(router);

axios.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
});
axios.defaults.withCredentials = true;

app.mount('#app');