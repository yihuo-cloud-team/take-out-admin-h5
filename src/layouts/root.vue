<template>
  <div class="root">
    <h1>Root</h1>
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: "root",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  watch: {
    $route(to) {},
    active(v) {}
  }
};
</script>
<style lang="scss" scoped>
</style>
