<template>
  <div id="info">
    <div class="order-type">
      <div class="type">待取货</div>
      <div class="date">下单时间：2019-12-12 14:15:00</div>
    </div>
    <div class="goods-list">
      <div class="goods-info">
        <div class="info">
          <div class="name">黄焖牛腩</div>
          <div class="copies">x1</div>
        </div>
        <div class="price">20￥</div>
      </div>
      <div class="goods-info">
        <div class="info">
          <div class="name">黄焖排骨</div>
          <div class="copies">x1</div>
        </div>
        <div class="price">25￥</div>
      </div>
    </div>
    <div class="address-info">
      <div class="address-title">地址信息</div>
      <div class="address">
        <van-cell-group :border="false">
          <van-cell :border="false" title="收货地址：" value="中山中路99弄99号平高世贸大厦1711" />
          <van-cell :border="false" title="联系人：" value="孙辉" />
          <van-cell :border="false" title="手机号：" value="17674007036" />
        </van-cell-group>
        <!-- <div class="address-name">：</div>
        <div class="a-info">中山中路99弄99号平高世贸大厦1711</div> -->
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>