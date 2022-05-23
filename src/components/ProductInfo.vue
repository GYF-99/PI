<template>
  <div class="mainup">
    <el-label class="pro-title">{{this.name}}</el-label>
    <el-divider direction="vertical"></el-divider>
    <el-label class="pro-brand">{{this.brand}}</el-label>
    <el-divider></el-divider>
    <el-label class="pro-price">¥ {{this.price}}</el-label>
    <div class="pro-pattern">
      <el-row>
       <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
         <el-card :body-style="{ padding: '0px' }" shadow="hover" >
         <el-tooltip content="上衣" placement="top">
           <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
           </el-tooltip>
         </el-card>
       </el-col>
     </el-row>
    </div>
    <div class="pro-size" >
       <el-radio-group v-model="proSize" size="medium" fill="#130c0e" >
          <el-radio-button label="XS" ></el-radio-button>
          <el-radio-button label="S"></el-radio-button>
          <el-radio-button label="M"></el-radio-button>
          <el-radio-button label="L"></el-radio-button>
       </el-radio-group>
    </div>
    <buttons></buttons>
     <el-collapse v-model="activeNames">
         <el-collapse-item title="商品详情" name="1">
           <el-descriptions class="margin-top" title="商品名" :column="1" >
            <el-descriptions-item label="款式">休闲衬衫</el-descriptions-item>
            <el-descriptions-item label="尺码">XS</el-descriptions-item>
            <el-descriptions-item label="品牌名称">MLB</el-descriptions-item>
            <el-descriptions-item label="更多描述">非常好看的衬衫</el-descriptions-item>
          </el-descriptions>
        </el-collapse-item>
     <el-collapse-item title="商品评价" name="2">
    <div class="pro-rank-tag">
      <el-tag effect="dark" type="info">全部</el-tag>
      <el-tag effect="dark" type="info">好评</el-tag>
      <el-tag effect="dark" type="info">一般</el-tag>
      <el-tag effect="dark" type="info">差评</el-tag>
    </div>
  </el-collapse-item>
  <el-collapse-item title="品牌服务" name="3">
     <el-descriptions class="margin-top" title="MLB" :column="1" >
            <el-descriptions-item label="物流服务">顺丰</el-descriptions-item>
            <el-descriptions-item label="免费干洗">买新衣即可免费到指定合作干洗店享受至尊干洗服务</el-descriptions-item>
      </el-descriptions>
  </el-collapse-item>
</el-collapse>
  </div>
</template>

<script>
import buttons from '@/components/button'
import { mapGetters,mapState } from 'vuex'
export default {
   name:'pro-info',
   data(){
     return{
       proSize:'XS',
       activeNames:1,
      //  name: '',
      //  brand: '',
      //  price: 0
     }
   },
   components:{
       buttons
   },
   computed: {
    //  ...mapGetters(['itemName','itemBrand','itemPrice'])
    ...mapState(['name','brand','price'])
   },
   created() {
    //  this.name = this.$store.getters.itemName
   }
}
</script>

<style lang="scss" scoped>
@import './src/assets/css/productinfo.scss';

</style>
