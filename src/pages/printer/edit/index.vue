<template>
  <div id="edit">
    <div class="p-info">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="编号SN"
          type="textarea"
          placeholder="请输入打印机编号，9位数字"
        />
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="识别码KEY"
          type="textarea"
          placeholder="请输入打印机识别码，9位数字"
        />
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="备注"
          type="textarea"
          placeholder="如：后厨、前台"
        />
      </van-cell-group>
    </div>
    <div style="padding:15px 20px" @click="$router.push('/printer/list')">
      <van-button type="default" block>保存</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>