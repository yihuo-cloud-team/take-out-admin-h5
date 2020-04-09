<template>
  <div id="overview">
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
    </div>
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">账户总览</div>
      </div>
      <div class="data">
        <van-row>
          <van-col span="12">
            <div class="data-order">
              <div class="data-num">{{info.payTotal | nullToText }}</div>
              <div class="data-title">营业总额</div>
            </div>
          </van-col>
          <van-col span="12">
            <div class="data-order">
              <div class="data-num">{{info.orderTotal | nullToText}}</div>
              <div class="data-title">订单总额</div>
            </div>
          </van-col>
          <!-- <van-col span="8">
            <div class="data-order">
              <div class="data-num">{{info.freightCount | nullToText}}</div>
              <div class="data-title">运费总额</div>
            </div>
          </van-col>-->
          <!-- <van-col span="8">
            <div class="data-order">
              <div class="data-num">{{info.subsidy | nullToText}}</div>
              <div class="data-title">补贴总额</div>
            </div>
          </van-col>-->
        </van-row>
      </div>
    </div>
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title">我的余额</div>
      </div>
      <div class="data">
        <van-row>
          <van-col span="12">
            <div class="data-order">
              <div class="data-num">{{money.user_money | nullToText }}</div>
              <div class="data-title">可提现的余额</div>
            </div>
          </van-col>
          <van-col span="12">
            <div class="data-order">
              <div class="data-num">{{money.freeze_money | nullToText}}</div>
              <div class="data-title">待审核金额</div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="tixian">
      <div class="title">提现账户类型</div>
      <van-radio-group class="checkb" v-model="query.money_type">
        <van-radio name="1">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">微信</div>
        </van-radio>
        <van-radio name="2">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">支付宝</div>
        </van-radio>
        <van-radio name="3">
          <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">银行卡</div>
        </van-radio>
      </van-radio-group>
      <div class="title">卡号</div>
      <van-cell-group>
        <van-field v-model="query.account" placeholder="微信号、支付宝账号、银行卡账号" />
      </van-cell-group>
      <div class="title">真实姓名</div>
      <van-cell-group>
        <van-field v-model="query.real_name" placeholder="请填写真实姓名，以免打款失败" />
      </van-cell-group>
      <div class="title">提现金额</div>
      <van-cell-group>
        <van-field v-model="query.money" type="number" placeholder="可提现金额" />
      </van-cell-group>

      <!-- <div class="baocun" @click="submit">发起提现</div> -->
      <van-button @click="submit" color="#fec900" block :disabled="disabled">发起提现</van-button>

      <div class="box">
        <div class="btn" @click="tixian">提现记录</div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>