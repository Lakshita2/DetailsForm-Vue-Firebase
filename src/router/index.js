import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path:"/",
    name: "home",
    component:()=>import("../views/HomeView.vue")
  },
  

  {
    path:"/data",
    name: "data",
    component:()=>import("../components/DataCreate.vue")
  },
  {
    path:"/edit/:id",
    name: "edit",
    component:()=>import("../components/DataEdit.vue")
  },

  {
    path:"/list",
    name: "list",
    component:()=>import("../components/DataList.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
