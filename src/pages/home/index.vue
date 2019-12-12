<template>
  <div id="home">

      <!-- 门店数据 S -->

      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">门店数据</div>
        </div>
        <div class="data">
          <van-row>
            <van-col span="8">
              <div class="data-order">
                <div class="data-num">3200</div>
                <div class="data-title">今日订单数</div>
              </div>
            </van-col>
            <van-col span="8">
              <div class="data-order">
                <div class="data-num">0.00</div>
                <div class="data-title">今日成交额</div>
              </div>
            </van-col>
            <van-col span="8">
              <div class="data-order">
                <div class="data-num">0.00</div>
                <div class="data-title">昨日成交额</div>
              </div>
            </van-col>
            <van-col span="8">
              <div class="data-order">
                <div class="data-num">16</div>
                <div class="data-title">今日访客</div>
              </div>
            </van-col>
          </van-row>
        </div>
      </div>

      <!-- 门店数据 E -->

      <!-- 最新订单 S -->
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">最新订单</div>
          <div class="more" @click="$router.push('/order/list')">
            <div>更多</div>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="panel-body">
          <div class="order" v-for="item in 4" :key="item">
            <div class="order-left">
                <div class="order-head">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575968504480&di=a0ed6f723c584fef588eafb65e7ba461&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-6444e641d0235006e81bc4210b5da89b_hd.jpg" alt="">
                </div>
                <div class="order-info">
                    <div class="goods-name">黄焖牛腩</div>
                    <div class="goods-num">x1</div>
                </div>
            </div>
            <div class="order-right">
              <div>25￥</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新订单 E -->


      <!-- 热门商品 S -->
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">热门商品</div>
          <div class="more" @click="$router.push('/goods/list')">
            <div>更多</div>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="panel-body">
          <div class="goods" v-for="item in 4" :key="item">
            <div class="goods-head">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575972105271&di=f90d1784ba7dd464e6ae6d7bc7076ed4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3De78cc382ac18972ba33a00c2d6cc7b9d%2Fea6175c4b74543a9b5bc055a19178a82b801147d.jpg" alt="">
            </div>
            <div class="goods-info">
                <div class="goods-name">黄焖牛腩</div>
            </div>
            <div class="price">总销量：20</div>
          </div>
        </div>
      </div>
      <!-- 热门商品 E -->

      <!-- 门店信息 S -->
      <div class="panel">
        <div class="panel-header">
          <div class="panel-title">门店信息</div>
          <div class="more" @click="$router.push('/store/edit')">
            <div>编辑</div>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="panel-body">
          <div class="basics">
            <div class="basics-title">基础信息</div>
            <div class="basics-info">管理门店营业时间、电话和地址信息</div>
          </div>
          <div class="info">
            <div class="info-infos">
              <span class="title">商品分类：</span>
              <span >快餐简餐</span>
            </div>
            <div class="info-infos">
              <span class="title">联系电话：</span>
              <span>17674007036</span>
            </div>
            <div class="info-infos">
              <span class="title">营业状态：</span>
              <span>营业中</span>
            </div>
            <div class="info-infos">
              <span class="title">营业时间：</span>
              <span>周一到周五</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 门店信息 E -->

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>