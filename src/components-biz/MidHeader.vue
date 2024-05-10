<template>
  <div class="mid-header">
    <div class="header-data">
      <div class="data-item">
        <div class="data-inner" :style="{ backgroundImage: `url(${require('@/assets/m-1.png')})` }">
          <div class="value-box">
            <div class="value cf-font-bold ">{{ data.profitTotal | addCommasToNumber }}</div>
            <div class="label">本年度累计交易总额（元）</div>
          </div>
        </div>
      </div>
      <div class="data-item">
        <div class="data-inner" :style="{ backgroundImage: `url(${require('@/assets/m-2.png')})` }">
          <div class="value-box">
            <div class="value cf-font-bold ">{{ data.profitSalesCount | addCommasToNumber }}</div>
            <div class="label">本年度累计订单总量</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-options-container">
      <div class="header-options-wrap">
        <dv-border-box-1>
          <div class="options">
            <div class="item" :style="{ backgroundImage: `url(${require('@/assets/m-3.png')})` }">
              <div class="value-box">
                <div class="label">用户总数</div>
                <div class="value cf-font-bold">{{ data.usercount | addCommasToNumber }}</div>
              </div>
            </div>
            <div class="item" :style="{ backgroundImage: `url(${require('@/assets/m-3.png')})` }">
              <div class="value-box">
                <div class="label">团长总数</div>
                <div class="value cf-font-bold">{{ data.teamcount | addCommasToNumber }}</div>
              </div>
            </div>
            <div class="item" :style="{ backgroundImage: `url(${require('@/assets/m-3.png')})` }">
              <div class="value-box">
                <div class="label">百业小店总数</div>
                <div class="value cf-font-bold">{{ data.shopcount | addCommasToNumber }}</div>
              </div>
            </div>
            <div class="item" :style="{ backgroundImage: `url(${require('@/assets/m-3.png')})` }">
              <div class="value-box">
                <div class="label">小区总数</div>
                <div class="value cf-font-bold">{{ data.sitecount | addCommasToNumber }}</div>
              </div>
            </div>
          </div>
        </dv-border-box-1>
      </div>
    </div>
  </div>
</template>
<script>
import { GetPlatformAllDataStatistics } from '@/api/index.js'
export default {
  data() {
    return {
      data: {
        profitTotal: 0,
        profitSalesCount: 0, //本年度累计订单总量
        usercount: 0, //用户数量
        teamcount: 0, // 团长数量
        sitecount: 0, // 团购站点数量
        shopcount: 0 // 百业小店数量
      }
    }
  },
  created() {
    this.GetPlatformAllDataStatistics()
  },
  methods: {
    GetPlatformAllDataStatistics() {
      GetPlatformAllDataStatistics().then(ret => {
        this.data = ret.data
      })
    }
  }
}
</script>
<style scoped lang="scss">
.header-data {
  display: flex;
  margin-bottom: 4px;

  .data-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .data-inner {
      width: 290px;
      height: 94px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;

      .value-box {
        position: absolute;
        top: 50%;
        left: 130px;
        transform: translateY(-50%);

        .value {
          font-size: 26px;
          color: #ffffff;
          text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
          margin-bottom: 8px;
        }

        .label {
          font-size: 12px;
          color: #ffffff;
          text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
        }
      }
    }
  }
}
.header-options-container {
  padding: 0 28px;
  height: 90px;
  .header-options-wrap {
    width: 200%;
    height: 180px;
    transform: scale(0.5);
    transform-origin: left top;

    .options {
      display: flex;
      gap: 94px;
      height: 100%;
      padding: 32px;
      .item {
        height: 100%;
        flex: 1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: relative;
        .value-box {
          position: absolute;
          top: 50%;
          left: 60px;
          transform: translateY(-50%);

          .value {
            font-size: 36px;
            color: #ffffff;
            text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
            margin-bottom: 8px;
          }

          .label {
            font-size: 20px;
            color: #ffffff;
            text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
          }
        }
      }
    }
  }
}
</style>
