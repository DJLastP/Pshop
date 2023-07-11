import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";
import moment from 'moment'
import store from './store'

axios.defaults.withCredentials = true;

//Axios 인터셉터설정
axios.interceptors.request.use(config => {
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      config.headers['Authorization'] = `Bearer ${refreshToken}`;
    }
    return config;
  });


const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$moment = moment;
app.use(store);
app.use(router);

app.mixin({
    beforeCreate() {
        this.$store.dispatch('access');
    }
  });


app.mount('#app');

//createApp(App).use({ router, axios }).mount('#app')
