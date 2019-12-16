import Vue from 'vue';

let Url = {
  // serverUrl: 'http://offapi.local.com/admin',
  // serverUrl: 'https://api.yihuo-cloud.com/admin',//生产环境
  serverUrl: 'http://192.168.0.143:8081/admin',//李子龙 
  // serverUrl: 'http://local.api.yihuo-cloud.com/admin',//李传浩的本地
  // serverUrl: 'http://192.168.0.122/admin',//吴杰1
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.take-out.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


