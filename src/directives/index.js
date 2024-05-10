import slide from './slide'
// 自定义指令
const directives = {
  slide
}

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}
