import Vue from 'vue'
Vue.filter('arrToStr', function (value) {
    if (!value) return '';
    return value.join(',');
})
Vue.filter('tofixed', function (value) {
    if (!value) return 0;
    return (value * 1).toFixed(2);
})
Vue.filter('nullToText', function (v, a) {
    let newV = v;
    if (typeof v == 'undefined') {
        newV = '--';
    }
    if (v === null) {
        newV = '--';
    }
    if (typeof v == 'string' && v.length <= 0) {
        newV = '--';
    }

    if (typeof a != 'undefined' && newV == '--') {
        newV = a;
    }

    return newV;

})