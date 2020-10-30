import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';

export default { //用于打包的配置
  input: './src/index.js',
  output: {
    file: 'dist/vue.js',
    name: 'Vue', // 打包后的全局变量的名字
    format: 'umd', // 模块化类型
    sourcemap: true //es6-es5
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' //这个目录不需要转换
    }),
    serve({
      open: true,
      openPage: "/public/index.html",
      port: 3000,
      contentBase: ''
    })
    // process.env.ENV === 'development' ? serve({
    //   open: true,
    //   openPage: '/public/index.html',
    //   port: 3000,
    //   contentBase: ''
    // }) : null
  ]
}