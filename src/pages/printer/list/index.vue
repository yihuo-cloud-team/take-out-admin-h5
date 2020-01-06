<template>
  <div id="list">
    <div v-for="(item,index) in list" :key="index" class="p-list">
      <div class="info-btn">
        <div class="num">
          <span>{{item.item_sn}}</span>
          <van-tag plain>前台</van-tag>
        </div>
        <div class="binding" @click="del(item)">解绑</div>
      </div>
      <div :class="bianse(item.printer_status)" class="message">{{item.printer_status==null?'未知状态':item.printer_status}}</div>

    </div>

   
      <div class="fixed" @click="$router.push('/printer/edit')">添加打印机</div>
  
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>