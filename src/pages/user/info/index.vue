<template>
  <div id="user">
    <div class="user-info">
      <div class="info-image">
        <img
          class="img"
          src="http://pic.51yuansu.com/pic3/cover/01/69/80/595f67c042c1b_610.jpg"
          alt
        />
      </div>
      <div class="user-name">{{name | nullToText}}</div>
      <div class="meal-box">
        <span class="tab">{{meal}}</span>
      </div>
    </div>
    <div class="security">
      <van-cell @click="$router.push('/user/pwd')" title="账户与安全" is-link />
      <!-- <van-cell @click="$router.push('/marketing/list')" title="营销" is-link /> -->
      <van-cell @click="$router.push('/user/overview')" title="账户总览" is-link />
      <van-cell @click="$router.push('/user/bill')" title="账单" is-link />
      <!-- <van-cell @click="$router.push('/user/gather')" title="套餐" is-link /> -->
      <van-cell @click="$router.push('/select')" title="切换组织" is-link />
      <van-cell @click="$router.push('/select/storeList?id=1')" title="门店列表" is-link />
      <van-cell @click="$router.push('/alerts')" title="消息通知" is-link />
      <van-cell @click="$router.push('/weixin')" title="绑定微信" is-link />
    </div>

    <div class="btn" @click="signOut">退出登录</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>