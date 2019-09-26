import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import router from './router';

import VueRouterUserRoles from "vue-router-user-roles";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

Vue.use(BootstrapVue);
Vue.use(VueSidebarMenu);

Vue.use(VueRouterUserRoles, { router });

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

let authenticate = Promise.resolve({ role: "guest" });



authenticate.then(user => {
  Vue.prototype.$user.set(user);
  new Vue({
    render: h => h(App),
    router
  }).$mount("#app");
});
