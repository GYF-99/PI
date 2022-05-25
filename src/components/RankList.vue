<template>
   <div class="rank-main">
     <el-row  :gutter="20">
       <el-col :span="5" v-for="(o, index) in 4" :key="o">
         <el-card :body-style="{ padding: '0px' }">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           <div style="padding: 14px;">
             <label>商品名称</label>
             <div class="bottom clearfix">
               <label>商品详情</label>
               <el-button type="text" class="button">立即购买</el-button>
             </div>
           </div>
         </el-card>
       </el-col>
     </el-row>
     <el-row :gutter="20">
       <el-col :span="5" v-for="(o, index) in 4" :key="o">
         <el-card :body-style="{ padding: '0px' }">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           <div style="padding: 14px;">
             <label>商品名称</label>
             <div class="bottom clearfix">
               <label>商品详情</label>
               <el-button type="text" class="button">立即购买</el-button>
             </div>
           </div>
         </el-card>
       </el-col>
     </el-row>
     <el-row :gutter="20">
       <el-col :span="5" v-for="(o, index) in 4" :key="o">
         <el-card :body-style="{ padding: '0px' }">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           <div style="padding: 14px;">
             <label>商品名称</label>
             <div class="bottom clearfix">
               <label>商品详情</label>
               <el-button type="text" class="button">立即购买</el-button>
             </div>
           </div>
         </el-card>
       </el-col>
     </el-row>
   </div>
</template>

<script>
export default {
  name: "rank-list",
  data(){
    return{
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.rank-main{
  background-color: gray;
  height: 1000px;
  width: 1500px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
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
.ranklistone{
  width: 1250px;
}

</style>
