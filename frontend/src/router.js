import { createWebHistory, createRouter } from "vue-router";
import ItemList from './components/user/ItemList.vue';
import Item from "./components/admin/Item.vue";

const routes = [
    {
        path: "/item",
        component: Item
    },
    {

        path: "/itemList",
        component: ItemList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 