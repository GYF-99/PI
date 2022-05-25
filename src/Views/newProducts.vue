<template>
    <div class="main-container">
        <div class="main-header">
            <a class="menu-link-main" href="#">新品推荐</a>
        </div>
        <div class="content-wrapper">
            <!--新品轮播图开始 -->
            <div class="content-section">
              <el-carousel height="400px" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in newPro" :key="item">
                  <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
            <!-- 新品轮播图结束 -->
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
               newPro:['mlb','oioi','boy']
            }
        },
        methods: {

        },
    }
</script>
<style>
.mvimg {
        border-radius: 50%;
}
.app-mv {
        padding: 15px;
    }

    .app-mv-text {
        border-bottom: none;
    }

    .app-card-subtextchange {
        padding-bottom: 1px;
    }

    .app-imgwithd {
        width: 380px;
        height: 220px;
        border-radius: 10px;
        margin: 0 10px;
        cursor: pointer;
    }

    .songlisttext {
        text-align: center;
        font-weight: 500;
        cursor: pointer;
    }
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
