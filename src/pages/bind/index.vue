<template>
  <div id="bind" v-if="userInfo">
    <van-cell-group>
      <van-cell title="微信" @click="bindWx">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <span v-if="isOpenid">已绑定</span>
          <span v-if="!isOpenid">未绑定</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>