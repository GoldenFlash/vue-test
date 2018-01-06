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
      component: HelloWorld,
    },
    {
      path: '/a',
      name: 'a',
      component: a,
    },
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
      children:[
        {
          path:'foo',
          component:foo,

        }
      ]
    },
  ]
})
