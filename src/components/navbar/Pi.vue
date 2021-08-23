<template>
  <div class="home" v-if="completed">
    <div class="select">
      <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="currentTab = tab; myEcharts()"
          :class="{active: currentTab === tab}"
      >
        {{ tab }}
      </button>
    </div>
    <div id="main" style="width: 900px;height:400px;"></div>
  </div>

</template>

<script>
import { getServiceData } from "../../service";

import * as echarts from 'echarts';

export default {
  name: "Pi",
  data() {
    return {
      completed: false,
      result: [],
      currentTab: "CPU",
      tabs: ["CPU", "Temperature", "Humidity", "Pressure", "Altitude"],
    }
  },
  computed: {
    time() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['Time'])
      })
      return arr;
    },
    data() {
      return this[this.currentTab];
    },
    Temperature() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['AH10_Temperature'])
      })
      return arr;
    },
    Humidity() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['AHT10_Humidity'])
      })
      return arr;
    },
    Pressure() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['BMP180_Pressure'])
      })
      return arr;
    },
    Altitude() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['BMP180_Altitude'])
      })
      return arr;
    },
    CPU() {
      let arr = []
      this.result.forEach(item => {
        arr.push(item['RaspberryPi_Temperature'])
      })
      return arr;
    },
  },
  mounted() {
    getServiceData("/i2c/read-recently.php")
        .then(result => {
          this.result = result
          this.completed = true
          setTimeout(() => {
            this.myEcharts()
          }, 500)
        })
  },
  methods: {
    myEcharts(){
      //兼容处理
      if (document.getElementById("main") == null) {
        return
      }
      echarts.dispose(document.getElementById("main"))

      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: 'category',
          data: this.time
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.data,
          type: 'line',
          resize: 'auto'
        }]
      };
      option && myChart.setOption(option);
    }
  },
}
</script>

<style scoped>
.select {
  margin-left: 40px;
}
.select button {
  margin: 20px;
  padding: 10px;
}
.active {
  color: orangered;
}
</style>