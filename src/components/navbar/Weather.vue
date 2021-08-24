<template>
  <div class="container">
    <div
        class="card"
        v-for="(data, index) in weather"
        :key="index"
    >
      <img :src="require('@/assets/weather/'+data.iconDay+'.png')" alt="icon">
      <div>{{data.textDay}}</div>
      <div>{{data.tempMin}} ~ {{data.tempMax}} °C</div>
      <div>{{data.humidity}} %</div>
      <div class="date">{{date[index]}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Weather",
  data() {
    return {
      weather: {},
      date: []
    }
  },
  methods: {
    async getWeather(id) {
      await fetch("https://api.qweather.com/v7/weather/7d?location=" + id + "&key=2c1b404e823a419aa4901647a34a4c26")
          .then(res => { return res.json()})
          .then(res => {
            this.weather = res.daily
            res.daily.forEach(day => {
              this.date.push(day.fxDate.substring(5))
            })
            this.date.splice(0, 1, "今天")
            this.date.splice(1, 1, "明天")
            this.date.splice(2, 1, "后天")
          })
    }
  },
  mounted() {
    this.getWeather(101281601)
  },
  computed: {
  }
}
</script>

<style scoped>
.container {
  margin: 40px;
}
.card {
  display: inline-block;
  padding: 20px 30px;
  border-radius: 5px;
  color: #fe6a00;
  /*
  box-shadow: 0px 0px 14px rgba(0,0,0,0.3);
  background-color: #fff;
   */
  text-align: center;
}
.card div {
  margin-top: 10px;
}
.card img {
  width: 64px;
  height: 64px;
}
.date {
  color: rgb(50, 50, 50);
  padding-top: 15px;
}
</style>