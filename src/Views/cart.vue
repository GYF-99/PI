<template>
  <div class="cart-main" >
    <el-card class="cart-header">
       <span>我的购物车</span>({{prosum}})
    </el-card>
    <div class="cart-gonds">
      <el-table
        :data="tableData"
        style="width: 100%"
        default-expand-all="true"
        max-height="690"
      >
        <el-table-column type="expand" width="55" label="全选">
          <template slot-scope="props">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              :show-header="false">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="商品信息"
                width="500px">
                <template slot-scope="scope">
                  <div class="proimg">
                    <el-row>
                      <el-col :span="8">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        </el-card>
                      </el-col>
                    </el-row>
                  </div>
                 <div class="protitle">
                       <span>{{ scope.row.proname }}</span>
                 </div>
                  </template>
              </el-table-column>
              <el-table-column
                prop="propartern"
                label="商品规格"
                width="140px">
              </el-table-column>
              <el-table-column
                prop="price"
                label="单价"
                width="120px">
              </el-table-column>
              <el-table-column
                label="数量"
                width="150px">
                <template slot-scope="scope">
                  <el-input-number
                    v-model="scope.row.procount"
                    size="small"
                    :min="1"
                    :max="5"
                    controls-position="right"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column
                prop="prosum"
                label="金额"
                width="120px">
              </el-table-column>
              <el-table-column
                label="操作"
                width="150px">
                <el-button type="text">删除</el-button>
                <el-button type="text">移入收藏夹</el-button>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column
          label="商品信息"
          prop="id"
          width="500px">
        </el-table-column>
        <el-table-column
          label="商品规格"
          width="140px">
        </el-table-column>
        <el-table-column
          label="单价"
          width="120px">
        </el-table-column>
        <el-table-column
          label="数量"
          width="150px">
        </el-table-column>
        <el-table-column
          label="金额"
          width="120px">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150px">
        </el-table-column>
      </el-table>
    </div>
    <div class="footer-container">
        <!-- 左侧的全选 -->
<!--        <div class="custom-control custom-checkbox">-->
<!--          <input type="checkbox" class="custom-control-input" id="cbFull" :checked="isfull" @change="fullChange" />-->
<!--          <label class="custom-control-label" for="cbFull">全选</label>-->
<!--        </div>-->
      <el-checkbox :indeterminate="isIndeterminate" v-model="multipleTable" @change="handleSelectionChange">全选</el-checkbox>
      <el-button type="text">删除</el-button>
      <el-button type="text">移入收藏夹</el-button>
        <!-- 中间的合计 -->
        <div>
          <span>合计：</span>
          <span class="total-price">￥{{ amount.toFixed(2) }}</span>
        </div>

        <!-- 结算按钮 -->
       <el-button type="btn" round>结算（{{ all }}）</el-button>
      </div>

    </div>

</template>

<script>
export default {
  name: "cart",
  data(){
    return {
      //购物车总数
      prosum:0,
      //全选框
      multipleSelection: [],
      tableData: [{
        id: 'MLB',
        proname: '上衣',
        propartern: '黑色、S',
        price: 99.99,
        procount: 1,
        prosum: 99.99,
      }, {
        id: 'UR',
        proname: '连衣裙',
        propartern: '红色、S',
        price: 99.99,
        procount: 1,
        prosum: 99.99,
      },{
        id: 'oioi',
        proname: '卫衣',
        propartern: '杏色、S',
        price: 199.99,
        procount: 1,
        prosum: 199.99,
      }],
      num:1
    }
  },
  props: {
    // 全选的状态
    isfull: {
      type: Boolean,
      default: true
    },
    // 总价格
    amount: {
      type: Number,
      default: 0
    },
    // 已勾选的商品的总数量
    all: {
      type: Number,
      default: 0
    }



},
  methods: {
    // 监听到了全选的状态变化
    fullChange(e) {
      this.$emit('full-change', e.target.checked)
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style scoped>
.cart-main{
  /*background-color: gray;*/
  width: 1500px;
  height: 2000px;
  position: relative;
  background-color: white;
}
.cart-header{
  width: 1550px;
  height: 50px;
  top: 5px;
  /*background-color: #3a6df0;*/
}
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 84%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

}
.cart-gonds{

}
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
.proimg{
  float: left;
}
.protitle{
  float: left;
  text-align: center;
}

</style>
