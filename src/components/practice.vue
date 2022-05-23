// 测试用的
<template>
  <div class="content-list">
    <ul class="section-content">
      <li class="content-item" v-for="(item,index) in contentList" :key="index">
        <div class="kuo" @click="goAlbum(item,item.name)">
          <!-- <img class="item-img" :src="attachImageUrl(item.pic)"/> -->
          <div class="mask">
            <svg class="icon">
              <use xlink:href="#icon-bofang"></use>
            </svg>
          </div>
        </div>
        <p class="item-name">{{item.name}}</p>
        <p class="item-price">{{ '¥' + item.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import {mixin} from '../mixins/index'
export default {
  name: 'practice',
//   mixins: [mixin],
  props: ['contentList'],
  methods: {
    goAlbum (item, type) {
      this.$router.push({path: `product/${item.name}`})
      this.$store.commit('receiveName',item.name)
      this.$store.commit('receiveBrand',"LV")
      this.$store.commit('receivePrice',item.price)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/content-list.scss";
</style>
