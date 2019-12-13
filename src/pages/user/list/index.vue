<template>
  <div id="list">
    <div class="user-list" v-for="i in 10" :key="i">
        <div class="list-img">
          <img src="/images/07.jpg" alt="">
        </div>
        <div class="list-info">
          <div class="info-name">快乐的恰饭</div>
          <div class="info-date">注册时间：2019-12-12 13:44:00</div>
          <div class="num">订单量：20</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>