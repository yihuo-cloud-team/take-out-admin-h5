<template>
  <div id="list">
    <div class="p-list">
        <div class="info-btn">
          <div class="num">
            <span>550254215</span>
            <van-tag plain>前台</van-tag>
          </div>
          <div class="binding">解绑</div>
        </div>
        <div class="message">在线，工作状态正常</div>
        <van-divider />
    </div>
    <div class="p-list">
        <div class="info-btn">
          <div class="num">
            <span>550254215</span>
            <van-tag plain>前台</van-tag>
          </div>
          <div class="binding">解绑</div>
        </div>
        <div class="message1">在线，工作状态不正常</div>
        <van-divider />
    </div>
    <div class="p-list">
        <div class="info-btn">
          <div class="num">
            <span>550254215</span>
            <van-tag plain>前台</van-tag>
          </div>
          <div class="binding">解绑</div>
        </div>
        <div class="message2">离线</div>
        <van-divider />
    </div>
    <div style="padding:15px 20px" @click="$router.push('/printer/edit')">
      <van-button type="default" block>添加打印机</van-button>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>