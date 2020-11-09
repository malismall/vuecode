import { arrayMethods } from "./array";

class Observer {
  constructor(value) { // 需要对value属性重新定义
    Object.defineProperty(value, '__ob__', {
      enumerable: false,
      configurable: false,
      value: this
    });
    // value可能是对象可能是数组
    if (Array.isArray(value)) {
      // 重写方法更新逻辑 push shift
      value._proto_ = arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
    } else {
      this.walk(value);
    }
  }
  walk(data) {
    // 将对象中的所有key，重新定义成响应式
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);

    })
  }
  observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      observe(value[i]);
    }
  }
}

export function defineReactive(data, key, value) {
  // 对象递归拦截
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue == value) return;
      observe(newValue); //如果是对象递归调用
      value = newValue
    }
  })
}

export function observe(data) {
  // console.log(data, '----------');
  if (typeof data !== 'object' || data == null) {
    return;
  }
  return new Observer(data);
}