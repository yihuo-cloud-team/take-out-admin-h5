<template>
  <div id="list">
    <div class="tab">
      <van-tabs v-model="active" :sticky="true">
        <van-tab>
          <div slot="title">
            <div>待支付(18)</div>
          </div>
          <div class="panel" v-for="i in 10" :key="i">
            <div class="panel-body">
              <div class="order" v-for="index in 3" :key="index">
                <div class="order-left">
                    <div class="order-info">
                        <div class="goods-name">黄焖牛腩</div>
                        <div class="goods-num">x1</div>
                    </div>
                </div>
                <div class="order-right">
                  <div>25￥</div>
                </div>
              </div>
              <van-divider />
              <div class="panel-footer">
                <div class="footer">
                  <div class="date">2019-12-9 20:16:00</div>
                  <div class="total">总计：75.00</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab>
          <div slot="title">
            <div>待取货(18)</div>
          </div>
          <div class="panel">
            <div class="panel-body">
              <div class="order" v-for="i in 10" :key="i">
                <div class="order-left">
                    <div class="order-info">
                        <div class="goods-name">黄焖牛腩</div>
                        <div class="goods-num">x1</div>
                    </div>
                </div>
                <div class="order-right">
                  <div>25￥</div>
                </div>
              </div>
              <van-divider />
              <div class="panel-footer">
                <div class="footer">
                  <div class="date">2019-12-9 20:16:00</div>
                  <div class="total">总计：250.00</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab>
          <div slot="title">
            <div>已发货(18)</div>
          </div>
          <div class="panel" v-for="index in 10" :key="index">
            <div class="panel-body">
              <div class="order">
                <div class="order-left">
                    <div class="order-info">
                        <div class="goods-name">黄焖牛腩</div>
                        <div class="goods-num">x1</div>
                    </div>
                </div>
                <div class="order-right">
                  <div>25￥</div>
                </div>
              </div>
              <van-divider />
              <div class="panel-footer">
                <div class="footer">
                  <div class="date">2019-12-9 20:16:00</div>
                  <div class="total">总计：25.00</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>

        <van-tab>
          <div slot="title">
            <div>已完成(18)</div>
          </div>

        </van-tab>

      </van-tabs>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>