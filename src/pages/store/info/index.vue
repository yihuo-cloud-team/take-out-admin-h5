<template>
  <div id="info">
    <!-- 店铺 S -->
    <div class="panel">
      <div @click="$router.push(`/store/edit?store_id=${store_id}`)" class="panel-body">
        <div class="store">
          <div class="store-head">
            <img :src="$getUrl(storeInfo.logo)" alt />
          </div>
          <div class="store-info">
            <div class="store-name">{{storeInfo.name | nullToText('--')}}</div>
          </div>
          <div class="go">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <van-grid :border="false" :column-num="4">
          <van-grid-item text="待支付" to="/order/list?state=0">
            <div slot="icon" class="num">{{info.payment | nullToText}}</div>
          </van-grid-item>

          <van-grid-item text="待取货" to="/order/list?state=2">
            <div slot="icon" class="num">{{info.pick | nullToText}}</div>
          </van-grid-item>

          <van-grid-item text="已发货" to="/order/list?state=3">
            <div slot="icon" class="num">{{info.deliver | nullToText}}</div>
          </van-grid-item>

          <van-grid-item text="已完成" to="/order/list?state=4">
            <div slot="icon" class="num">{{info.complete | nullToText}}</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 店铺 E -->

    <!-- 销量 S -->
    <div class="panel">
      <van-grid :column-num="2">
        <van-grid-item text="今日销售总额">
          <div slot="icon" class="num">{{info.tprice | nullToText}}</div>
        </van-grid-item>

        <van-grid-item text="今日订单总数">
          <div slot="icon" class="num">{{info.order | nullToText}}</div>
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
        <van-grid-item icon="shop-o" @click='goStore(store_id)' text="店铺管理" />
        <van-grid-item icon="cart-o" to="/class/list" text="分类管理" />
        <van-grid-item icon="cart-o" to="/goods/list" text="商品管理" />
        <van-grid-item icon="orders-o" to="/order/list" text="订单管理" />
        <van-grid-item icon="manager-o" to="/user/list" text="会员管理" />
        <van-grid-item icon="newspaper-o" to="/printer/list" text="打印机管理" />
        <!-- <van-grid-item icon="logistics" to="/dada/open" text="配送管理" /> -->
        <!-- <van-grid-item icon="points" to="/develop/info" text="开发设置" /> -->
        <van-grid-item icon="shop-o" @click="goC()" text="我的店铺" />
        <!-- <van-grid-item icon="points" to="/app/list" text="我的小程序" /> -->
        <van-grid-item icon="newspaper-o" @click="goEr()" text="店铺二维码" />
        <van-grid-item icon="coupon-o" @click="goCoupon()" text="优惠券管理" />
      </van-grid>
    </div>
    <!-- 管理 E -->
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>