import views_public from '@/views/public';

const BENCHMARKROUTER = '';

export default [
    {
        path:`${BENCHMARKROUTER}/home`,
        name:'_home',
        meta:{
            title:'首页'
        },
        component: views_public.Home
    },
    {
        path:`${BENCHMARKROUTER}/login`,
        name:'login',
        meta:{
            title:'登录'
        },
        component: views_public.Login
    },
    {
        path:`${BENCHMARKROUTER}/error_401`,
        name:'error_401',
        meta:{
            title:'401错误'
        },
        component: views_public.Error_401
    },
    {
        path:`${BENCHMARKROUTER}/error_404`,
        name:'error_404',
        meta:{
            title:'404错误'
        },
        component: views_public.Error_404
    },
    {
        path:`${BENCHMARKROUTER}/error_500`,
        name:'error_500',
        meta:{
            title:'500错误'
        },
        component: views_public.Error_500
    },
]