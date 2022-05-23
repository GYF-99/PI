<template>
  <div class="proimages">
    <el-row>
       <el-col :span="10" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           </el-card>
       </el-col>
       <el-col :span="10" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           </el-card>
       </el-col>
</el-row>
  </div>
</template>

<script>
export default {
   name:'pro-images'
}
</script>

<style>
.proimages{
    background-color: gainsboro;
    height: 1200px;
    width: 800px;
    float: left;
    display: inline-block;
    position: relative;
    margin-right: 50px;
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
</style>