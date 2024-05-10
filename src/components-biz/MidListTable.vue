<template>
  <div class="mid-table">
    <dv-border-box-1>
      <div class="table-container">
        <div class="table-item">
          <div class="table-header">
            <div class="td-cell">时间</div>
            <div class="td-cell">商品名称</div>
            <div class="td-cell">金额（元）</div>
          </div>
          <div class="table-body-wrap">
            <div class="table-body">
              <div class="tr-row" v-for="item in table1Data" :key="item._id">
                <div class="td-cell">
                  <span>{{ item.createTime }}</span>
                </div>
                <div class="td-cell no-ellipsis">
                  <span>{{ item.productName }}</span>
                </div>
                <div class="td-cell">
                  <span>{{ item.buyTotal }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-item">
          <div class="table-header">
            <div class="td-cell">时间</div>
            <div class="td-cell">用户名称</div>
            <div class="td-cell">联系方式</div>
          </div>
          <div class="table-body-wrap">
            <div class="table-body">
              <div class="tr-row" v-for="item in table2Data" :key="item._id">
                <div class="td-cell">
                  <span>{{ item.createTime }}</span>
                </div>
                <div class="td-cell no-ellipsis">
                  <span>{{ item.title }}</span>
                </div>
                <div class="td-cell">
                  <span>{{ item.phone | hidePhone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv-border-box-1>
  </div>
</template>
<script>
import { GetOrderFlowingRecords, GetPlatformUserData } from '@/api'
export default {
  data() {
    return {
      table1Data: [],
      table2Data: []
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
        isPage: true,
        isAsc: true
      }
      GetOrderFlowingRecords(param).then(ret => {
        this.table1Data = ret.data
      })
      GetPlatformUserData(param).then(ret => {
        this.table2Data = ret.data
      })
    }
  }
}
</script>
<style scoped lang="scss">
.mid-table {
  height: 160px;
  .border {
    height: 100%;
  }

  .table-container {
    display: flex;
    padding: 8px 28px;
    gap: 12px;
    .table-item {
      flex: 1;
      overflow: hidden;
      margin-top: 8px;
      .td-cell {
        font-size: 12px;
      }
      .td-cell:nth-child(1) {
        flex: 0 0 150px;
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
            height: 22px;
            line-height: 22px;
            background-color: rgba(#6c8097, 0.1);
            .td-cell {
              color: #ffffff;
              &:nth-child(1) {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
