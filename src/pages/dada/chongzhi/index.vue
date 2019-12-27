<template>
  <div id="chongzhi">
    <div class="box">
      <van-cell-group>
        <van-field label="充值" type="number" v-model="money" placeholder="请输入充值金额"></van-field>
      </van-cell-group>
      <div class="footer">
        <van-button @click="chongzhi" class="btn">下一步</van-button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>