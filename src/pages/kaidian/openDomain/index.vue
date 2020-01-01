<template>
  <div id="openDomain">
    <van-cell-group>
      <van-field v-model="form.name" required clearable label="组织名称" placeholder="请输入组织名称" />
    </van-cell-group>
    <van-button class="fixed" @click="submit">保存</van-button>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>