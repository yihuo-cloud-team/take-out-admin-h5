<template>
  <div id="bill">
    <div class="date">
      <div class="left" @click="showPopup">
        <div class="footer-left">开始时间</div>
        <div class="footer-right" style="background-color:#AAC4FD">{{currentDate.Format('yyyy-MM')}}</div>
      </div>
      <van-popup v-model="show" position="bottom" :style="{height:'200px'}">
        <van-datetime-picker
          v-model="currentDate"
         type="year-month"
          :formatter="formatter"
          @confirm="start"
          @cancel="show=false"
        />
      </van-popup>
      <div class="left">
        <van-dropdown-menu>
          <van-dropdown-item v-model="form.value" @change="select" :options="option1" />
        </van-dropdown-menu>
      </div>
    </div>
    <van-list class="panel-list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="LoadMore()">
      <div class="panel-item" v-for="(item,index) in list" :key="index">
          <div class="top">
            <div >{{item.name}}</div>
            <div>{{item.price}}</div>
            <div>{{item.add_time}}</div>
          </div>
          <div class="center">状态:{{item.statu}}</div>
          <div class="bottom" v-if="item.info">备注:{{item.info}}</div>
      </div>
    </van-list>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>