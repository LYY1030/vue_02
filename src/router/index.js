import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '图书管理',
        component: Index,
        redirect: "/pageOne",
        children: [{
            path: '/pageOne',
            name: '查询图书',
            component: () => import(/* webpackChunkName: "about" */ '../views/PageOne.vue')
        }, {
            path: '/pageTwo',
            name: '添加图书',
            component: () => import(/* webpackChunkName: "about" */ '../views/PageTwo.vue')
        }, {
            path: '/pageThree',
            name: '页面三',
            component: () => import(/* webpackChunkName: "about" */ '../views/PageThree.vue')
        }, {
            path: '/pageFour',
            name: '页面四',
            component: () => import(/* webpackChunkName: "about" */ '../views/PageFour.vue')
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
