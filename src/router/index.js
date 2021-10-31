import Vue from 'vue'
//导入路由插件
import Router from 'vue-router'
//导入上面定义的组件
import Login from '../views/Login/index.vue'
import Home from '../views/Home/index.vue'
import Stats from '../views/Home/stats/stats_index.vue'
import Wms from '../views/Home/wms/wms_index.vue'
import Index from '../views/Home/index/index.vue'
import WmsList from '../views/Home/wms/list.vue'
import User_index from '../views/Home/user/user_index.vue'
import User_statis from '../views/Home/user/user_statis.vue'
import Role_statis from '../views/Home/user/role_statis.vue'
//安装路由
Vue.use(Router);
//配置路由
export default new Router({
  mode: 'history',
  routes: [
    {
      //路由路径
      path: '/',
      redirect: '/login'
    },
    {
      //路由路径
      path: '/login',  //登录页
      //路由名称
      name: 'login',
      //跳转到组件
      component: Login,
    },
    {
      //路由路径
      path: '/home',  //布局页
      //路由名称
      name: 'home',
      meta:{title:'首页'},
      redirect: '/index',
      //跳转到组件
      component: Home,
      children:[
        {
          //路由路径
          path: '/index',  //首页
          //路由名称
          name: 'index',
          meta:{title:'首页'},
          //跳转到组件
          component: Index,
        },
        {
          //路由路径
          path: '/stats',  //数据管理
          //路由名称
          name: 'stats',
          meta:{title:'数据管理'},
          //跳转到组件
          component: Stats,
        },
        {
          //路由路径
          path: '/wms',  //信息管理
          //路由名称
          name: 'wms',
          meta:{title:'信息管理'},
          //跳转到组件
          component: Wms,
          children:[
            {
              //路由路径
              path: '/wms/list',  //信息列表
              //路由名称
              name: 'wmsList',
              meta:{title:'信息列表'},
              //跳转到组件
              component: WmsList,
            },
          ]
        },
        {
          //路由路径
          path: '/user',  //用户管理
          //路由名称
          name: 'user',
          meta:{title:'用户管理'},
          //跳转到组件
          component: User_index,
          children:[
            {
              //路由路径
              path: '/user/statis',  //用户统计
              //路由名称
              name: 'user_statis',
              meta:{title:'用户统计'},
              //跳转到组件
              component: User_statis,
            },
            {
              //路由路径
              path: '/role/statis',  //角色统计
              //路由名称
              name: 'role_statis',
              meta:{title:'角色统计'},
              //跳转到组件
              component: Role_statis,
            },
          ]
        },
      ]
    },
  ]
});

