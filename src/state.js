import { observe } from './observer/index.js'
export function initState(vm) {
  //将所有数据都定义在VM属性上，并且后续更改需要触发视图更新
  const opts = vm.$options; //获取用户属性

  if (opts.data) {
    // 数据初始化
    initData(vm);
  }

}
function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue
    }
  })
}
function initData(vm) {
  console.log(vm.$options.data)
  // 数据劫持Object.defineProperty
  let data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data

  // 将_data中的数据全部放到vm上
  for (let key in data) {
    proxy(vm, '_data', key)
  }
  // 观测数据
  observe(data);
}