<template>
  <div>
    <!--走马灯-->
    <el-carousel indicator-position="outside" :interval="4000" type="card">
      <el-carousel-item v-for="item in imgLists" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <!--卡片-->
    <el-row :gutter="20">
      <el-col :span="8" v-for="o in cardLists" :key="o.img">
        <el-card :body-style="{ padding: '0px' }">
          <img :src='o.img' class="image">
          <div style="padding: 14px;">
            <span>{{ o.title }}</span>
            <div class="bottom clearfix">
<!--              <time class="time">{{ currentDate }}</time>-->
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import z1 from '@/assets/img/z1.png'
  // import z2 from '@/assets/img/z2.png'
  // import z3 from '@/assets/img/z3.png'
  export default {
    data() {
      return {
        // imgLists:[z1,z2,z3]
        imgLists: [
          require('@/assets/img/z1.jpg'),
          require('@/assets/img/z2.jpg'),
          require('@/assets/img/z3.jpg'),
        ],
        cardLists:[
          {title:'1',img:require('@/assets/img/1.jpg')},
          {title:'2',img:require('@/assets/img/2.jpg')},
          {title:'3',img:require('@/assets/img/3.jpg')},
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 16px;
    opacity: 0.5;
    line-height: 200px;
    margin: 0;}
  .image {
    width:100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>