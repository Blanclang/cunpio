import Vue from 'vue'
import Router from 'vue-router'
// import store from './vuex/store';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name:'/home',
            component:  (resolve) => {
                require(['./view/home/home'],resolve);
            },
            meta: {title:'存票',footerShow:true,footerIcon:1}
        },
        {
            path: '/home',
            name:'home',
            component:  (resolve) => {
                require(['./view/home/home'],resolve);
            },
            meta: {title:'存票',footerShow:true,footerIcon:1}
        },
        {
            path: '/officialAccounts',
            name:'officialAccounts',
            component:  (resolve) => {
                require(['./view/officialAccounts/officialAccounts'],resolve);
            },
            meta: {title:'票号',footerShow:true,footerIcon:2},
            redirect: './officialAccounts/officialAccountsHome',
            children: [
                {
                    path: 'officialAccountsHome',
                    name:'officialAccountsHome',
                    component: (resolve) => {
                        require(['./view/officialAccounts/officialAccountsHome'],resolve);
                    },
                    meta: {title:'票号首页',footerShow:true,footerIcon:2}
                },
                {
                    path: 'oaSearch',
                    name:'oaSearch',
                    component: (resolve) => {
                        require(['./view/officialAccounts/children/oaSearch'],resolve);
                    },
                    meta: {title:'票号搜索',footerShow:false}
                },
                {
                    path: 'officialDetail',
                    name:'officialDetail',
                    component: (resolve) => {
                        require(['./view/officialAccounts/children/officialDetail'],resolve);
                    },
                    meta: {title:'票号详情',footerShow:false}
                },
                {
                    path: 'officialWindow',
                    name:'officialWindow',
                    component: (resolve) => {
                        require(['./view/officialAccounts/children/officialWindow'],resolve);
                    },
                    meta: {title:'票号',footerShow:false}
                }
            ]
        },
        {
            path: '/message',
            name:'message',
            component:  (resolve) => {
                require(['./view/message/message'],resolve);
            },
            meta: {title:'消息',footerShow:true,footerIcon:3}
        },
        {
            path: '/personal',
            name:'personal',
            component:  (resolve) => {
                require(['./view/personal/personal'],resolve);
            },
            meta: {title:'个人中心',footerShow:true,footerIcon:4},
            // redirect: './personal/personalHome',
            children: [
                // {
                //     path: 'personalHome',
                //     name:'personalHome',
                //     component: (resolve) => {
                //         require(['./view/personal/personalHome'],resolve);
                //     },
                //     meta: '个人中心'
                // },
                {
                    path: 'setting',
                    name:'setting',
                    component: (resolve) => {
                        require(['./view/personal/children/setting'],resolve);
                    },
                    meta: {title:'设置',footerShow:false}
                },
                {
                    path: 'myCoupons',    
                    name:'myCoupons',
                    component: (resolve) => {
                        require(['./view/personal/children/myCoupons'],resolve);
                    },
                    meta: {title:'我的券包',footerShow:false}
                }
            ]
        },
        {
            path:'*',redirect:'/home'
        }
    ]
});

// router.beforeEach( (to, from, next) => {
//     console.log(to);
//     console.log(from);
//     console.log(next);
//     // let store = this.a.app.$store;
//     // if(store){
//     //     if(from.meta.status > to.meta.status) store.commit('SET_ANIMATE_NAME','vux-pop-out');
//     //     else store.commit('SET_ANIMATE_NAME','vux-pop-in');
//     // }
//     // let is_not_first = Tool.dataToLocalStorageOperate.achieve('is_not_first');
//     // if ( !is_not_first && to.path != '/guide' ) next('/guide');
//     // else if( is_not_first && to.path == '/guide' ) next('/');
//     // else next();
// });

router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(to.meta.title);
    // this.$store.dispatch('getRouterInfo',to.meta.title);
    let store = this.a.app.$store;
    console.log(to.meta);
    if(store){
        store.commit('ROUTER_INIO',to.meta);
    }
    next()
})

router.afterEach( (to, from, next) => {
    // console.log(to);
    // console.log(from);
});


export default router


























