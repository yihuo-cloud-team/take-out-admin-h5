<template>
  <div id="get"> 
    <van-image id="head" :src='$getUrl(src)' fit='cover' width='80' height="80" radius='40'></van-image>
    <div id="main">
        <div id="coupon">
          <img class="couponBg" src="~static/images/couponBg.png">
          <div class="text-box">
            <div class="title">{{form.name}}</div>
            <div class="value_zen">
              <span v-if="form.type==1">{{form.value_zen*10}}折</span>
              <span v-if="form.type==2">{{form.value_zen}}元</span>
            </div>
            <div class="condition_value">{{conditionValue}}</div>
            <div class="time">有效时间:{{form.day}}天</div>
          </div>
        </div>
        <div id="qrcode" ref="Qrcode"></div>
        <!-- <div ref="Qrcode"></div> -->
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>