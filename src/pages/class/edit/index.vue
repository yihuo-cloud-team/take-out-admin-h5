<template>
  <div id="eidt">
    <div class="input-file">
      <van-cell-group>
        <van-field
          v-model="form.name"
          :required="true"
          rows="1"
          autosize
          label="分类名称"
          type="textarea"
          placeholder="请输入分类名称"
          clearable
        />
        <van-field
          v-model="form.sort"
          :required="true"
          rows="1"
          type="number"
          autosize
          label="排序"
          placeholder="请输入排序"
          clearable
        />
      </van-cell-group>
    </div>

    <div class="fixed" @click="submit">保存</div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
@import "index.scss";
</style>