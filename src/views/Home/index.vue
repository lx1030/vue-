<template>
  <div id="module">
    <el-container>
      <!--左侧导航-->
      <NavMenu/>
      <el-container>
        <!--右侧主体-->
        <!--头部-->
        <el-header>
          <el-button class="exit" type="primary" style="float:right" @click="goBack()">退出</el-button>
          <Breadcrumb />
        </el-header>
        <!--主体-->
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from './navMenu.vue'
  import Breadcrumb from "./breadcrumb.vue";
  export default {
    data() {
      return {}
    },
    methods: {
      goBack(){
        this.$router.push('/login');
      }
    },
    components: {
      NavMenu,
      Breadcrumb,
    }
  }
</script>