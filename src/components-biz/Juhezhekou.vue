<template>
  <div class="box">
    <div class="top">
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon1.png')})` }">
        <div class="value-box">
          <div class="label">累计交易额（元）</div>
          <div class="val cf-font">{{ data?.yearSalesTotal | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon2.png')})` }">
        <div class="value-box">
          <div class="label">当月交易额（元）</div>
          <div class="val cf-font">{{ data?.monthSalesTotal | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon3.png')})` }">
        <div class="value-box">
          <div class="label">当日交易额（元）</div>
          <div class="val cf-font">{{ data?.daySalesTotal | addCommasToNumber }}</div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-item">
        <span class="label">订单数：</span><span class="value">{{ data?.yearSalesCount | addCommasToNumber }}</span>
      </div>
      <div class="mid-item">
        <span class="label">订单数：</span><span class="value">{{ data?.monthSalesCount | addCommasToNumber }}</span>
      </div>
      <div class="mid-item">
        <span class="label">订单数：</span><span class="value">{{ data?.daySalesCount | addCommasToNumber }}</span>
      </div>
    </div>
    <div class="main" v-slide="1.2">
      <div class="wrap">
        <div class="item" v-for="(item, index) in dataList" :key="item._id">
          <div class="info">
            <span class="index">{{ index + 1 }}</span>
            <div class="name">{{ item.title }}</div>
            <div class="value">{{ item.salesTotal }}</div>
          </div>
          <div class="progress">
            <div class="progress-bar" :style="{ width: `${(item.salesTotal / maxVal) * 100}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getClosetBigInt } from '@/utils/utils.js'
import { GetPlatformSalesDataStatistics } from '@/api'
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
      const param = {
        pageIndex: 1,
        pageSize: 5,
        source: 1,
        isPage: true,
        isOrder: true,
        isAsc: true,
        date: 0
      }
      GetPlatformSalesDataStatistics(param).then(ret => {
        this.dataList = ret.data
        this.maxVal = getClosetBigInt(Math.max(...this.dataList.map(item => item.salesTotal)))
      })
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
  gap: 0 10px;
  &-item {
    flex: 1;
    height: 38px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    .value-box {
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
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

.mid {
  display: flex;
  gap: 0 10px;
  &-item {
    flex: 1;
    background: linear-gradient(180deg, #063466 0%, #006ab7 100%);
    line-height: 20px;
    padding: 0 10px;

    .label {
      color: #29a7eb;
      font-size: 12px;
    }

    .value {
      font-size: 12px;
      color: #ffffff;
    }
  }
}

.main {
  flex: 1;
  overflow: hidden;
  margin-top: 8px;

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    .item {
      border: 1px solid #2a4160;
      padding: 6px 6px 0;

      .info {
        display: flex;
        .index {
          font-size: 12px;
          color: #ffffff;
          border: 1px solid;
          padding: 0 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.87);
          transform-origin: left center;
        }

        .name {
          font-size: 12px;
          flex: 1;
          color: #ffffff;
          margin-left: 12px;
          transform: scale(0.87);
          transform-origin: left center;
        }

        .value {
          font-size: 12px;
          color: #d0deee;
          display: flex;
          // &::after {
          //   content: '交易额';
          //   transform-origin: 0 center;
          //   transform: scale(0.67);
          // }
        }
      }

      .progress {
        display: flex;
        align-items: center;
        height: 10px;
        padding: 8px 0;
        position: relative;
        &::before {
          content: '';
          width: 100%;
          height: 2px;
          background-color: #d0deee;
        }
        .progress-bar {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 6px;
          border-radius: 12px;
        }
      }
      &.item:nth-child(3n + 1) {
        .info {
          --color: #ffc100;
          .index {
            border-color: #ffc100;
            background-color: rgba(#ffc100, 0.5);
          }
        }
        .progress-bar {
          background-image: linear-gradient(270deg, #00efff 0%, #00527d 100%);
        }
      }
      &.item:nth-child(3n + 2) {
        .info {
          .index {
            border-color: #ff7734;
            background-color: rgba(#ff7734, 0.5);
          }
        }
        .progress-bar {
          background-image: linear-gradient(270deg, #9fe6b8 0%, #00527d 100%);
        }
      }
      &.item:nth-child(3n) {
        .info {
          .index {
            border-color: #66e1df;
            background-color: rgba(#66e1df, 0.5);
          }
        }
        .progress-bar {
          background-image: linear-gradient(270deg, #ffdb5c 0%, #00527d 100%);
        }
      }
    }
  }
}
</style>
