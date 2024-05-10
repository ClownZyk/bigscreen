<template>
  <div class="box">
    <div class="tabs">
      <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon4-1.png')})` }">
        <div class="value-box">
          <div class="label">总交易额（元）</div>
          <div class="val cf-font">{{ data?.yearSalesTotal | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon4-2.png')})` }">
        <div class="value-box">
          <div class="label">累计订单</div>
          <div class="val cf-font">{{ data?.yearSalesCount | addCommasToNumber }}</div>
        </div>
      </div>
      <div class="item" :style="{ backgroundImage: `url(${require('@/assets/icon4-3.png')})` }">
        <div class="value-box">
          <div class="label">分润总额（元）</div>
          <div class="val cf-font">{{ data?.yearProfitTotal | addCommasToNumber }}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="table-header">
        <div class="td-cell">#</div>
        <div class="td-cell">团长</div>
        <div class="td-cell">总销售额</div>
      </div>
      <div class="table-body-wrap" v-slide="0.8">
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
        pageSize: 20,
        source: 4,
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
}

.tabs {
  flex: 0 0 175px;
  .item {
    position: relative;
    width: 100%;
    height: 42px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px;
    .value-box {
      position: absolute;
      left: 60px;
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
    height: 190px;
    overflow: hidden;
    .table-body {
      padding-top: 1px;
      .tr-row {
        display: flex;
        height: 26px;
        line-height: 26px;
        background-color: rgba(#023164, 0.5);
        margin-top: 12px;
        .td-cell {
          color: #ffffff;
          &:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
              content: '';
              width: 8px;
              height: 8px;
              margin-left: 2px;
            }
          }
        }
        &:nth-child(2n + 1) {
          .td-cell:nth-child(1) {
            &::after {
              background-color: #159aff;
            }
          }
        }
        &:nth-child(2n) {
          .td-cell:nth-child(1) {
            &::after {
              background-color: #66e1df;
            }
          }
        }
      }
    }
  }
}
</style>
