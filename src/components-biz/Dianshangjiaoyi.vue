<template>
  <div class="box">
    <div class="top">
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon3-1.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.yearSalesTotal | addCommasToNumber }}</div>
          <div class="label">累计交易额（元）</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon3-2.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.monthSalesTotal | addCommasToNumber }}</div>
          <div class="label">当月交易额（元）</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon3-3.png')})` }">
        <div class="value-box">
          <div class="val cf-font">{{ data?.daySalesTotal | addCommasToNumber }}</div>
          <div class="label">当日交易额（元）</div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-item">
        <div class="inner">
          <span class="label">订单数：</span><span class="value">{{ data?.yearSalesCount | addCommasToNumber }}</span>
        </div>
      </div>
      <div class="mid-item">
        <div class="inner">
          <span class="label">订单数：</span><span class="value">{{ data?.monthSalesCount | addCommasToNumber }}</span>
        </div>
      </div>
      <div class="mid-item">
        <div class="inner">
          <span class="label">订单数：</span><span class="value">{{ data?.daySalesCount | addCommasToNumber }}</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="table-header">
        <div class="td-cell">#</div>
        <div class="td-cell">商品名称</div>
        <div class="td-cell">销量</div>
      </div>
      <div class="table-body-wrap">
        <div class="table-body">
          <div class="tr-row" v-for="(item, index) in dataList" :key="item.id">
            <div class="td-cell">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="td-cell no-ellipsis">
              <span>{{ item.title }}</span>
            </div>
            <div class="td-cell">
              <span>{{ item.salesTotal }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-slide.horizontal>
      <div class="footer-wrap">
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon3-4.png')})` }">
          <img src="@/assets/icon3-5.png" alt="" />
        </div>
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon3-4.png')})` }">
          <img src="@/assets/icon3-6.png" alt="" />
        </div>
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon3-4.png')})` }">
          <img src="@/assets/icon3-7.png" alt="" />
        </div>
        <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon3-4.png')})` }">
          <img src="@/assets/icon3-8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GetPlatformSalesDataStatistics } from '@/api'
export default {
  props: ['data'],
  data() {
    return {
      dataList: []
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
        source: 3,
        isPage: true,
        isOrder: true,
        isAsc: true,
        date: 0
      }
      GetPlatformSalesDataStatistics(param).then(ret => {
        this.dataList = ret.data
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
  &-item {
    flex: 1;
    height: 48px;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    .value-box {
      position: absolute;
      left: 48px;
      top: 50%;
      transform: translateY(-50%);
      .label {
        white-space: nowrap;
        font-size: 12px;
        color: #ffffff;
        text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
        transform-origin: left center;
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
  &-item {
    flex: 1;
    line-height: 20px;
    display: flex;
    flex-direction: row-reverse;
    .inner {
      background: linear-gradient(180deg, #063466 0%, #006ab7 100%);
      border-radius: 3px;
      border: 1px solid #2fabd2;
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
}

.main {
  flex: 1;
  overflow: hidden;
  margin-top: 8px;
  .td-cell {
    font-size: 12px;
  }
  .td-cell:nth-child(1) {
    flex: 0 0 40px;
    text-align: center;
  }
  .td-cell:nth-child(2) {
    flex: 1;
  }
  .td-cell:nth-child(3) {
    flex: 0 0 80px;
    text-align: center;
  }
  .td-cell:nth-child(4) {
    flex: 0 0 80px;
    text-align: right;
  }
  .table-header {
    display: flex;
    height: 20px;
    line-height: 20px;
    background-color: #023164;
    .td-cell {
      color: #159aff;
    }
  }
  .table-body-wrap {
    height: 80px;
    overflow: hidden;
    .table-body {
      .tr-row {
        display: flex;
        height: 28px;
        line-height: 24px;
        .td-cell {
          color: #ffffff;
          &:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              background: linear-gradient(152deg, #ffa477 0%, #ff6316 100%);
              width: 20px;
              line-height: 1.2;
              text-align: center;
            }
          }
        }
      }
    }
  }
}

.footer {
  display: flex;
  flex-direction: row;
  .footer-wrap {
    display: flex;
    gap: 0 8px;
    .item {
      flex: 0 0 auto;
      width: 114px;
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>
