<template>
  <div id="edit">

    <div class="image1" v-if="qie">
        <img class="img-nav" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576650944&di=77af3c71211f7252d2756b121a83b7c0&imgtype=jpg&er=1&src=http%3A%2F%2Fyucaiyuanfood.com%2FupLoad%2Falbum%2Fmonth_1512%2F201512101019209547.jpg" alt="">
    </div>

    <div class="image" v-else>
      <div class="info-image">
        <van-icon class="img" name="photo-o" />
      </div>
      <div class="upload-title">最多可以上传5张照片</div>
    </div>
    

    <div class="input-file">
      <van-cell-group >
        <van-field
          v-model="message"
          :required="true"
          rows="1"
          autosize
          label="商品名称"
          type="textarea"
          placeholder="请输入商品名称"
        />
        <van-field
          v-model="message"
          :required="true"
          rows="1"
          autosize
          label="价格"
          type="textarea"
          placeholder="请输入价格"
        />
        <van-field
          v-model="message"
          :required="true"
          rows="1"
          autosize
          label="库存"
          type="textarea"
          placeholder="请输入库存量"
        />
      <van-cell :required="true" title="分类" is-link value="请选择分类" @click="open" />
      <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '300px' }"
      />
      </van-cell-group>
    </div>
    <div class="remarks">
      <div class="box">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
      </div>
      <div class="remarks-info">商家承诺：我方郑重承诺，严格遵守平台使用要求，并确保提供所有信息的真实性。</div>
    </div>
    <div class="footer" @click="qie = !qie">
      保存
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>