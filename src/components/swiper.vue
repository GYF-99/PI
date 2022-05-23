<template>
   <div class="swiper">
     <el-carousel :interval="5000" type="card" height="350px">
       <el-carousel-item v-for="(item,index) in swiperList" :key="index" >
          <img :src="item.picImg"/>     
       </el-carousel-item>
     </el-carousel>
   </div>
</template>
<script>
 import {swiperList} from "../assets/data/swiperList"
  export default {
    name:'swiper',
    components: {
       
    },
    data(){
      return{
        swiperList:[]
      }
    },
    created(){
      this.swiperList = swiperList;
    }
   
  };
</script>
<style scoped>

</style>