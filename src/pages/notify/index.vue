<template>
  <div id="notify">
    <van-cell title="微信通知">
      <template #right-icon>
        <van-switch size="24px" v-model="wx" />
      </template>
    </van-cell>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>