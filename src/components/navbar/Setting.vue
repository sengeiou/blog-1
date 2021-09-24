<template>
  <div class="title">Home Control</div>

  <div class="container">
    <div class="led">
      <span>卧室灯: </span>
      <el-switch v-model="value0" @click="switch0" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="led">
      <span>阳台灯: </span>
      <el-switch v-model="value1" @click="switch1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="led">
      <span>室内风扇: </span>
      <el-switch v-model="value2" @click="switch2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <div class="led">
      <span>室内换气扇: </span>
      <el-switch v-model="value3" @click="switch3" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
  </div>

</template>

<script>
import { ElSwitch } from "element-plus";
import { getServiceData } from "@/service";

export default {
  name: "Setting",
  components: {
    "el-switch": ElSwitch
  },
  data() {
    return {
      value0: false,
      value1: false,
      value2: false,
      value3: false,
    }
  },
  methods: {
    switch0() { getServiceData("/uart/uart00.php") },
    switch1() { getServiceData("/uart/uart01.php") },
    switch2() { getServiceData("/uart/uart02.php") },
    switch3() { getServiceData("/uart/uart03.php") },
  }
}
</script>

<style scoped>
.title {
  padding: 20px 0px 40px 0px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.led {
  display: inline-block;
  padding: 20px 40px;
  width: 300px;
  height: 80px;
  text-align: right;
}
</style>