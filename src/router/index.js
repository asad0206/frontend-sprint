import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login.vue";
//import Dashboard from "../components/Dashboard.vue";
import Homepage from "../views/Homepage.vue";
import Register from "../views/Register.vue";
import Editor from "../components/Editor.vue";
import Home2 from "../views/Home2.vue";
import Login2 from "../views/Login2.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Homepage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    // routing example for reference....
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: Dashboard,
    //   props: {},
    // },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor,
    },
    {
      path: "/home2",
      name: "home2",
      component: Home2,
    },
    {
      path: "/login2",
      name: "login2",
      component: Login2,
    },
  ],
});
