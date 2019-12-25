export default {
  name: 'bill',
  data() {
    return {
      form: {
        value: "",
        time: [],
        page: 1,
        page_size: 10
      },
      list: [{
          name: "收入",
          add_time: "2019-12-10",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "支出",
          add_time: "2019-12-11",
          statu: "失败",
          price: "200",
          info: "提现不符合规定"
        },
        {
          name: "收入",
          add_time: "2019-12-12",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "支出",
          add_time: "2019-12-13",
          statu: "成功",
          price: "300",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-14",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-15",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-15",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-15",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-15",
          statu: "成功",
          price: "18.8",
          info: ""
        },
        {
          name: "收入",
          add_time: "2019-12-15",
          statu: "成功",
          price: "18.8",
          info: ""
        }

      ],
      active: 1,
      loading: false,
      finished: false,
      show: false,
      option1: [{
          text: '全部',
          value: ""
        },
        {
          text: '收入',
          value: 0
        },
        {
          text: '支出',
          value: 1
        }
      ],
      currentDate: new Date()
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      const res = await this.$http.post('', {});
    },
    showPopup() {
      this.show = true
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;

    },
    LoadMore() {
      this.form.page = ++this.form.page
      this.finished = false
      this.update()
    },
    select(e) {
      this.form.value = e
    },
    start(e) {
      this.form.time[0] = e.Format('yyyy-MM-dd');
      this.currentDate = e;
      this.show = false;
      var monthEndDate = new Date(new Date().getFullYear(), e.getMonth() + 1, 0).Format('yyyy-MM-dd');
      this.form.time[1] = monthEndDate
    },

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

      this.form.page = 1
      this.list = []
      this.update()
    }
  },
  // 组件列表
  components: {},
};
