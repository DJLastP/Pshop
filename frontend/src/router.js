import { createWebHistory, createRouter } from "vue-router";
import Order from './components/user/order.vue';
import Item from "./components/admin/Item.vue";
import SetItem from "./components/admin/SetItem.vue";
import Join from "./components/user/Join.vue";
import Login from "./components/user/Login.vue";
//import Vue from '../src/App.vue';

const routes = [
    {
        path: "/item",
        component: Item
    },
    {
        path: "/itemList",
        component: Order
    },
    {
        path: "/setItem",
        component: SetItem
    },
    {
        path: "/join",
        component: Join
    },
    {
        path: "/",
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(() => {
    //const memRole = Vue.$root.role;

    //쿠키정보꺼내기
    //없으면 로그인페이지 보내기
    //쿠키에서 사용자권한확인
    //페이지 이동할때마다 권한정보 실어보내기

});


export default router;