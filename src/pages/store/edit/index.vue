<template>
  <div id="edit">
    <div class="store">
      <div class="store-image">
        <ol-upload style="border-radius:100%;" v-model="form.logo">
          <img class="img" :src="$getUrl(form.logo)" />
        </ol-upload>
      </div>
      <div class="store-name">{{form.name | nullToText}}</div>
    </div>
    <div class="store-info">
      <div class="info-title">门店信息</div>
      <div class="message">
        <van-cell-group>
          <van-field v-model="form.name" required clearable label="门店标题" placeholder />

          <van-field
            v-model="form.info"
            required
            type="textarea"
            clearable
            label="门店描述"
            placeholder
          />
          <van-cell-group>
            <van-cell title="省市区" @click="kai = !kai" :value="area" />
          </van-cell-group>
          <van-field v-model="form.address" required clearable label="商家地址" placeholder />
          <van-field
            v-model="form.subsidy"
            required
            clearable
            label="门店补贴"
            type="number"
            placeholder
          />
          <van-field v-model="form.store_class" clearable label="门店分类" placeholder="快餐简餐" required />
          <van-field v-model="form.contacts" label="联系人" clearable placeholder required />
          <van-field
            v-model="form.phone"
            type="number"
            label="联系电话"
            clearable
            placeholder
            required
          />
        </van-cell-group>
      </div>
    </div>
    <div class="map">
      <ol-map v-model="position" style="height:300px"></ol-map>
      <van-cell-group>
        <van-cell :value="'纬度:'+position.x+',经度'+position.y" />
      </van-cell-group>
    </div>
    <!-- 多图上传 -->
    <div class="store-img">
      <div class="left">logo背景图</div>
      <div class="right">
        <div class="upload">
          <ol-upload class="right" v-model="form.store_bg">
            <img class="img" v-if="form.store_bg" :src="$getUrl(form.store_bg)" alt />
          </ol-upload>
        </div>
      </div>
    </div>
    <div class="store-img1">
      <div class="left">商家图片</div>
      <div class="right">
        <div class="upload">
          <div class="box" v-for="(item,index) in form.store_img" :key="index">
            <div @click="del(form.store_img,index)" class="chacha">
              <van-icon name="delete" class="icon" />
            </div>
            <img class="img" :src="$getUrl(item)" alt />
          </div>

          <ol-upload
            class="shangchuan"
            v-if="form.store_img.length<9"
            @success="url=>form.store_img.push(url)"
          ></ol-upload>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="store-type">
      <div class="type-title">营业状态</div>
      <div class="type">
        <van-cell-group>
          <van-switch-cell v-model="form.state" active-value="1" inactive-value="0" title="营业状态" />
        </van-cell-group>
      </div>
    </div>
    <div class="store-date">
      <div class="date-title">营业时间</div>
      <div class="week">
        <!-- <div class="checkb">
          <div
            v-for="we in week"
            :key="we"
            @click="push(we)"
            :class="['box',{'active':form.week.indexOf(we)>=0}]"
          >{{we}}</div>
        </div>-->

        <van-checkbox-group v-model="form.week" ref="checkboxGroup" class="checkb">
          <van-checkbox :name="item" v-for="item in week" :key="item">
            <div slot="icon" slot-scope="props" :class="['box',{'active':props.checked}]">{{item}}</div>
          </van-checkbox>
        </van-checkbox-group>
      </div>
      <div class="date">
        <div class="left" @click="showPopup">
          <div class="footer-left">开始时间</div>
          <div class="footer-right" style="background-color:#AAC4FD">{{form.start_time}}</div>
        </div>

        <van-popup v-model="show" position="bottom" :style="{height:'200px'}">
          <van-datetime-picker
            v-model="start_time"
            type="time"
            :filter="filter"
            @confirm="start"
            @cancel="show=false"
          />
        </van-popup>
        <div class="left" @click="showPopup1">
          <div class="footer-left">结束时间</div>
          <div class="footer-right" style="background-color:#F885A6">{{form.end_time}}</div>
        </div>
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
      <div class="tag-box">
        <template v-if="form.label.length>0">
          <van-tag
            v-for="(item,index) in form.label"
            @click="del(form.label,index)"
            :key="index"
            class="tag"
            type="warning"
          >{{item}}</van-tag>
        </template>
        <van-button type="primary" class="btn1" @click="shows=true">添加</van-button>
      </div>
    </div>
    <van-popup v-model="shows" position="bottom" :style="{ height: '20%' }">
      <van-field v-model="title" clearable label="添加标签" placeholder />
      <van-button @click="add" class="btn" type="primary">添加</van-button>
    </van-popup>
    <div class="fixed" @click="submit">保存</div>
    <van-popup v-model="kai" position="bottom">
      <van-area
        :area-list="areaList"
        :value="selecarea.length > 1?selecarea[2].code:'110101'"
        @cancel="kai = !kai"
        @confirm="select"
      />
    </van-popup>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>