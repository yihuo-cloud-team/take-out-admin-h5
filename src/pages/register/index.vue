<template>
  <div id="register">
    <div class="box">
      <div class="sub-title">账户</div>
      <van-cell-group v-if="index==1" class="inp">
        <van-field clearable placeholder="请输入手机号" />
      </van-cell-group>
      <van-cell-group v-if="index==2" class="inp">
        <van-field clearable placeholder="请输入验证码" />
      </van-cell-group>
      <div class="sub-title">密码</div>
      <van-cell-group class="inp">
        <van-field type="password" clearable placeholder="请输入密码" />
      </van-cell-group>
      <div class="footer">
        <van-button type="default" class="left" @click="submit">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>