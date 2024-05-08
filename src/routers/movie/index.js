
export default {
    path:'/movie',
    component:()=> import('@/views/Movie'),
    children: [  
        {  
            path: 'city', // 确保路径小写，并且没有拼写错误  
            component: () => import('@/components/City') // 添加 / 到 @ 后面，并修正组件名拼写  
        },  
        {  
            path: 'nowPlaying', // 确保路径小写  
            component: () => import('@/components/NowPlaying') // 添加 / 到 @ 后面  
        },  
        {  
            path: 'comingSoon', // 确保路径小写  
            component: () => import('@/components/ComingSoon') // 添加 / 到 @ 后面  
        },  
        {  
            path: 'searchs', // 确保路径小写  
            component: () => import('@/components/Searchs') // 添加 / 到 @ 后面  
        }, 
        {
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]  
} 