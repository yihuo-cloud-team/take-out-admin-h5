<template>
  <div id="list">
    <div class="user-list" v-for="item in list" :key="item.id">
      <div class="list-img">
        <img :src="item.head_img" alt />
      </div>
      <div class="list-info">
        <div class="info-name">{{item.name}}</div>
        <div class="info-date">注册时间：{{item.add_time}}</div>
        <div class="num">订单量：{{item.orderCount}}</div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>