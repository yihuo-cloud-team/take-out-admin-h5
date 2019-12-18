<template>
  <div class="ol-upload">
    <van-uploader :after-read="onRead">
      <slot>上传文件</slot>
    </van-uploader>
  </div>
</template>
<script src="./OlUpload.js"></script>
<style lang="scss" scoped>
@import "OlUpload.scss";
</style>