<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <img class="img" :src="$getUrl(info.qrCode)" alt="">
      </div>
      <div class="user-name"></div>
    </div>
    <div class="security" @click="$router.push('/user/pwd')">
      <van-cell title="账户与安全" is-link />
    </div>
    <div class="btn" @click="signOut">
      退出登录
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>