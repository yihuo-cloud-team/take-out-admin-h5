<template>
  <div id="info">
    <!-- 店铺 S -->
    <div class="panel">
      <div class="panel-body">
        <div class="store">
            <div class="store-head">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575980327207&di=c7b3b77cb7033ed3a8e4c9b1856d4ed1&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-6444e641d0235006e81bc4210b5da89b_hd.jpg" alt="">
            </div>
            <div class="store-info">
                <div class="store-name">怪兽炒饭</div>
            </div>
            <div class="go"><van-icon name="arrow" /></div>
          </div>
      </div>
      <div class="panel-footer">
        <van-grid :border="false" :column-num="4">
          <van-grid-item text="待支付" to="/order/list?state=0">
            <div slot="icon" class="num">15</div>
          </van-grid-item>

          <van-grid-item text="待取货" to="/order/list?state=1">
            <div slot="icon" class="num">15</div>
          </van-grid-item>

          <van-grid-item text="已发货" to="/order/list?state=2">
            <div slot="icon" class="num">15</div>
          </van-grid-item>

          <van-grid-item text="已完成" to="/order/list?state=3">
            <div slot="icon" class="num">15</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 店铺 E -->

    <!-- 销量 S -->
    <div class="panel">
      <van-grid :column-num="2">
          <van-grid-item text="今日销售总额">
            <div slot="icon" class="num">5000.00</div>
          </van-grid-item>

          <van-grid-item text="今日订单总数">
            <div slot="icon" class="num">3</div>
          </van-grid-item>
        </van-grid>
    </div>
    <!-- 销量 E -->

    <!-- 管理 S -->
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">门店管理</div>
      </div>
      <van-grid :border="false">
        <van-grid-item icon="shop-o" text="店铺管理" />
        <van-grid-item icon="cart-o" to="/goods/list" text="商品管理" />
        <van-grid-item icon="orders-o" to="/order/list" text="订单管理" />
        <van-grid-item icon="manager-o" text="会员管理" />
      </van-grid>
    </div>
    <!-- 管理 E -->

  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>