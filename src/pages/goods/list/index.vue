<template>
  <div id="list">
    <van-tabs v-model="active" title-active-color="#1890FF" :sticky="true" color="#1890FF">
      <van-tab title="已上架">
        <div class="panel" v-for="i in 10" :key="i">
          <div class="panel-body">
            <div class="goodss">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576594046&di=1738905d2434a5177540fa332d949738&imgtype=jpg&er=1&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-2a62bc350375166e53cc9d7cbaeed73e_hd.jpg" alt="">
              <div class="goods">
                <div class="goods-info">
                  <div class="goods-title">青椒炒肉丝</div>
                  <div class="stock">库存：50</div>
                </div>
                <div class="price">￥100.00</div>
              </div>
            </div>
            <van-divider />
          </div>
          <div class="panel-footer">
            <div class="footer">
              <div class="volume">销量：12</div>
              <div class="btn">
                <van-button type="default" size="small">下架</van-button>
                <van-button type="default" size="small">编辑</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已下架">
        <div class="panel" v-for="i in 10" :key="i">
          <div class="panel-body">
            <div class="goodss">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576594046&di=1738905d2434a5177540fa332d949738&imgtype=jpg&er=1&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-2a62bc350375166e53cc9d7cbaeed73e_hd.jpg" alt="">
              <div class="goods">
                <div class="goods-info">
                  <div class="goods-title">青椒炒肉丝</div>
                  <div class="stock">库存：50</div>
                </div>
                <div class="price">￥100.00</div>
              </div>
            </div>
            <van-divider />
          </div>
          <div class="panel-footer">
            <div class="footer">
              <div class="volume">销量：12</div>
              <div class="btn">
                <van-button type="default" size="small">上架</van-button>
                <van-button type="default" size="small" @click="del">删除</van-button>
                <van-button type="default" size="small">编辑</van-button>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>