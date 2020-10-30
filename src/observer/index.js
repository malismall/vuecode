class Observer {
  constructor(value) { // 需要对value属性重新定义
    this.walk(value);
  }
  walk(data) {
    // 将对象中的所有key，重新定义成响应式
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key]);

    })
    // let keys = Object.keys(data);
    // for(let i = 0; i < keys.length; i++){
    //     let key = keys[i];
    //     let value = data[key];
    //     defineReactive(data,key,value);
    // }
  }
}

export function defineReactive(data, key, value) {
  // observe(value);
  Object.defineProperty(data, key, {
    get() {
      return value
    },
    set(newValue) {
      if (newValue == value) return;
      // observe(newValue);
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