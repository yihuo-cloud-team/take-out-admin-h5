<template>
  <div id="qrcode">
    <div class="box" ref="bigBox">
      <div class="title">
        <div class="img">
          <img  ref="logo" :src="img" alt />
        </div>
        <div class="right">
          <div class="name">{{info.name}}</div>
        </div>
      </div>
      <div ref="Qrcode"></div>
    </div>
    <div @click="shows" class="button">
      <van-icon name="down" />
      <div>保存到相册</div>
    </div>
    <van-popup v-model="show">
      <img :src="imgUrl" 	  crossorigin="anonymous"   style="height:300px;width:240px;">
       <div class="text">长按保存到相册</div>
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>