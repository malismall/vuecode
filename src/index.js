// import { initMixin } from "./init";
// function Vue(options) {
//   this._init(options);//当用户new vue时就调用init方法进行初始化
//   // console.log(options)

// }
// initMixin(Vue);




// debugger;
// let a = 1;
// let b = 2;
// let c = a + b;
// console.log(a + b)
// export {
//   a,
//   b
// }
// export default Vue

import { initMixin } from './init';

function Vue(options) {
  this._init(options);
}
initMixin(Vue); // 给原型上新增_init方法
export default Vue;