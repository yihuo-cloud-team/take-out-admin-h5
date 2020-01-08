<template>
  <div id="list">
    <div class="box">
          <div
        class="panel"
        v-for="(item,index) in list"
        @click="$router.push(`/class/edit?id=${item.id}`)"
        :key="index"
      >
        <div class="panel-body">
          <div class="goodss">
            <div class="goods">
              <div class="goods-info">
                <div class="goods-title">应用名称:{{item.wx_name}}</div>
              </div>
            </div>
          </div>
          <van-divider />
        </div>
        <div class="panel-footer">
          <div class="footer">
            <div class="left"></div>
            <div class="btn">
              <van-button
                type="default"
                size="small"
                @click.stop="$router.push(`/app/save?id=${item.id}`)"
              >编辑</van-button>
              <van-button type="default" size="small" @click.stop="del(item)">删除</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  


     <div class="fixed" @click="$router.push('/app/save')">开通小程序</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>