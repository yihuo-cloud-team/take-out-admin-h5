<template>
  <div class="default">
    <nuxt class="view-body" keep-alive />
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
  mounted() {},
  methods: {
    signOut() {
      localStorage.clear();
      this.$store.commit("user/set", null);
      this.$store.commit("power/set", []);
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
