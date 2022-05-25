<template>
    <div class="main-container">
        <div class="main-header">
            <a class="menu-link-main" href="#">今日爆款</a>
            <div class="header-menu">
              <router-link to="/#" active-class="is-active">上衣</router-link>
              <router-link to="/#" active-class="is-active">连衣裙</router-link>
              <router-link to="/#" active-class="is-active">下装</router-link>
              <router-link to="/#" active-class="is-active">外套</router-link>
              <router-link to="/#" active-class="is-active">潮鞋</router-link>
            </div>
        </div>
        <div class="main-rank-list">
           <rank-list></rank-list>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import RankList from "../components/RankList";
export default {
      components: {RankList},
      data() {
            return {


            }
        },
        created() {

        },
        computed: {
            ...mapState(["islogin"]),
        },
        methods: {

        },

    };
</script>
<style lang="">

</style>
