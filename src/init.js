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
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  }
  Vue.prototype.$mount = function (el) {
    const vm = this;
    const options = vm.$options;
    el = document.querySelector(el);
    // 如果没有render方法
    if (!options.render) {
      let template = options.template;
      // 如果没有模板但有el
      if (!template && el) {
        template = el.outerHTML;
        console.log(template)
      }
    }
  }
}