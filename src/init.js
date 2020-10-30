// export function initMixin(Vue) {
//   Vue.prototype._init = funtion(options) {
//     console.log(options)
//   }
// }


import { initState } from './state';
export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    console.log(options)
    const vm = this;
    vm.$options = options; // 实例上有个属性$options表示用户传入的所有属性
    // 初始化状态
    initState(vm)
  }
}