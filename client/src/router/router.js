// eslint-disable-next-line
import Vue from "vue";
import Router from "vue-router";
import Home from "../components/home/Home.vue";
import Admin from "../views/Admin.vue";
// import UserRoutes from "./userRoutes";

Vue.use(Router);

const baseRoute = [
  { path: "/", name: "home", component: Home },
  { path: "/admin", name: "admin", component: Admin },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

// const routes = baseRoute.concat(UserRoutes);
const routes = baseRoute;

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    /* eslint-disable */
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  /* eslint-disable */
  NProgress.done();
});

export default router;
