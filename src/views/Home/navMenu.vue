<template>
  <el-aside width="200px">
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo" router>
      <NavItem v-for="v in items" :key="v.url" :item="v" :basePath="v.url"/>
    </el-menu>
  </el-aside>
</template>

<script>
  import NavItem from "@/views/Home/NavItem";
  export default {
    data() {
      return {
        items:[            {name:'首页',url:'/index'},
            {name:'数据管理',url:'/stats'},
            {name:'信息管理',
             url:'/wms',
             child:[
                  {name:'列表管理',url:'/wms/list'}
             ]},
            { name:'用户管理',
              url:'/user',
              child:[
                {name:'用户统计',url:'/user/statis'},
                {name:'角色统计',url:'/role/statis'}
              ]
            }
        ]
      }
    },
    components:{NavItem},
    methods: {}
  }
</script>
<!--      &lt;!&ndash;无子集&ndash;&gt;-->
<!--      <el-menu-item index="/index">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">首页</span>-->
<!--      </el-menu-item>-->
<!--      &lt;!&ndash;无子集&ndash;&gt;-->
<!--      <el-menu-item index="/stats">-->
<!--        <i class="el-icon-menu"></i>-->
<!--        <span slot="title">数据管理</span>-->
<!--      </el-menu-item>-->
<!--      &lt;!&ndash;有子集&ndash;&gt;-->
<!--      <el-submenu index="/wms">-->
<!--        <template slot="title"><i class="el-icon-menu"></i>信息管理</template>-->
<!--        <el-menu-item index="/wms/list">列表管理</el-menu-item>-->
<!--      </el-submenu>-->
<!--      &lt;!&ndash;有子集&ndash;&gt;-->
<!--      <el-submenu index="/user">-->
<!--        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>-->
<!--        <el-menu-item index="/user/statis">用户统计</el-menu-item>-->
<!--        <el-menu-item index="/role/statis">角色统计</el-menu-item>-->
<!--      </el-submenu>-->
