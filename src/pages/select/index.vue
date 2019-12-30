<template>
  <div id="select">
    <div class="title">
      请选择门店
    </div>
    <div>
      <van-button
        @click="sumbit(item)"
        v-for="(item,index) in list"
        :key="index"
        class="btn"
      >{{item.name}}</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>