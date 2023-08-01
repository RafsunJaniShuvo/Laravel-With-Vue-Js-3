import {createWebHistory,createRouter} from "vue-router";
import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import dashboard from "@/pages/dashboard.vue";
import basicHooks from './pages/basic/hooks.vue'
import methods from './pages/basic/methods.vue'

const routes = [
    {
        path :'/',
        name: 'home',
        component :home
    },
    {
        path :'/login',
        name: 'login',
        component :login,
        meta:{
            requreAuth:false,
        }
    },
    {
        path :'/register',
        name: 'register',
        component :register,
        meta:{
            requreAuth:false,
        }
    },
    {
        path :'/dashboard',
        name: 'dashboard',
        component :dashboard,
        meta:{
            requreAuth:false,
        }
    },
    {
        path:'/hooks',
        component: basicHooks,
    },
    //more basic
    {
     path: '/methods',
     component:methods,
    }

]

const  router = createRouter({
    history:createWebHistory(),
    routes,
})

router.beforeEach((to,from)=>{
    if(to.meta.requireAuth && !localStorage.getItem('token')){
        return {name:'login'}
    }
    if(to.meta.requireAuth == false && localStorage.getItem('token')){
        return {name:'dashboard'}
    }
})
export default router;

