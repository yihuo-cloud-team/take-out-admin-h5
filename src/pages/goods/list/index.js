export default {
  name: 'list',
  layout: 'sub',
  data() {
    return {
      active: 1,
      list: [],
      loading: false,
      finished: false,
      form: {
        is_up: 1,
        name: "",
        page: 1,
        page_size: 10
      }
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
        this.loading = true
        const res = await this.$http.post('/goods/list', this.form);
        if (res.code > 0) {
          res.data.forEach(el => {
            el.goods_head_list = el.goods_head_list.map(item => this.$getUrl(item))
          })
          this.list = [...this.list, ...res.data]
          this.loading = false

        } else {
          this.finished = true
        }
      } catch (error) {}
    },
    async del(id) {
      if (confirm('确定要删除吗') == true) {
        const res = await this.$http.post('/goods/del', {
          id: id
        });
        if (res.code >= 0) {
          this.form.page = 1
          this.list = []
          this.update()
        }
      } else {
        return false;
      }
    },
    qie(){
      this.finished = false
    },
    loadMore() {
      this.form.page = ++this.form.page
      this.finished = false
      this.update()
    },
    async save(item) {
      const is_up = item.is_up ? 0 : 1

      if (is_up == 0) {
        var name = "下架"

      } else {
        var name = "上架"
      }
      this.$dialog.confirm({
        message: "确认" + name,
      }).then(async() => {
        const res = await this.$http.post('/goods/save', {
          id: item.id,
          is_up: is_up,
          goods_head_list: item.goods_head_list
        });
        if (res.code >= 0) {
          this.$toast(`${name}成功`);
          this.form.page = 1
          this.list = []
          this.update()
        }
      }).catch(() => {

      })
    

    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
  // 在实例创建完成后被立即调用
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
  mounted() {
    this.init();
    this.$nextTick(() => {});
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。
  beforeUpdate() {},
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  //Vue 实例销毁后调用。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用。
  errorCaptured() {},
  // 包含 Vue 实例可用指令的哈希表。
  directives: {},
  // 一个对象，键是需要观察的表达式，值是对应回调函数。
  watch: {
    active(newval) {
      this.form.is_up = newval
      this.form.page = 1
      this.list = []
      this.update()
    }
  },
  // 组件列表
  components: {},
};
