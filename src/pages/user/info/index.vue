<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575993797352&di=a8bd1a554d5d7cc882e8df923cda2c79&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410073535_HXVfJ.thumb.700_0.jpeg" alt="">
      </div>
      <div class="user-name">kido</div>
    </div>
    <div class="security" @click="$router.push('/user/pwd')">
      <van-cell title="账户与安全" is-link />
    </div>
    <div class="btn" @click="$router.push('/login')">
      退出登录
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>