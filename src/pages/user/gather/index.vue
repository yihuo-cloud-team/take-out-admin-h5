<template>
  <div id="gather">
    <div class="box">
      <div class="title">套餐:</div>
      <div class="text" v-for="(item,index) in meal" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>