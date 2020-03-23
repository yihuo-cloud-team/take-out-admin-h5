<template>
  <div id="list">
    <div class="tab">
      <div class="tab-head">
        <van-tabs v-model="active" color="rgba(255, 144, 32, 1)" sticky>
          <van-tab name>
            <div slot="title">
              <div>全部{{info.all}}</div>
            </div>
          </van-tab>
          <van-tab :name="0">
            <div slot="title">
              <div>待支付{{info.to_be_paid}}</div>
            </div>
          </van-tab>

          <van-tab :name="2">
            <div slot="title">
              <div>待取货{{info.waite_goods}}</div>
            </div>
          </van-tab>

          <van-tab :name="3">
            <div slot="title">
              <div>已发货{{info.shipped}}</div>
            </div>
          </van-tab>

          <van-tab :name="4">
            <div slot="title">
              <div>已完成{{info.success}}</div>
            </div>
          </van-tab>
          <van-tab :name="21">
            <div slot="title">
              <div>待退款{{info.apply_cancelled}}</div>
            </div>
          </van-tab>
        </van-tabs>
      </div>

      <div class="tab-body">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="update()">
          <div
            class="panel"
            @click="$router.push(`/order/info?order_id=${item.order_id}`)"
            v-for="(item,index) in list"
            :key="index"
          >
            <div class="panel-body">
              <div class="title-box">
                <div class="title" v-if="item.state==0">待支付</div>
                <div class="title" v-if="item.state==1">已接单</div>
                <div class="title" v-if="item.state==2">待取货</div>
                <div class="title" v-if="item.state==3">配送中</div>
                <div class="title" v-if="item.state==4">已完成</div>
                <div class="title" v-if="item.state==21">订单取消</div>
              </div>

              <div class="order" v-for="(i,index) in item.snapshotInfo" :key="index">
                <div class="order-left">
                  <div class="order-info">
                    <van-image
                      width="45"
                      height="45"
                      v-if="i.data.goods_head_list.length > 0"
                      style="border-radius:1px;"
                      :src="$getUrl(i.data.goods_head_list[0])"
                    />
                    <div class="goods-name">{{i.data.title}}</div>
                  </div>
                </div>
                <div class="order-right">
                  <div class="goods-price">￥{{i.data.price}}</div>
                  <div class="goods-num">x{{i.data.quantity}}</div>
                </div>
              </div>
              <div class="freight">
                <div class="freight-name">配送费</div>
                <div class="freight-price">￥{{item.freight_price}}</div>
              </div>
              <div class="freight">
                <div class="freight-name">实付金额</div>
                <div class="price">￥{{item.payInfo.price}}</div>
              </div>
              <div class="freight">
                <div class="freight-name">取货码</div>
                <div class="freight-price">{{item.order_id | order}}</div>
              </div>
              <div class="freight">
                <div class="freight-name">下单时间</div>
                <div class="time">{{item.add_time}}</div>
              </div>
              <div class="freight">
                <div class="freight-name">订单备注</div>
                <div class="remarks">{{item.remarks}}</div>
              </div>

              <!-- <van-cell-group v-if="item.remarks">
                <van-field
                  v-model="item.remarks"
                  disabled
                  rows="1"
                  autosize
                  label="备注"
                  type="textarea"
                />
              </van-cell-group>-->
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>