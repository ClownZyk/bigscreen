<template>
  <div class="wrap">
    <header class="gem-header">
      <div class="weather">
        <template v-if="weatherInfo">
          <div class="weather-address"><span class="label">当前位置：</span>{{ weatherInfo.city }}</div>
          <div class="temperature">{{ weatherInfo.temperature }}<span class="label">℃</span></div>
          <div class="weather-info">{{ weatherInfo.weather }}</div>
          <div class="wind"><span>风向：</span>{{ weatherInfo.winddirection }}{{ weatherInfo.windpower }}</div>
        </template>
      </div>
      <h1 class="cf-font">云极甄选业务数据大屏</h1>
      <div class="time">
        <div class="time-wrap">
          <div class="time-val cf-font">{{ now | formatDate('hh:mm:ss') }}</div>
          <div class="time-date-day">
            <div class="day">{{ day }}</div>
            <div class="date">{{ now | formatDate('yyyy-MM-dd') }}</div>
          </div>
        </div>
      </div>
      <fullscreen />
    </header>
    <main class="gem-wrap">
      <div class="left">
        <Item title="聚合折扣">
          <Juhezhekou :data="allData[0]" />
        </Item>
        <Item title="团购交易">
          <Tuangoujiaoyi :data="allData[1]" />
        </Item>
        <Item title="电商交易">
          <Dianshangjiaoyi :data="allData[2]" />
        </Item>
      </div>
      <div class="container">
        <MidHeader />
        <div class="map-wrap">
          <MidMap />
        </div>
        <div class="flow-list">
          <ItemLong title="流水列表">
            <MidListTable />
          </ItemLong>
        </div>
      </div>
      <div class="right">
        <Item title="团长排名">
          <Tuanzhangpaiming :data="allData[3]" />
        </Item>
        <Item title="智能设备">
          <Zhinengshebei :data="allData[4]" />
        </Item>
        <Item title="百业小店">
          <Baiyexiaodian :data="allData[5]" />
        </Item>
      </div>
    </main>
  </div>
</template>
<script>
import Item from '@/components/item.vue'
import ItemLong from '@/components/item-long.vue'
import MidHeader from '@/components-biz/MidHeader.vue'
import MidMap from '@/components-biz/MidMap.vue'
import Juhezhekou from '@/components-biz/Juhezhekou.vue'
import Tuangoujiaoyi from '@/components-biz/Tuangoujiaoyi.vue'
import Dianshangjiaoyi from '@/components-biz/Dianshangjiaoyi.vue'
import Tuanzhangpaiming from '@/components-biz/Tuanzhangpaiming.vue'
import Zhinengshebei from '@/components-biz/Zhinengshebei.vue'
import Baiyexiaodian from '@/components-biz/Baiyexiaodian.vue'
import MidListTable from '@/components-biz/MidListTable.vue'
import { GetPlatformDataStatistics } from '@/api'
import weather from '@/mixins/weather'
import now from '@/mixins/now'
import fullscreen from '@/components/fullscreen.vue'
export default {
  components: {
    ItemLong,
    Item,
    Juhezhekou,
    Tuangoujiaoyi,
    Dianshangjiaoyi,
    Tuanzhangpaiming,
    Zhinengshebei,
    Baiyexiaodian,
    MidHeader,
    MidMap,
    MidListTable,
    fullscreen
  },
  mixins: [weather, now],
  name: 'Home',
  data() {
    return {
      allData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      GetPlatformDataStatistics().then(ret => {
        this.allData = ret.data
      })
    }
  }
}
</script>
<style scoped lang="scss">
.gem-header {
  height: var(--header-height);
  display: grid;
  grid-template-columns: 600px 1fr 600px;
  position: relative;

  .fullscreen-toggle {
    position: absolute;
    right: 30px;
    top: 12px;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }

  h1 {
    text-align: center;
    line-height: calc(var(--header-height) - 20px);
    font-size: 40px;
    font-weight: 500;
    color: #fff;
    text-shadow: 6px 0 12px #47fff8;
  }

  .weather {
    display: flex;
    padding: 15px 0 0 40px;
    color: #fff;
    span.label {
      font-size: 14px;
    }
    .weather-address {
      font-size: 20px;
      line-height: 28px;
      color: #fff;
      margin-right: 16px;
    }
    .weather-info {
      font-size: 20px;
      color: #fff;
      margin: 0 16px;
    }
    .temperature {
      font-size: 20px;
      line-height: 28px;
      color: #fff;
    }
    .wind {
      font-size: 20px;
    }
  }

  .time {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px 80px 0 0;
    .time-wrap {
      display: flex;
      .time-val {
        padding-top: 4px;
        margin-right: 12px;
        color: #fff;
        font-size: 22px;
      }
      .time-date-day {
        color: #fff;
        font-size: 13px;
      }
    }
  }
}

.gem-wrap {
  display: grid;
  grid-template-columns: 450px 1fr 450px;
  height: calc(100vh - var(--header-height));
  padding: 0 72px;
}

.map-wrap {
  height: 500px;
}

.flow-list {
  padding: 0 30px;
}
</style>
