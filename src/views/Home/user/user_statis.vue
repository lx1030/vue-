<template>
  <div>
    <el-progress :text-inside="true" :stroke-width="20" :percentage="num" status="success"></el-progress>

    <el-steps :active="active" finish-status="success">
      <el-step v-for="s in steps" :key="s" :title="s"></el-step>
    </el-steps>

    <el-button v-show="flag" style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        active:0,  //步骤初始化
        flag:true,
        steps:['步骤 1','步骤 2','步骤 3','步骤 4','步骤 5']
      }
    },
    computed:{
      num() {
        return this.active/this.steps.length*100;
      }
    },
    methods:{
      next(){
        if (this.active++ >= this.steps.length){
          this.$confirm('任务完成！').then(res=>{
            this.flag = false;
          }).catch(err=>{})
        }
      }
    }
  }
</script>

<style scoped>

</style>