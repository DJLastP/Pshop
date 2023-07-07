import { createWebHistory, createRouter } from "vue-router";
import Order from './components/user/order.vue';
import Item from "./components/admin/Item.vue";
import SetItem from "./components/admin/SetItem.vue";
import Join from "./components/user/Join.vue";
import Login from "./components/user/Login.vue";
import Vue from '../src/App.vue';



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
    console.log(Vue.data().memRole);
    //const memRole = Vue.$root.role;
});


export default router;