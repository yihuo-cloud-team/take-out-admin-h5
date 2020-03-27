<template>
<div id="edit">
    <div class="input-file">
        <van-cell-group>
            <van-field v-model="form.name" :required="true" rows="1" autosize label="优惠券名称" type="textarea" placeholder="请输入优惠券名称" clearable />
            <div class="cell-box">
                <van-radio-group v-model="form.type" direction="horizontal">
                    <van-radio :name="1">折扣券</van-radio>
                    <van-radio :name="2">满减券</van-radio>
                </van-radio-group>
            </div>
            <van-field v-model="form.condition_value" :required="true" rows="1" type="number" min="0" autosize label="使用条件：" placeholder="请输入使用条件(元)：" clearable />
            <van-field v-model="form.value_zen" :required="true" rows="1" type="number" min="0" autosize label="折扣力度" placeholder="请输入折扣力度" clearable />
            <van-field v-model="form.day" :required="true" rows="1" type="number" min="1" autosize label="有效时间" placeholder="请输入有效时间（天）" clearable />
        </van-cell-group>
    </div>
    <div class="fixed" @click="submit">保存</div>
</div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "index.scss";
</style>
