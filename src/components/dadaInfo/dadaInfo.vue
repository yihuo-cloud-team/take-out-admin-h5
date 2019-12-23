<template>
  <div id="info">
    <div class="recharge">
      <div class="balance">
        <!-- <div class="balance-money">{{yue}}</div> -->
        <div class="balance-title">账户余额</div>
      </div>
      <div class="balance-btn">
        <van-button type="default" size="small">充值</van-button>
      </div>
    </div>
    <div class="title">注册信息</div>
    <div class="info">
      <van-cell-group>
        <!-- <van-cell title="注册手机号" :value="query.root_user_id"></van-cell> -->
        <!-- <van-cell title="城市" :value="query"></van-cell> -->
        <van-cell title="企业全称"></van-cell>
        <van-cell title="企业地址"></van-cell>
        <van-cell title="联系人姓名"></van-cell>
        <van-cell title="联系人电话"></van-cell>
        <van-cell title="邮箱地址"></van-cell>
        <van-cell title="商户编号"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script src="./dadaInfo.js"></script>
<style lang="scss" scoped>
@import "dadaInfo.scss";
</style>