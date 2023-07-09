import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from "axios";
import moment from 'moment'
import store from './store'



const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$moment = moment;
app.use(store);
app.use(router);
app.mount('#app');

//createApp(App).use({ router, axios }).mount('#app')
