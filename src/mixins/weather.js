import { GetDistrictData, GetWeatherInfo } from '@/api/map'
let timer = null
export default {
  data() {
    return {
      weatherInfo: null
    }
  },
  created() {
    this.getWeatherInfo()
    timer = setInterval(() => {
      this.getWeatherInfo()
    }, 1000 * 60 * 60)
  },
  methods: {
    getWeatherInfo() {
      GetDistrictData().then(
        ret => {
          const { adcode } = ret
          GetWeatherInfo({
            city: adcode
          }).then(
            ret => {
              this.weatherInfo = ret.lives?.[0]
            },
            () => {
              clearInterval(timer)
              timer = null
            }
          )
        },
        () => {
          clearInterval(timer)
          timer = null
        }
      )
    }
  }
}
