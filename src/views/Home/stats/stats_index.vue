<template>
  <el-table
          :data="tableData"
          stripe
          style="width: 100%">
    <el-table-column
            sortable
            prop="date"
            label="日期"
            width="180"
            :filters = 'filterDate'
            :filter-method="filterHandler">
    </el-table-column>
    <el-table-column
            prop="name"
            label="姓名"
            width="180">
    </el-table-column>
    <el-table-column
            prop="address"
            label="地址">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">修改</el-button>
        <el-button size="mini" type="danger" @click="handleEdit(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {Getdata} from '@/api/stats_api'
  export default {
    data(){
      return{
        tableData: [],
        filterDate:[],   //筛选的动态数据
      }
    },
    methods:{
      getTable(){
        Getdata("6666").then(res=>{
          console.log(res)
            let {msg,error_code,data} = res.data;
            if (error_code == 0){
              this.tableData = data;
              this.filterDate = this.tableData.map(item=>({text:item.date,value:item.date}));
            }
        }).catch(err=>{
          console.log(err)
        })
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(index,row){
      }
    },
    mounted() {
      this.getTable()
    }
  }
</script>