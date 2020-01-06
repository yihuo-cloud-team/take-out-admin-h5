<template>
  <div id="storeList">
    <div class="title">请选择门店</div>

    <van-button
      @click="save(item)"
      v-for="(item,index) in list"
      :key="index"
      class="btn"
    >{{item.name}}</van-button>

    <div class="fixed" @click="$router.push('/kaidian/openStore')">新建门店</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>