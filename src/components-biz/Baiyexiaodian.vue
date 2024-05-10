<template>
  <div class="box">
    <div class="top">
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-1.png')})` }">
        <div class="order-count">订单数</div>
        <div class="value-box">
          <div class="label">累计交易额（元）</div>
          <div class="val cf-font">{{ data?.yearSalesTotal | addCommasToNumber }}</div>
          <div class="count">{{ data?.yearSalesCount | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-2.png')})` }">
        <div class="order-count">订单数</div>
        <div class="value-box">
          <div class="label">当月交易额（元）</div>
          <div class="val cf-font">{{ data?.monthSalesTotal | addCommasToNumber }}</div>
          <div class="count">{{ data?.monthSalesCount | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="top-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-3.png')})` }">
        <div class="order-count">订单数</div>
        <div class="value-box">
          <div class="label">当日交易额（元）</div>
          <div class="val cf-font">{{ data?.daySalesTotal | addCommasToNumber }}</div>
          <div class="count">{{ data?.daySalesCount | addCommasToNumber }}</div>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-4.png')})` }"><span class="label">小店数量</span><span class="value">11</span></div>
      <div class="mid-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-4.png')})` }"><span class="label">交易贡献额</span><span class="value">121</span></div>
      <div class="mid-item" :style="{ backgroundImage: `url(${require('@/assets/icon6-4.png')})` }"><span class="label">社群用户数</span><span class="value">1521</span></div>
    </div>
    <div class="main">
      <div class="brands-contianer" v-slide="0.3">
        <div class="brands">
          <div class="item" v-for="(item, index) in shopData" :key="index">
            <img :src="item.logoImg.url" alt="" />
          </div>
        </div>
      </div>
      <div class="table">
        <div class="table-header">
          <div class="td-cell">小店TOP5</div>
          <div class="td-cell">小店名称</div>
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
    </div>
  </div>
</template>
<script>
import { GetPlatformSalesDataStatistics, GetSmallStoreList } from '@/api'
export default {
  props: ['data'],
  data() {
    return {
      dataList: [],
      shopData: []
    }
  },
  mounted() {
    this.getData()
    this.getShopData()
  },
  methods: {
    getData() {
      const param = {
        pageIndex: 1,
        pageSize: 5,
        source: 6,
        isPage: true,
        isOrder: true,
        isAsc: true,
        date: 0
      }
      GetPlatformSalesDataStatistics(param).then(ret => {
        this.dataList = ret.data
      })
    },
    getShopData() {
      const param = {
        pageIndex: 1,
        pageSize: 20,
        isPage: true,
        isOrder: true,
        isAsc: true
      }
      GetSmallStoreList(param).then(ret => {
        this.shopData = ret.data.filter(v => v.logoImg?.url)
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
    height: 60px;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    .order-count {
      position: absolute;
      left: 10px;
      top: 39px;
      transform-origin: left center;
      transform: scale(0.87);
      font-size: 12px;
      color: #ffffff;
      text-shadow: 3px 3px 6px rgba(13, 158, 255, 0.91);
    }
    .value-box {
      position: absolute;
      left: 46px;
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
        font-size: 13px;
        color: #ffffff;
        line-height: 1;
        background: linear-gradient(180deg, #ffffff 0%, #a2ddff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .count {
        color: #ffffff;
        font-size: 12px;
        transform: scale(0.87);
        transform-origin: left center;
        margin-top: 6px;
      }
    }
  }
}

.mid {
  display: flex;
  gap: 0 10px;
  &-item {
    flex: 1;
    line-height: 35px;
    padding: 0 10px;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: contain;

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
  display: flex;
  overflow: hidden;
  margin-top: 8px;

  .brands-contianer {
    flex: 0 0 160px;
    height: 100%;
    .brands {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      .item {
        position: relative;
        padding-top: 100%;
        align-items: center;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .table {
    flex: 1;
    .td-cell {
      font-size: 12px;
    }
    .td-cell:nth-child(1) {
      flex: 0 0 80px;
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
      height: 125px;
      overflow: hidden;
      .table-body {
        .tr-row {
          display: flex;
          height: 26px;
          line-height: 26px;
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
}
</style>
