<template>

  <div id="save">
    <div class="mini-set-title">小程序配置</div>
    <div class="mini-set">
      <van-cell-group>
         <van-field
          v-model="form.wx_name"
          rows="1"
          autosize
          label="小程序名称"
            clearable
          type="textarea"
          placeholder="请输入小程序名称"
        />
        <van-field
          v-model="form.app_id"
          rows="1"
          autosize
          label="appid："
            clearable
          type="textarea"
          placeholder="请输入小程序appid"
        />
          <van-field
          v-model="form.wx_app_type"
          rows="1"
          autosize
          label="app类型："
            clearable
          type="textarea"
          placeholder="请输入微信app类型："
        />
        <van-field
          v-model="form.wx_secret"
          rows="1"
          clearable
          autosize
          label="微信密钥："
          placeholder="请输入小程序密钥"
        />
      </van-cell-group>
    </div>
    <div class="wx-set-title">微信商户配置</div>
    <div class="vx-set">
      <van-cell-group>
        <van-field
          v-model="form.wx_mch_id"
          rows="1"
          autosize
          label="商户号："
          clearable
          type="textarea"
          placeholder="请输入商户号"
        />
        <van-field
          v-model="form.wx_mch_secret"
          rows="1"
          autosize
          clearable
          label="商户密钥："
          placeholder="请输入商户密钥"
        />
      </van-cell-group>
    </div>
    <div style="padding:15px 20px" @click="submit">
      <van-button type="default" block>保存</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>