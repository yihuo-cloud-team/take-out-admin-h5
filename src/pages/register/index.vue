<template>
  <div id="register">
    <div class="box" v-if="show==0">
      <van-cell-group class="inp">
        <van-field clearable v-model="phone" placeholder="请输入手机号" />
      </van-cell-group>
      <div class="footer">
        <van-button
          type="default"
          color="#FFCA0A"
          :disabled="checked==false"
          class="left"
          @click="save"
        >获取验证码</van-button>
      </div>
      <van-checkbox class="check" v-model="checked" shape="square">
        <div class="title">
          我已阅读并同于相关服务条款
          <span class="xieyi" @click="tiaozhuan">《用户协议》</span>
        </div>
      </van-checkbox>
    </div>
    <div class="box" v-if="show==1">
      <div class="title">已发送短信验证码至</div>
      <div class="info">{{phone}}</div>
      <van-cell-group>
        <van-field v-model.number="code" type="number" center clearable placeholder="请输入短信验证码">
          <van-button
            slot="button"
            color="#FFCA0A"
            :disabled="loading"
            size="small"
            @click="save"
            type="primary"
          >{{time}}</van-button>
        </van-field>
        <van-field clearable v-model="pwd" label="密码" maxlength="8" placeholder="密码长度4-8位" />
        <van-field clearable v-model="pwd1" label="密码" maxlength="8" placeholder="密码长度4-8位" />
        <div class="footer">
          <van-button
            type="default"
            style="margin-top:10px"
            color="#FFCA0A"
            class="left"
            @click="submit"
          >提交</van-button>
        </div>
      </van-cell-group>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>