import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import HomePage from '../views/main/HomePage.vue'
import LayOut from '../views/LayOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:LayOut,
    children:[
      {
        path: '',
        name: 'HomePage',
        component:HomePage,
        //Vue路由守卫
        meta: {
          isLogin: true
        }
      },
      {
        path: 'IndResume',
        name: 'IndResume',
        component: () =>import("../views/main/IndResume.vue"),
        meta: {
          isLogin: true
        }
      },
      {
        path: 'PerSkill',
        name: 'PerSkill',
        component: () =>import("../views/main/PerSkill.vue"),
        meta: {
          isLogin: true
        }
      },{
        path: 'RelExperience',
        name: 'RelExperience',
        component: () =>import("../views/main/RelExperience.vue"),
        meta: {
          isLogin: true
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
