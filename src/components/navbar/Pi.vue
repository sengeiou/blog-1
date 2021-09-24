<template>
  <div class="home" v-if="completed">
    <div class="select">
      <el-button
          type="primary"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="currentTab = tab; myEcharts()"
          :class="{active: currentTab === tab}"
      >
        {{ tab }}
      </el-button>

      <div class="led">
        <span>LED: </span>
        <el-switch v-model="value" @click="ledSwitch" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
    <div id="main" style="width: 900px;height:400px;"></div>
  </div>

</template>

<script>
import { getServiceData } from "../../service";

import * as echarts from 'echarts';

import { ElButton,ElSwitch } from 'element-plus';

export default {
  name: "Pi",
  components: {
    "el-button": ElButton,
    "el-switch": ElSwitch
  },
  data() {
    return {
      completed: false,
      currentTab: "CPU",
      tabs: ["CPU", "Temperature", "Humidity", "Pressure", "Altitude"],
      value: true,
      result: [{"_id":{"$oid":"61492e9a7b09f45b337eec72"},"Date":"2021-09-21","Time":"09:00","Timestamp":1632186002,"AH10_Temperature":29.7,"AHT10_Humidity":39,"BMP180_Temperature":29.8,"BMP180_Pressure":1010.48,"BMP180_Altitude":23.09,"RaspberryPi_Temperature":51},{"_id":{"$oid":"61493caad2c7d84ec7144c62"},"Date":"2021-09-21","Time":"10:00","Timestamp":1632189603,"AH10_Temperature":30.6,"AHT10_Humidity":40,"BMP180_Temperature":30.3,"BMP180_Pressure":1010.29,"BMP180_Altitude":24.17,"RaspberryPi_Temperature":54.77},{"_id":{"$oid":"61494abf7759b65fe6182302"},"Date":"2021-09-21","Time":"11:00","Timestamp":1632193202,"AH10_Temperature":30.6,"AHT10_Humidity":40,"BMP180_Temperature":30.4,"BMP180_Pressure":1009.92,"BMP180_Altitude":27.51,"RaspberryPi_Temperature":53.69},{"_id":{"$oid":"614958d1bb9e8d6fba761762"},"Date":"2021-09-21","Time":"12:00","Timestamp":1632196802,"AH10_Temperature":30.4,"AHT10_Humidity":40,"BMP180_Temperature":30.2,"BMP180_Pressure":1009.21,"BMP180_Altitude":33.27,"RaspberryPi_Temperature":54.77},{"_id":{"$oid":"614966db90802423122e0192"},"Date":"2021-09-21","Time":"13:00","Timestamp":1632200402,"AH10_Temperature":31,"AHT10_Humidity":40,"BMP180_Temperature":30.8,"BMP180_Pressure":1008.11,"BMP180_Altitude":43.72,"RaspberryPi_Temperature":54.77}],
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
    ledSwitch() {
      getServiceData("/led/switch.php")
      .then(res => {
        //console.log(res)
        if(res.status == this.value) {
          getServiceData("/led/switch.php")
        }
      })
    },
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
  position: relative;
}
.active::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background-color: rgb(70, 160, 252);
  border-radius: 1px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
.led {
  display: inline-block;
  margin-left: 90px;
}
</style>