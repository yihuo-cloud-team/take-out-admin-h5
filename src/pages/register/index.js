export default {
    name: 'register',
    data() {
        return {
            index:1,
            phone:"",
            show:0,//
            code:"",//验证码
            time:"",//倒计时
            loading:false,
            pwd:"",
            
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            // const res = await this.$http.post('', {});
        },
        async save(){
               const res = await this.$http.post('/register/auth/getCode', {
                   phone:this.phone
               });
               if(res.code>=0){
                this.show =1
                alert(res.data.verification)
                this.time= 60
                this.loading=true
                let times = setInterval(()=>{
                    this.time-=1
                    if(this.time<=0){
                        clearInterval(times)
                        this.time="重新获取验证码"
                        this.loading=false
                    }
                },1000)
               }
    
        },
        async submit(){
            const res = await this.$http.post('/register/auth/regist', {
                phone:this.phone,
                code:this.code
            });
            if(res.code>=0){
                this.show=2
            }
        },
        async setPwd(){
            const res = await this.$http.post('/register/auth/login', {
                pwd:this.pwd,
                phone:this.phone
            });
            if(res.code>=0){
                this.$toast("注册成功")
              this.$router.push("/login")
            }else{
                this.$toast(res.msg)
            }
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