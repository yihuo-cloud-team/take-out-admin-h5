<template>
  <div class="default">
    <nuxt class="view-body" />
    <van-tabbar route v-model="active" active-color="rgba(255, 144, 32, 1)" :fixed="false">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/store/info" icon="shop-o">店铺</van-tabbar-item>
      <van-tabbar-item replace to="/order/list" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/user/info" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "root",
  data() {
    return {
      active: 0
    };
  },
  mounted() {
    // if (!localStorage.jwt) {
    //   this.$router.replace("/login");
    // }
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.replace("/login");
    }
  },
  computed: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
@import "default.scss";
</style>
