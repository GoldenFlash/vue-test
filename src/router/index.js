import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/main.vue'
import life from '@/components/lifehock.vue'
import router from '@/components/router.vue'
import routerc from '@/components/routesComponent.vue'
import foo from '@/components/routes/foo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        a:router
      },
    },
    {
      path: '/a',
      alias:'/c', //路由别名
      name: 'a',
      component: a,
    },
    // {
    //   path: '/b',
    //   name: 'b',
    //   redirect:'/a' //路由重定向
    // },
    {
      path:'/life',
      name:'life',
      component:life,
    },
    {
      path:'/router',
      name:'router',
      component:router,
    },
     {
      path:'/routerc',
      name:'routerc',
      component:routerc,
      // component:{
      //   default:routerc,
      //   // a:foo
      // },
      // props:{name:'true'}
      props:true,
      // children:[ //子路由在父级模块内的router-view中显示
      //   {
      //     path:'foo',
      //     component:foo,

      //   }
      // ]
    },
     {
      path:'/foo',
      name:'foo',
      component:foo,
    },
    // {
    //   path:'/routerc/123',
    //   name:'routerc',
    //   component:routerc,
      
    // },
  ]
})
