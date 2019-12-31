<template>
  <div id="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadMore()">
      <div class="user-list" v-for="(item,index) in list" :key="index">
        <div class="list-img">
          <img :src="item.head_img" alt />
        </div>
        <div class="list-info">
          <div class="info-name">{{item.name}}</div>
          <div class="info-date">注册时间：{{item.add_time}}</div>
          <div class="num">订单量：{{item.orderCount}}</div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>