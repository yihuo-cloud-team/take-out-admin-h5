<template>
  <div id="selects">
    <div class="title">请选择组织</div>

    <van-button
      @click="submit(item)"
      v-for="(item,index) in list"
      :key="index"
      class="btn"
    >{{item.name}}</van-button>
    <div class="fixed" @click="$router.push('/kaidian/openDomain')">新建组织</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>