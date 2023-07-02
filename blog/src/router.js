import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue';
import Home from './components/home.vue';
import detail from './components/detail.vue';
import Autho from './components/autho.vue';

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/detail/:id",
        component: detail,
        children: [
            {
                path: "autho",
                component: Autho,
            },
        ]
    },
    {
        path: "/detail",
        component: detail,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 