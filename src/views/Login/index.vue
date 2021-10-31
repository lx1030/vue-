<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"
             label-width="100px" class="demo-ruleForm login-container">

      <h3 class="title">系统登录</h3>
      <!--用户名-->
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <!--密码-->
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <!--提交按钮-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { GetSms,Register,Login } from '@/api/login'
  export default {
    data() {
      return {
        ruleForm: {  //初始化
          username: '',
          password: '',
        },
        rules: {   //验证
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        let {username,password} = this.ruleForm;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(password)
            Login(
              {username:username,password:password}
            ).then(res=>{
              console.log(res);
              let {error_code,msg} = res.data;
              if (error_code == 0){
                alert('登陆成功');
                this.$router.push('/home'); //页面跳转
              }else {
                alert('msg');
              }
            }).catch(err=>{
              console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style scoped>
  .login-container {
    background: #fff no-repeat;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 500px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>