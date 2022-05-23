<template>
  <div class="buy-btn">
    <el-button-group>
      <el-button type="btn" round >加入购物车</el-button>
       <el-button type="btn" round>立即购买</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "buttons",
  methods:{
  
  }
}
</script>

<style scoped>
.buy-btn{
  margin-left: 45px;
}
.el-button--btn{
  background:#130c0e ;
  color: white;
}
.el-button--btn:focus,.el-button--btn:hover{
 background:#130c0e ;
 color: white;
 border-color:white;
}
</style>
