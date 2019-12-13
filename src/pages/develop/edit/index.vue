<template>
  <div id="edit">
    <div class="mini-set-title">小程序配置</div>
    <div class="mini-set">
      <van-cell-group>
        <van-field
          v-model="appid"
          rows="1"
          autosize
          label="微信appid："
          type="textarea"
          placeholder="请输入小程序appid"
        />
        <van-field
          v-model="app_mi"
          rows="1"
          autosize
          label="微信密钥："
          type="password"
          placeholder="请输入小程序密钥"
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
          label="商户号："
          type="textarea"
          placeholder="请输入商户号"
        />
        <van-field
          v-model="vx_mi"
          rows="1"
          autosize
          label="商户密钥："
          type="password"
          placeholder="请输入商户密钥"
        />
      </van-cell-group>
    </div>
    <div style="padding:15px 20px" @click="$router.push('/develop/edit')">
      <van-button type="default" block>保存</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>