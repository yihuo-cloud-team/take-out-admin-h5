export default {
    name: 'get',
    layout: "sub",
    data() {
        return {
            src: '',
            qrcode1: '',
            form: {},
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
            this.qrcode();
        },
        // 用于更新一些数据
        async update() {
            const info = await this.$http.post('/coupon/temp/info', { id: this.$route.query.temp_id });
            if (info.code >= 0) {
                this.form = info.data;
                console.log(this.form)
            }
            const res = await this.$http.post('/store/info', {});
            if (res.code >= 0) {
                this.src = res.data.logo;
            };
        },
        qrcode() {
            this.qrcode1 = new QRCode(this.$refs.Qrcode, {
                // text: `https://h5.take-out.yihuo-cloud.com/`,
                text: `https://h5.take-out.yihuo-cloud.com/coupon/getEnd?temp_id=${this.$route.query.temp_id}`,
                width: 112,
                height: 112,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            })
        },
    },
    // 计算属性
    computed: {
        conditionValue(){
            if(this.form.condition_value<=0){
                return '无使用门槛'
            }else{
                return '满'+this.form.condition_value+'元可用'
            }
        }
    },
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