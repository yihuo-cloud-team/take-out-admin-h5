export default {
    name: 'edit',
    layout: 'sub',
    data() {
        return {
            form:{
                name:'',
                type:1,
                condition_value:0,
                value_zen:0,
                day:1,
                stock:0,
                num:null,
            },
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            message:123,
        };
    },
    methods: {
        // 用于初始化一些数据
        init() {
            this.update();
        },
        // 用于更新一些数据
        async update() {
            if(!this.isAdd){
                const res = await this.$http.post('/coupon/temp/info', { id: this.$route.query.id });
                if (res.code >= 0) {    
                    this.form = res.data;
                }
            }
        },
       async submit(){
            try {
                const res = await this.$http.post('/coupon/temp/save', this.form);
                if (res.code >= 0) {
                    this.$toast("操作成功");
                    this.$router.go(-1);
                }
            } catch (error) {
                return;
            }
        },
    },
    // 计算属性
    computed: {
        isAdd() {
            return typeof this.$route.query.id == 'undefined';
        },
        type_value_zen(){
            if(this.form.type<=1){
                if(this.form.value_zen>1){
                    this.$toast("折扣券力度最大为1(例:折扣力度为0.1时折扣为1折)");
                    this.form.value_zen= 1;
                }
            }
        },
    },
    // 包含 Vue 实例可用过滤器的哈希表。
    filters: {
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
    watch: {},
    // 组件列表
    components: {},
};