<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表展示</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true">添加数据</el-button>
      </div>
<!--      <el-collapse v-model="activeNames" accordion>-->
        <el-collapse  accordion>
        <el-collapse-item v-for="item in items" :key="item.id" :title="item.title" :name="item.id">
          <div v-for="(c,i) in item.content" :key="i">{{ c }}</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!--弹框信息-->
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
<!--      <span>确定要添加数据吗？</span>-->
      <div>
        <el-input placeholder="请输入标题" v-model="input1" maxlength="10" show-word-limit clearable>
        <template slot="prepend">标题</template>
        </el-input><br>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input2" maxlength="30" show-word-limit clearable>
          <template slot="prepend">内容</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // activeNames: '',
        input1:'',
        input2:'',
        dialogVisible:false,  //会话框的初始化
        items: [
          {
            id: 1,
            title: '一致性 Consistency',
            content: [
              '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
              '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
            ]
          },
          {
            id: 2,
            title: '反馈 Feedback',
            content: [
              '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；',
              '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
            ]
          },
          {
            id: 3,
            title: '效率 Efficiency',
            content: [
              '简化流程：设计简洁直观的操作流程；',
              '清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；',
              '帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。',
            ]
          }
        ]
      }
    },
    mounted() {
      // this.activeNames = this.items[0].id
    },
    methods: {
      submit(){
        this.dialogVisible = false;
        // this.input1=input1;
        let _id = Math.max(...this.items.map(item=>item.id))+1;
        let input1 = this.input1;
        // console.log(input1);
        let input2 = this.input2;
        this.items.push({
          id: _id,
          title:input1,
          content:input2,
        })
      }
    }
  }
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>