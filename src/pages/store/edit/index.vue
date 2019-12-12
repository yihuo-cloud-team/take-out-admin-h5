<template>
  <div id="edit">
    <div class="store">
      <div class="store-image">
        <img class="img" src="/images/06.jpg" alt="">
      </div>
      <div class="upload"><van-icon name="photograph" /></div>
      <div class="store-name">怪兽炒饭</div>
    </div>
    <div class="store-info">
      <div class="info-title">门店信息</div>
      <div class="message">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="门店描述"
            placeholder=""
            @click-right-icon="$toast('question')"
          />

          <van-field
            v-model="password"
            label="门店分类"
            placeholder="快餐简餐"
            required
          />

          <van-field
            v-model="password"
            label="联系电话"
            placeholder=""
            required
          />

        </van-cell-group>
      </div>
    </div>
    <div class="store-type">
      <div class="type-title">营业状态</div>
      <div class="type">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="营业中" clickable @click="radio = '1'">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="待营业" clickable @click="radio = '2'">
              <van-radio slot="right-icon" name="2" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <div class="store-date">
      <div class="date-title">营业时间</div>
      <div class="week">
        <div class="checkb">
          <van-cell-group>
            <van-switch-cell v-model="checked1" title="周一" />
            <van-switch-cell v-model="checked2" title="周二" />
            <van-switch-cell v-model="checked3" title="周三" />
            <van-switch-cell v-model="checked4" title="周四" />
            <van-switch-cell v-model="checked5" title="周五" />
            <van-switch-cell v-model="checked6" title="周六" />
            <van-switch-cell v-model="checked7" title="周日" />
          </van-cell-group>
        </div>
      </div>
      <div class="date">
        <van-cell is-link @click="showPopup" >开始时间</van-cell>
        <van-popup v-model="show" position="bottom" :style="{height:'200px'}">
          <van-datetime-picker
            v-model="currentTime"
            type="time"
            :filter="filter"
          />
        </van-popup>
        <van-cell is-link @click="showPopup1" >结束时间</van-cell>
        <van-popup v-model="show1" position="bottom" :style="{height:'200px'}">
          <van-datetime-picker
            v-model="currentTime"
            type="time"
            :filter="filter"
          />
        </van-popup>
      </div>
    </div>
    <div class="store-tag">
      <div class="tag-title">门店标签</div>
      <div class="tags">
        <van-tag plain size="large">评价超棒</van-tag>
        <van-tag plain size="large">价格实惠</van-tag>
        <van-tag plain size="large">份量超大</van-tag>
        <van-tag plain size="large" class="add-tag"><van-icon name="plus" /></van-tag>
        <!-- <div class="add"><van-icon name="plus" /></div> -->
      </div>
      
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>