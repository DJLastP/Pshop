import { createWebHistory, createRouter } from "vue-router";
import Order from './components/user/order.vue';
import Item from "./components/admin/Item.vue";
import SetItem from "./components/admin/SetItem.vue";
import Join from "./components/user/Join.vue";
import UserOrder from "./components/user/UserOrder.vue";
import Login from "./components/user/Login.vue";
import Home from "./components/user/home.vue";
import memberInfo from "./components/admin/memberInfo.vue";
import group from "./components/admin/group.vue";
import axios from "axios";
//import Vue from '../src/App.vue';

const routes = [
    {
        path: "/item",
        component: Item,
        meta: { requiresAuth: true },
    },
    {
        path: "/userOrder",
        component: UserOrder,
        meta: { requiresAuth: true },
    },
    {
        path: "/group",
        component: group,
        meta: { requiresAuth: true },
    },
    {
        path: "/",
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: "/order",
        component: Order,
        meta: { requiresAuth: true },
    },
    {
        path: "/setItem",
        component: SetItem,
        meta: { requiresAuth: true },
    },
    {
        path: "/join",
        component: Join,
        meta: { requiresAuth: false },
    },
    {
        path: "/login",
        component: Login,
        meta: { requiresAuth: false },
    },
    {
        path: "/memInfo",
        component: memberInfo,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!accessToken && !refreshToken) {
            return next('/login');
        }
        // 인증이 필요한 경로에 접근하는 경우
        await axios.post('/api/member/access', {accessToken, })
            .then(() => {
                next();
            })
            .catch(async ()=>{
                await axios.post('/api/member/refresh', {refreshToken, }).then(response => {
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    next();
            })
            .catch(() => {
                next('/login');
            });
        });
    }
    else {
        // 인증이 필요하지 않은 경로
        next();
    }
});


export default router;