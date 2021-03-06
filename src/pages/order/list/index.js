export default {
  name: 'list',
  data() {
    return {
      active: '',
      loading: false,
      finished: false,
      total: 0,
      query: {
        app_id: '',
        is_up: '',
        page: 1,
        page_size: 10,
        title: '',
        type: 1,
        state: ''
      },
      list: [],
      info: {}
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.getTotal();
      if (!this.isAdd) {
        if(typeof this.$route.query.state!='undefined'){
          this.active = parseFloat(this.$route.query.state);
          this.query.state = this.active;
        }else{
          this.query.state = '';
        }

      }
    },
  
    // 用于更新一些数据
    async update() {
      try {
        if(this.finished) return ;
        this.loading = true;

        const res = await this.$http.post('/order/list', this.query);
        console.log(res)
        if (res.code > 0) {
          this.list = [...this.list, ...res.data];
        } 
        if(this.list.length>=res.total){
          this.finished = true;
        }
        this.loading = false;
        this.query.page++;
      } catch (error) {}
    },
    async getTotal() {
  
      const res = await this.$http.post('/order/total', {});
      if (res.code >= 0) {
        this.info = res.data
      }
    }
  },
  // 计算属性
  computed: {
    // isAdd() {
    //   return typeof this.$route.query['state'] == 'undefined';
    // }
  },
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {
    order(val){
      return val.slice(-5)
    }
  },
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
  
      this.query.state = newval;
      this.query.page = 1;
      this.finished = false;
      this.list = [];
      this.update();
    }
  },
  // 组件列表
  components: {},
};
