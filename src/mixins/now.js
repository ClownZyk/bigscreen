const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export default {
  data() {
    return {
      now: Date.now(),
      day: day[new Date().getDay()]
    }
  },
  mounted() {
    setInterval(() => {
      this.now = Date.now()
      this.day = day[new Date().getDay()]
    }, 1000)
  }
}
