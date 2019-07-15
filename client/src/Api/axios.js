import Vue from "vue";
import axios from "axios";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

const token = VueCookies.get("user") ? VueCookies.get("user").token : "";

const instance = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  // eslint-disable-next-line
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  // eslint-disable-next-line
  NProgress.done();
  return response;
});

export default instance;
