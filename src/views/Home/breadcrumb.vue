<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="v in lists" :key="v.path">
        <router-link :to="v.path">{{v.meta.title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists:[]
      }
    },
    watch:{   //24小时监听
      $route(to){
        // this.lists = to.matched;
        this.getBreadcrumb(to.matched);
      }
    },
    methods: {
      getBreadcrumb(matched){
        if (matched.length && matched[1].name=='index'){
          matched = [{path:'/home',name:'home',meta:{title:'首页'}}];
        }
        this.lists = matched;
      }
    },
    mounted() {
      // 获取路由信息
      // this.lists = this.$route.matched;
      this.getBreadcrumb(this.$route.matched);
    }
  }
</script>