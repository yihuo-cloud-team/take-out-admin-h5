<template>
  <div id="edit">
    <div class="store">
      <div class="store-image">
        <ol-upload v-model="form.logo">
          <img class="img" :src="$getUrl(form.logo)" />
        </ol-upload>
      </div>
      <div class="store-name">{{form.name}}</div>
    </div>
    <div class="store-info">
      <div class="info-title">门店信息</div>
      <div class="message">
        <van-cell-group>
          <van-field
            v-model="form.info"
            required
            clearable
            label="门店描述"
            placeholder
            @click-right-icon="$toast('question')"
          />
          <van-field v-model="form.store_class" label="门店分类" placeholder="快餐简餐" required />
          <van-field v-model="form.phone" label="联系电话" placeholder required />
        </van-cell-group>
      </div>
    </div>
    <!-- 多图上传 -->
    <div class="store-img">
      <div class="left">logo背景图</div>
      <div class="right">
        <div class="upload">
          <img class="img" v-if="form.store_bg" :src="$getUrl(form.store_bg)" alt />
          <ol-upload class="right"  v-model="form.store_bg"></ol-upload>
        </div>
      </div>
    </div>
    <div class="store-img">
      <div class="left">商家图片</div>
      <div class="right">
        <div class="upload">
          <img
            class="img"
            v-for="(item,index) in form.store_img"
            :key="index"
            :src="$getUrl(item)"
            @click="form.store_img.splice(index,1)"
            alt
          />
          <ol-upload
            class="shangchuan"
            v-if="form.store_img.length<9"
            @success="url=>form.store_img.push(url)"
          ></ol-upload>
        </div>
      </div>
    </div>
    <div class="store-type">
      <div class="type-title">营业状态</div>
      <div class="type">
        <van-radio-group v-model="form.state">
          <van-cell-group>
            <van-cell title="营业中" clickable @click="form.state = '1'">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="待营业" clickable @click="form.state = '2'">
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
          <van-checkbox-group v-model="form.week">
            <van-checkbox class="check" name="周一">周一</van-checkbox>
            <van-checkbox class="check" name="周二">周二</van-checkbox>
            <van-checkbox class="check" name="周三">周三</van-checkbox>
            <van-checkbox class="check" name="周四">周四</van-checkbox>
            <van-checkbox class="check" name="周五">周五</van-checkbox>
            <van-checkbox class="check" name="周六">周六</van-checkbox>
            <van-checkbox class="check" name="周日">周日</van-checkbox>
          </van-checkbox-group>
        </div>
      </div>
      <div class="date">
        <van-cell is-link @click="showPopup" title="开始时间" :value="form.start_time"></van-cell>
        <van-popup v-model="show" position="bottom" :style="{height:'200px'}">
          <van-datetime-picker
            v-model="start_time"
            type="time"
            :filter="filter"
            @confirm="start"
            @cancel="show=false"
          />
        </van-popup>
        <van-cell is-link @click="showPopup1" title="结束时间" :value="form.end_time"></van-cell>
        <van-popup v-model="show1" position="bottom" :style="{height:'200px'}">
          <van-datetime-picker
            v-model="end_time"
            type="time"
            :filter="filter"
            @confirm="end"
            @cancel="show=false"
          />
        </van-popup>
      </div>
    </div>
    <div class="store-tag">
      <div class="tag-title">门店标签</div>
      <van-field v-model="form.label" label="门店标签" placeholder="好吃的，好玩的" required />
    </div>
    <div class="footer" @click="submit">保存</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>