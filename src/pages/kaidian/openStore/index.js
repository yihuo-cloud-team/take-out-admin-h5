import AreaList from '../../../plugins/lib/area'
export default {
  name: 'openStore',
  layout: "sub",
  data() {
    return {
      kai:false,
      show: false,
      show1: false,
      shows: false,
      storeClass:false,
      form: {
        week: [],
        state: 0,
        store_class: "", //门店类型
        start_time: '9:00', //营业开始时间
        end_time: '20:00', //营业最后时间
        store_img: [], //门店图片
        store_bg: "", //门店背景图
        subsidy: 0, //补贴价格
        label: [],
        name: '', //门店名称
        logo: '', //门店图片
        info: '', //门店描述
        x: "", //纬度
        y: "", //经度
        contacts: "", //门店联系人
        phone: "", //门店联系人电话号码
        id_card: "", //联系人身份证
        username: "", //达达商家app账号
        password: "", //达达商家app密码
        p: "", //省
        c: "", //市
        a: "", //区
        address: "", //门店详细地址
        business:"",//营业执照
        licence:"",//食品生产许可证
        minimum_price:0,//起送价格
        store_class_id:"",//门店分类
      },
      start_time: '9:00',
      end_time: '20:00',
      week: [
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
      ],
      title: [],
      position: {
        x: 0.00,
        y: 0.00,
      },
      areaList: [],
      selecarea: [],
      classList:[]
    };
  },
  methods: {
    // 用于初始化一些数据
    init() {
      this.areaList = AreaList
      this.update();
      this.httpClassList();
    },
    // 用于更新一些数据
    async update() {
    },
    async httpClassList(){
      const res = await this.$http.post('/store/store/class', {});
      if(res.code>=0){
        this.classList = res.data;
      }
    },
    onConfirm(value) {
      this.form.store_class = value.name;
      this.storeClass = false;
      this.form.store_class_id = value.id;
    },
    onCancel() {
      this.storeClass = false;
    },
    async submit() {
      if (this.form.logo == '') {
        this.$toast("请添加门店logo");
        return false;
      };
      if (this.form.name == '') {
        this.$toast("店铺名称不得为空");
        return false;
      };
      if (this.form.store_class_id == '') {
        this.$toast("请选择门店分类");
        return false;
      };
      if (this.form.p == '') {
        this.$toast("省市区不得为空");
        return false;
      };
    
      if (this.form.contacts == '') {
        this.$toast("联系人不得为空");
        return false;
      };
      if (this.form.phone == '') {
        this.$toast("联系电话不得为空");
        return false;
      };
      if (this.form.phone.length != 11) {
        this.$toast("联系电话格式不对");
        return false;
      };
      if(this.form.x =='' ||this.form.x ==0){
        this.$toast("请选择定位地址");
        return false;
      };
      if (this.form.store_bg == '') {
        this.$toast("请添加logo背景图")
        return false
      };
      if (this.form.store_img.length==0) {
        this.$toast("请添加商家图片");
        return false;
      };
      if (this.form.business == '') {
        this.$toast("请添加营业执照")
        return false
      };
      if (this.form.licence == '') {
        this.$toast("请添加食品生产许可证")
        return false
      };
      if (this.form.week.length == 0) {
        this.$toast("营业日期不得为空");
        return false;
      };
      const res = await this.$http.post('/store/save', this.form);
      if (res.code >= 0) {
        this.$toast("添加成功");
        this.$router.go(-1);
      }else{
        this.$toast(res.msg);
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
        return options.filter(option => option % 5 === 0);
      }
      return options;
    },
    start(e) {
      this.form.start_time = e;
      this.start_time = e;

      this.show = false;
    },
    select(e) {
      this.selecarea = e;
      console.log(e)
      this.form.p = e[0].name;
      this.form.c = e[1].name;
      this.form.a = e[2].name;
      this.kai = false;
    },
    end(e) {
      this.form.end_time = e;
      this.end_time = e;
      this.show1 = false;
    },
    del(item, index) {
      this.$dialog.confirm({
        message: '确认删除',
      }).then(() => {
        item.splice(index, 1)
      }).catch(() => {

      });
    },
    add() {
      if (this.title == '') {
        this.$toast("标签不得为空");
        return false;
      }
      this.form.label.push(this.title);
      this.title = '';
      this.shows = false;
    }
    // push(we) {
    //   if (this.form.week.indexOf(we) < 0) {
    //     this.form.week.push(we);
    //   } else {
    //     this.form.week.splice(this.form.week.indexOf(we), 1);
    //   }
    // }
  },
  // 计算属性
  computed: {
    area() {
      if (this.selecarea.length < 1) return '省市区选择'
      return `${this.selecarea[0].name} ${this.selecarea[1].name} ${this.selecarea[2].name}`
    }
  },
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
    position(x, y) {
      this.form.x = x.x
      this.form.y = x.y

    }
  },
  // 组件列表
  components: {},
};
