import Vue from 'vue';

let Url = {
  // serverUrl: 'http://offapi.local.com/admin',
  // serverUrl: 'https://api.take-out.yihuo-cloud.com/admin',//生产环境
  serverUrl: 'https://api.take-out.yihuo-cloud.cn/admin',//测试环境
  // serverUrl: 'http://192.168.0.143:8081/admin',//李子龙 
  // serverUrl: 'http://127.0.0.1:12138/admin',//李传浩的本地
  // serverUrl: 'http://192.168.0.122:82/admin',//吴杰
  // serverUrl: 'https://api.take-out.yihuo-cloud.cn/admin',//测试环境

  // uploadUrl: '',
  uploadUrl: 'https://api.take-out.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.take-out.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


