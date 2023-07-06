import { createWebHistory, createRouter } from "vue-router";
import ItemList from './components/user/ItemList.vue';
import Item from "./components/admin/Item.vue";
import SetItem from "./components/admin/SetItem.vue";

const routes = [
    {
        path: "/item",
        component: Item
    },
    {
        path: "/itemList",
        component: ItemList
    },
    {
        path: "/setItem",
        component: SetItem
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;