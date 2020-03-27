<template>
  <div id="list">
    <van-list class="list-box">
      <div
        class="panel"
        v-for="(item,index) in list"
        @click="$router.push(`/coupon/edit?id=${item.id}`)"
        :key="index"
      >
        <div class="panel-body">
          <div class="goodss">
            <div class="goods">
              <div class="goods-info">
                <div class="goods-title">名称:{{item.name}}</div>
                <div class="type">类型:{{item.type}}</div>
                <div class="condition_value">使用条件(元)：{{item.condition_value}}</div>
                <div class="value_zen">减少金额或折扣:{{item.value_zen}}</div>
                <div class="day">有效时间（天）:{{item.day}}</div>
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
                @click.stop="$router.push(`/coupon/edit?id=${item.id}`)"
              >编辑</van-button>
              <van-button type="default" size="small" @click.stop="del(item)">删除</van-button>
            </div>
          </div>
        </div>
      </div>
    </van-list>
    <div class="fixed" @click="$router.push('/coupon/edit')">添加优惠券模板</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>