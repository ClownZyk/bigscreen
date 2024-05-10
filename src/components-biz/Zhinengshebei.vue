<template>
  <div class="box">
    <div class="top">
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon5-1.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.yearSalesTotal | addCommasToNumber }}</div>
          <div class="label">累计交易额（元）</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon5-2.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.monthSalesTotal | addCommasToNumber }}</div>
          <div class="label">当月交易额（元）</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon5-3.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.daySalesTotal | addCommasToNumber }}</div>
          <div class="label">当日交易额（元）</div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-item">
        <div class="inner">
          共<span class="value">{{ data?.yearSalesCount | addCommasToNumber }}</span
          >次交易
        </div>
      </div>
      <div class="mid-item">
        <div class="inner">
          共<span class="value">{{ data?.monthSalesCount | addCommasToNumber }}</span
          >次交易
        </div>
      </div>
      <div class="mid-item">
        <div class="inner">
          共<span class="value">{{ data?.daySalesCount | addCommasToNumber }}</span
          >次交易
        </div>
      </div>
    </div>
    <div class="main">
      <div class="tabs">
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon5-4.png')})` }">
          <div class="value-box">
            <div class="label">智能柜（台）</div>
            <div class="val cf-font">128</div>
          </div>
        </div>
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon5-4.png')})` }">
          <div class="value-box">
            <div class="label">客单价（元）</div>
            <div class="val cf-font">6.3</div>
          </div>
        </div>
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon5-4.png')})` }">
          <div class="value-box">
            <div class="label">离线数（台）</div>
            <div class="val cf-font">12</div>
          </div>
        </div>
      </div>
      <div class="charts">
        <div class="charts-title">产品销售TOP5</div>
        <div class="charts-box">
          <div class="charts-item" v-for="(item, index) in dataList" :key="item.id">
            <div class="charts-item-value no-ellipsis">{{ item.name }}</div>
            <div class="charts-item-bar">
              <div class="bar-inner" :style="{ height: `${(item.value / maxVal) * 100}%` }"></div>
            </div>
            <div class="charts-item-index">TOP{{ index + 1 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getClosetBigInt } from '@/utils/utils.js'
export default {
  props: ['data'],
  data() {
    return {
      dataList: [],
      maxVal: 0
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.dataList = [
          {
            id: '1',
            name: 'paul frank 保温杯500ml PF098 冰河蓝',
            address: '南京市',
            value: Math.round(Math.random() * 20000 * 100) / 100
          },
          {
            id: '2',
            name: '大益普洱茶一箱24罐（仅含运费）',
            address: '南京市',
            value: Math.round(Math.random() * 20000 * 100) / 100
          },
          {
            id: '3',
            name: 'paul frank 直饮塑料杯560ml PF639 仙踪绿',
            address: '南京市',
            value: Math.round(Math.random() * 20000 * 100) / 100
          },
          {
            id: '4',
            name: 'paul frank 办公玻璃杯HC209 420ml 黑色',
            address: '南京市',
            value: Math.round(Math.random() * 20000 * 100) / 100
          },
          {
            id: '5',
            name: '泰国龙眼 750g',
            address: '南京市',
            value: Math.round(Math.random() * 20000 * 100) / 100
          }
        ]
        this.maxVal = getClosetBigInt(Math.max(...this.dataList.map(item => item.value)))
        setInterval(() => {
          this.dataList = [
            {
              id: '1',
              name: 'paul frank 保温杯500ml PF098 冰河蓝',
              address: '南京市',
              value: Math.round(Math.random() * 20000 * 100) / 100
            },
            {
              id: '2',
              name: '大益普洱茶一箱24罐（仅含运费）',
              address: '南京市',
              value: Math.round(Math.random() * 20000 * 100) / 100
            },
            {
              id: '3',
              name: 'paul frank 直饮塑料杯560ml PF639 仙踪绿',
              address: '南京市',
              value: Math.round(Math.random() * 20000 * 100) / 100
            },
            {
              id: '4',
              name: 'paul frank 办公玻璃杯HC209 420ml 黑色',
              address: '南京市',
              value: Math.round(Math.random() * 20000 * 100) / 100
            },
            {
              id: '5',
              name: '泰国龙眼 750g',
              address: '南京市',
              value: Math.round(Math.random() * 20000 * 100) / 100
            }
          ]
        }, 5000)
      }, 100)
    }
  }
}
</script>
<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.top {
  display: flex;
  &-item {
    flex: 1;
    height: 48px;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    .value-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .label {
        white-space: nowrap;
        font-size: 12px;
        color: #ffffff;
        text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
        transform-origin: center;
        transform: scale(0.87);
      }

      .val {
        font-size: 12px;
        color: #ffffff;
        line-height: 1;
        background: linear-gradient(180deg, #ffffff 0%, #a2ddff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}

.mid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4px;
  &-item {
    flex: 1;
    line-height: 20px;
    display: flex;
    .inner {
      background: linear-gradient(180deg, #063466 0%, #006ab7 100%);
      padding: 0 10px;
      font-size: 12px;
      color: #eeeeee;
      .value {
        font-size: 12px;
        color: #ffffff;
        text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
      }
    }
    &:nth-child(1) {
      flex-direction: row-reverse;
    }
    &:nth-child(2) {
      .inner {
        width: 100%;
        text-align: center;
      }
    }
  }
}

.main {
  display: flex;
  .tabs {
    flex: 0 0 142px;
    .item {
      position: relative;
      width: 100%;
      height: 36px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-size: contain;
      margin-top: 16px;
      .value-box {
        position: absolute;
        inset: 0;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          white-space: nowrap;
          font-size: 12px;
          color: #ffffff;
          text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
          transform-origin: left center;
          transform: scale(0.9);
        }

        .val {
          font-size: 12px;
          color: #ffffff;
          line-height: 1;
          background: linear-gradient(180deg, #ffffff 0%, #a2ddff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .charts {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    padding: 0 12px;

    .charts-title {
      font-size: 12px;
      color: #159aff;
      text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
      background-color: #023164;
      padding: 2px 8px;
      margin-bottom: 8px;
    }

    .charts-box {
      flex: 1;
      display: flex;
      .charts-item {
        display: flex;
        flex-direction: column;
        flex: 1;
        .charts-item-value {
          width: 40px;
          font-size: 12px;
          color: #ffffff;
          text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
          text-align: center;
          margin-bottom: 4px;
        }

        .charts-item-bar {
          flex: 1;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          .bar-inner {
            width: 18px;
            height: 0;
            background: linear-gradient(180deg, #66c9ff 0%, #07229d 100%);
            transition: all 0.3s;
          }
        }

        .charts-item-index {
          font-size: 12px;
          color: #ffffff;
          text-align: center;
          margin-top: 4px;
        }
      }
    }
  }
}

.footer {
  display: flex;
  .item {
    flex: 1;
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    text-align: center;
  }
}
</style>
