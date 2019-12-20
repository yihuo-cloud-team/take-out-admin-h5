export default {
  name: 'edit',
  layout: 'sub',
  data() {
    return {
      show: false,
      show1: false,
      form: {
        logo: "",
        name: "",
        info: "",
        week: [],
        state: 1,
        store_class: "",
        phone: "",
        start_time: '12:00',
        end_time: '12:00',
        store_img: [],
        store_bg: ""
      },
      start_time: '12:00',
      end_time: '12:00',
      week: [
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
      ]
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {

      const res = await this.$http.post('/store/info', {});
      if (res.code >= 0) {
        this.form = res.data
      }


    },
    async submit() {
      const res = await this.$http.post('/store/save', this.form);
      if (res.code >= 0) {
        this.$toast("添加成功")
        this.$router.go(-1)

      }
    },
    // bianse(index) {
    //   this.checkbox[index].check = !this.checkbox[index].check
    //   if (this.checkbox[index].check) {
    //     this.week = this.week.push(this.checkbox[index].name)
    //   } else {

    //   }
    // },
    showPopup() {
      this.show = true;
    },
    showPopup1() {
      this.show1 = true;
    },
    filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0)
      }
      return options;
    },
    start(e) {
      this.form.start_time = e
      this.start_time = e

      this.show = false
    },
    end(e) {
      this.form.end_time = e
      this.end_time = e
      this.show1 = false
    },
    // push(we) {
    //   if (this.form.week.indexOf(we) < 0) {
    //     this.form.week.push(we);
    //   } else {
    //     this.form.week.splice(this.form.week.indexOf(we), 1);
    //   }
    // }
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
  watch: {},
  // 组件列表
  components: {},
};
