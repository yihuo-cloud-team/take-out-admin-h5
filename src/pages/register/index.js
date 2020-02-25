export default {
  name: 'register',
  layout: 'root',
  data() {
    return {
      index: 1,
      phone: "",
      show: 0, //
      code: "", //验证码
      time: "", //倒计时
      loading: false,
      pwd: "",
      pwd1: "",
      checked:false
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.update();
    },
    // 用于更新一些数据
    async update() {
        if(localStorage.phone!='null'){
            this.phone = localStorage.phone
        }
      // const res = await this.$http.post('', {});
    },
    tiaozhuan() {
        localStorage.phone = this.phone
        this.$router.push("/xieyi");
    },
    async save() {
      if (this.phone.length != 11) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!this.checked) {
        this.$toast('请同意用户协议')
        return false 
      }
      localStorage.phone = null;
      const res = await this.$http.post('/code/get', {
        phone: this.phone
      });
      if (res.code >= 0) {
        this.show = 1;
        this.time = 60;
        this.loading = true;
        let times = setInterval(() => {
          this.time -= 1;
          if (this.time <= 0) {
            clearInterval(times);
            this.time = "重新获取验证码";
            this.loading = false;
          }
        }, 1000)
      } else {
        this.$toast(res.msg);
      }

    },
    async submit() {
      if (this.pwd != this.pwd1) {
        this.$toast("密码不一致");
        return false;
      }
      const res = await this.$http.post('/auth/reg', {
        phone: this.phone,
        code: this.code,
        pwd: this.pwd,

      });
      if (res.code >= 0) {
        this.$toast("保存成功");
        this.$router.push("/login");
      } else {
        this.$toast(res.msg);
      }
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
  watch: {},
  // 组件列表
  components: {},
};
