import {add, print} from './js/mathUtil.js'

let a = 1
let b = 2
print('a+b=' + add(a+b))

import Vue from 'vue'
import App from './vue/App'

const app = new Vue({
    el: '#app',
    template: '<div><App :mes="message"></App></div>',
    components: {
      App
    },
    data: {
        message: 'hello webpack-vue2'
    }
})

require('./css/common.css')
require('./css/special.less')