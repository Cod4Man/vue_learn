// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            {
                name: 'zhangsan',
                age: 18
            },
            {
                name: 'lisi',
                age: 28
            }
        ]
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        }
    },
    actions: {
      asyncIncrement(context, payout) {
          return new Promise((res, rej) => {
              setTimeout(() => {
                  context.commit('increment')
                  res('success')
              }, 1000)
          })
      }
    },
    getters: {
        large20(state) {
            return state.students.filter(stu => stu.age > 20)
        },
        large20Length(state, getters) {
            return getters.large20.length
        },
        largeCusAge(state) {
            // 返回一个函数供调用
            return age => state.students.filter(stu => stu.age > age)
        }
    }
})


export default store