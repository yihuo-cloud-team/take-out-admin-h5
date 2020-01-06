<template>
  <div id="login">
    <div class="box">
      <div class="box-title">欢迎登录</div>
       <div class="box-subtitle">益火后台管理系统</div>
      <div class="sub-title">账户</div>
      <van-cell-group class="inp">
        <van-field v-model="form.phone" clearable placeholder="请输入用户名" />
      </van-cell-group>
      <div class="sub-title">密码</div>
      <van-cell-group class="inp">
        <van-field type="password" v-model="form.pwd" clearable placeholder="请输入密码" />
      </van-cell-group>
      <div class="footer">
        <van-button type="default" class="left" @click="submit">登录</van-button>
        <div  class="right" @click="$router.push('/register')">我要开店</div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>