import route_public from '@/router/entrance/public'

export default [
    {
        path:`/`,
        name:'main',
        redirect:'/home',
        meta:{
            title:'main'
        },
    },
    ...route_public,
]