<template>
  <div class="content">
    <pro-images></pro-images>
    <product-info></product-info>


  </div>
</template>

<script>
import buttons from "./button";
import Practice from './practice.vue';
import ProImages from '@/components/ProImages'
import ProductInfo from './ProductInfo.vue'
import { mapMutations,mapGetters } from "vuex";
export default {
  name: "product",
  components: {
    buttons,
    Practice,
    ProImages,
    ProductInfo
},
  data(){
    return {
      name: ''
    }
  },
  created() {
    this.name = this.$route.params.name
  },
  methods: {
  },
  computed:{
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/album-content.scss';
</style>
