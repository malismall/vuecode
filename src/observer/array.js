let oldArrayProtoMethods = Array.prototype;
// 不能直接改写数组原有方法，只修改Vue控制的数组
// 构建一个方法
export let arrayMethods = Object.create(Array.prototype)
let methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'reverse',
  'sort'
]
methods.forEach(method => {
  arrayMethods[method] = function (...args) {  // 重写数组方法
    // 更新视图
    let result = oldArrayProtoMethods[method].call(this, ...args);
    let ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }
    if (inserted) ob.observeArray(inserted); // 对新增的每一项进行观测
    return result;
  }
})
// arrayMethods.push(1, 2, 3, 4, 5)