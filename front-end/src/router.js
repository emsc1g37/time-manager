import Vue from 'vue';
// import Router from 'vue-router';
import LoginComponent from './views/login.vue';
import Account_information from './views/Account_information.vue';
import Dashboard from './views/Dashboard.vue';
import Team_detail from './views/Team_detail.vue';
import Password from './views/Password.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

let opts = {
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: '/account_information',
            name: 'account_information',
            component: Account_information,
            meta: {
                permissions: [
                    {
                    role: "guest",
                    access: false,
                    redirect: "login"
                    }
                ]
            },
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                permissions: [
                    {
                    role: "guest",
                    access: false,
                    redirect: "login"
                    }
                ]
            },
        },
        {
            path: '/team_detail',
            name: 'team_detail',
            component: Team_detail,
            meta: {
                permissions: [
                    {
                    role: "guest",
                    access: false,
                    redirect: "login"
                    }
                ]
            },
        },
        {
            path: '/password',
            name: 'password',
            component: Password,
            meta: {
                permissions: [
                    {
                    role: "guest",
                    access: false,
                    redirect: "login"
                    }
                ]
            },
        },
        {
            path: '*',
            redirect: {
                name: "login"
            }
        }
    ],
    mode: 'history'
};

const router = new VueRouter(opts);

export default router;