<template>
  <div id="edit">
    <!-- <div class="image1" v-if="qie">
      <img class="img-nav" src="/images/04.jpg" alt />
      <div class="btn">
        <van-icon name="photograph" />
      </div>
      <div class="num">1/5</div>
    </div>

    <div class="image" v-else>
      <div class="info-image" @click="qie = !qie">
        <van-icon class="img" name="photograph" />
      </div>
      <div class="upload-title">最多可以上传5张照片</div>
    </div> -->

    <div class="input-file">
      <van-cell-group>
        <van-field
          v-model="form.title"
          :required="true"
          rows="1"
          autosize
          label="商品名称"
          type="textarea"
          placeholder="请输入商品名称"
        />
        <van-field
          v-model="form.sub_title"
          :required="true"
          rows="1"
          autosize
          label="副标题"
          type="textarea"
          placeholder="请输入商品名称"
        />
        <van-field
          v-model="form.o_price"
          :required="true"
          rows="1"
          autosize
          label="原价"
          type="textarea"
          placeholder="请输入价格"
        />
        <van-field
          v-model="form.price"
          :required="true"
          rows="1"
          autosize
          label="优惠价"
          type="textarea"
          placeholder="请输入价格"
        />
        <van-field
          v-model="form.stock"
          :required="true"
          rows="1"
          autosize
          label="库存"
          type="textarea"
          placeholder="请输入库存量"
        />
        <van-cell :required="true" title="分类" is-link :value="value" @click="open" />
        <van-popup v-model="show" position="bottom" :style="{ height: '300px' }">
          <van-picker
            show-toolbar
            title="菜品分类"
            :columns="list"
            :default-index="index"
            value-key="name"
            @cancel="onCancel"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell-group>
    </div>
    <div class="remarks">
      <div class="box">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
      </div>
      <div class="remarks-info">商家承诺：我方郑重承诺，严格遵守平台使用要求，并确保提供所有信息的真实性。</div>
    </div>
    <div class="footer" @click="submit">保存</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>