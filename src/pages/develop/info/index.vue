<template>
  <div id="info">
    <div class="mini-set-title">小程序配置</div>
    <div class="mini-set">
      <van-cell-group>
        <van-field
          v-model="appid"
          rows="1"
          autosize
          label="微信appid："
          type="textarea"
        />
        <van-field
          v-model="app_mi"
          rows="1"
          autosize
          label="微信密钥："
          type="password"
          placeholder="未配置"
        />
      </van-cell-group>
    </div>
    <div class="wx-set-title">微信商户配置</div>
    <div class="vx-set">
      <van-cell-group>
        <van-field
          v-model="vxid"
          rows="1"
          autosize
          label="微信商户号："
          type="textarea"
        />
        <van-field
          v-model="vx_mi"
          rows="1"
          autosize
          label="微信密钥："
          type="password"
        />
      </van-cell-group>
    </div>
    <div style="padding:15px 20px" @click="$router.push('/develop/edit')">
      <van-button type="default" block>修改信息</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>