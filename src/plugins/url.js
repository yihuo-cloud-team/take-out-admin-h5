import Vue from 'vue';

let Url = {
  // serverUrl: 'http://offapi.local.com/admin',
  // serverUrl: 'https://api.yihuo-cloud.com/admin',//生产环境
  // serverUrl: 'http://kido.api.yihuo-cloud.com/admin',//李子龙 
  // serverUrl: 'http://local.api.yihuo-cloud.com/admin',//李传浩的本地
  // serverUrl: 'http://jie.api.yihuo-cloud.com/admin',//吴杰1
  serverUrl: 'http://192.168.0.122/admin',//吴杰2
  // uploadUrl: '',
  uploadUrl: 'https://api.yihuo-cloud.com',
  // imageUrl: '',
  imageUrl: 'https://api.yihuo-cloud.com',
}

Vue.prototype.$Url = Url;

export default Url;


