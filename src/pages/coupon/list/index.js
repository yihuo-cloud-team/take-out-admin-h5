export default {
  name: 'list',
  layout: 'sub',
  data() {
    return {
      list: [],
      form: {
        name: '',
        type: "1",
        condition_value: 0,
        value_zen: 0,
        day: 1,
      },
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {

      try {
        const res = await this.$http.post('/coupon/temp/list');
        if (res.code >= 0) {
          this.list = res.data;
        } else {

        }
      } catch (error) { }


    },
    async del(item) {
      console.log(item)
      if (confirm('确定要删除吗') == true) {
        const res = await this.$http.post('/coupon/temp/del', item);
        if (res.code >= 0) {
          this.$toast("操作成功");
        } else {
          this.$toast("操作失败");
        }
        this.update();
      } else {
        return false;
      }
    },
    send(id){
      this.$router.push(`/coupon/get?store_id=${this.$route.query.store_id}&temp_id=${id}`)
    },
  },
  // 计算属性
  computed: {

  },
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {
    typeStr(type){
      if(type==1)return '折扣券'
      if(type==2)return '满减券'
    }
  },
  // 在实例创建完成后被立即调用
  created() { },
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() { },
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.init();
    this.$nextTick(() => { });
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() { },
  // keep-alive 组件激活时调用。
  activated() { },
  // keep-alive 组件停用时调用。
  deactivated() { },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() { },
  //Vue 实例销毁后调用。
  destroyed() { },
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() { },
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {

  },
  // 组件列表
  components: {},
};
