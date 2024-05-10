<template>
  <div class="mid-map">
    <dv-flyline-chart-enhanced :config="config" :dev="true" style="width:100%;height:100%;" />
    <!-- <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" /> -->
  </div>
</template>
<script>
export default {
  name: 'MidMap',
  data() {
    return {
      config: {
        points: [
          {
            name: '西安',
            coordinate: [0.58, 0.52],
            halo: {
              show: true
            },
            text: {
              show: true
            }
          }, //[0.74, 0.57]
          {
            name: '南京',
            coordinate: [0.74, 0.57],
            halo: {
              show: true
            },
            text: {
              show: true
            }
          },
          {
            name: '新乡',
            coordinate: [0.66, 0.78]
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.33]
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35]
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47]
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54]
          },
          {
            name: '洛阳',
            coordinate: [0.36, 0.38]
          },
          {
            name: '周口',
            coordinate: [0.62, 0.55]
          },
          {
            name: '漯河',
            coordinate: [0.56, 0.56]
          },
          {
            name: '南阳',
            coordinate: [0.3, 0.6]
          },
          {
            name: '信阳',
            coordinate: [0.55, 0.81]
          },
          {
            name: '驻马店',
            coordinate: [0.55, 0.67]
          },
          {
            name: '济源',
            coordinate: [0.37, 0.29]
          },
          {
            name: '三门峡',
            coordinate: [0.2, 0.36]
          },
          {
            name: '商丘',
            coordinate: [0.76, 0.41]
          },
          {
            name: '鹤壁',
            coordinate: [0.67, 0.34]
          },
          {
            name: '濮阳',
            coordinate: [0.83, 0.27]
          },
          {
            name: '安阳',
            coordinate: [0.78, 0.14]
          },
          {
            name: '合肥',
            coordinate: [0.71, 0.58]
          },
          {
            name: '福州',
            coordinate: [0.72, 0.73]
          },
          {
            name: '杭州',
            coordinate: [0.76, 0.64]
          },
          {
            name: '齐齐哈尔',
            coordinate: [0.76, 0.2]
          },
          {
            name: '海口',
            coordinate: [0.59, 0.91]
          },
          {
            name: '台北',
            coordinate: [0.77, 0.78]
          }
        ],
        lines: [
          {
            source: '台北',
            target: '南京'
          },
          {
            source: '海口',
            target: '西安'
          },
          {
            source: '海口',
            target: '南京'
          },
          {
            source: '齐齐哈尔',
            target: '西安'
          },
          {
            source: '杭州',
            target: '南京'
          },
          {
            source: '福州',
            target: '南京'
          },
          {
            source: '新乡',
            target: '西安'
          },
          {
            source: '焦作',
            target: '西安'
          },
          {
            source: '平顶山',
            target: '西安'
          },
          {
            source: '信阳',
            target: '南京'
          },
          {
            source: '驻马店',
            target: '西安'
          },
          {
            source: '三门峡',
            target: '西安'
          },
          {
            source: '濮阳',
            target: '西安'
          },
          {
            source: '新乡',
            target: '南京'
          },
          {
            source: '许昌',
            target: '南京'
          },
          {
            source: '平顶山',
            target: '南京'
          },
          {
            source: '洛阳',
            target: '南京'
          },
          {
            source: '南阳',
            target: '南京'
          },
          {
            source: '驻马店',
            target: '南京'
          },
          {
            source: '三门峡',
            target: '南京'
          },
          {
            source: '鹤壁',
            target: '南京'
          },
          {
            source: '合肥',
            target: '南京'
          }
        ],
        line: {
          width: 2
        },
        bgImgSrc: require('@/assets/map.png')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.mid-map {
  height: 566px;
}
</style>
