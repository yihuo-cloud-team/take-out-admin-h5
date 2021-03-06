export default {
  name: 'overview',
  layout: "sub",
  data() {
    return {
      info: {},
      form: {
        times: [new Date(new Date().getFullYear(), new Date().getMonth(), 1).Format('yyyy-MM-dd'), new Date().Format('yyyy-MM-dd')]
      },
      query: {
        money_type: "1",
        account: "",
        real_name: "",
        money: ""
      },
      money: {},
      currentDate: new Date(),
      show: false,
      disabled: false,
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
      const res = await this.$http.post('finance/money', this.form);
      if (res.code >= 0) {
        this.info = res.data;
      }
      this.httpMoney();
    },
    async httpMoney() {
      const res1 = await this.$http.post('/order/userMoney', {});
      if (res1.code >= 0) {
        this.money = res1.data;
      }
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;

    },
    showPopup() {
      this.show = true;
    },
    start(e) {
      this.form.times[0] = e.Format('yyyy-MM-dd');
      this.currentDate = e;
      this.show = false;
      var monthEndDate = new Date(e.getFullYear(), e.getMonth() + 1, 0).Format('yyyy-MM-dd');
      this.form.times[1] = monthEndDate;
      this.update();
    },
    showPopup() {
      this.show = true;
    },
    async submit() {

      if (this.query.account == '') {
        this.$toast("请输入卡号或者微信号")
        return false
      }
      if (this.query.real_name == '') {
        this.$toast("请输入真实姓名")
        return false
      }
      if (this.query.money == '') {
        this.$toast("请输入金额")
        return false
      }
      this.disabled = true;
      await this.$nextTick();
      let toast = this.$toast.loading({
        overlay: true,
        message: '申请中'
      });
      const res = await this.$http.post('/order/getMoney', this.query);
      if (res.code >= 0) {
        this.$toast('操作成功')
        this.query.account = '';
        this.query.real_name = '';
        this.query.money = '';
        await this.httpMoney();
   
        toast.clear();
      } else {
        toast.clear();
        this.$toast(res.msg)
      }
      this.disabled = false;
    },
    tixian() {
      this.$router.push('/user/bill?type=2')
    }
  },
  // 计算属性
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表。
  filters: {},
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
  watch: {},
  // 组件列表
  components: {},
};
