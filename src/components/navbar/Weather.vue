<template>
  <div class="container">
    <div class="header">
      <div class="city">
        <span class="map" @click="refresh"><font-awesome-icon icon="map-marker-alt"/></span>
        <span class="location">{{ city }}</span>
        <span class="exchange"><font-awesome-icon icon="exchange-alt"/></span>
      </div>
      <input class="search" ref="search" @keydown.enter="search" type="text" placeholder="请输入位置">
      <div class="result" v-if="success">
        <div class="item" @click="updateCity(city.name, city.id)" v-for="city in location" :key="city.id">
          {{ city.name }} -{{ city.adm2 }} - {{ city.adm1 }} - {{ city.country}}
        </div>
      </div>
    </div>
    <div class="card" v-for="(data, index) in weather" :key="index">
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
      date: [],
      success: false,
      location: [],
      city: '',
      id: '',
      amapKey: 'dd147bbfd943c2665c54ca41d85c8790',
      heKeyDev: 'ef3821d028324e1f9abaac98b15a2a5c',
      heKeyBus: '20c776c2751049feb5b37e555c1ac2d4',
    }
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    async getLocation() {
      await fetch("https://restapi.amap.com/v3/ip?output=json&key=" + this.amapKey)
      .then(res => { return res.json() })
      .then(res => { this.searchCity(res.city) })
    },
    async searchCity(city) {
      await fetch("https://geoapi.qweather.com/v2/city/lookup?key=" + this.heKeyDev + "&location="+city)
      .then(res => { return res.json() })
      .then(res => {
        this.id = res.location[0].id
        this.city = res.location[0].name
      })
      this.getWeather(this.id)
    },
    async getWeather(id) {
      await fetch("https://api.qweather.com/v7/weather/7d?location=" + id + "&key=" + this.heKeyBus)
          .then(res => { return res.json()})
          .then(res => { this.weather = res.daily })
      this.weather.forEach(day => {
        this.date.push(day.fxDate.substring(5))
      })
      this.date.splice(0, 1, "今天")
      this.date.splice(1, 1, "明天")
      this.date.splice(2, 1, "后天")
    },
    async search() {
      const value = this.$refs.search.value
      if (value == '') { this.success = false; return }
      await fetch("https://geoapi.qweather.com/v2/city/lookup?location="+value+"&key=" + this.heKeyDev)
      .then(res => { return res.json() })
      .then(res => {
        if (res.code == 200) {
          this.success = true
          this.location = res.location
        } else {
          alert('未查询到数据，请重新输入。')
        }
      }).catch(err => { console.log(err) })
    },
    updateCity(name, id) {
      this.city = name
      this.id = id
      this.success = false
      this.$refs.search.value = ''
      this.getWeather(this.id)
    },
    refresh() {
      this.getLocation()
    }
  },
}
</script>

<style scoped>
.container {
  display: block;
  margin-left: 40px;
}
.header {
  margin: 10px 0px 40px 40px;
  position: relative;
}
.header .city {
  display: inline-block;
  color: rgb(90, 90, 90);
  font-size: 18px;
  line-height: 18px;
}
.header .city .location {
  display: inline-block;
  margin: 0 30px 0 8px;
}
.header .city .map {
  color: orangered;
  cursor: pointer;
}
.header .search {
  width: 140px;
  height: 40px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0px 0px 80px 40px rgba(0, 0, 0, 0.03);
  outline: none;
  border: none;
  border-radius: 6px;
  margin-left: 30px;
  padding: 20px;
  font-size: 16px;
  line-height: 16px;
  vertical-align: middle;
}
.header .result {
  position: absolute;
  z-index: 99;
  background-color: #fff;
  left: 135px;
  top: 50px;
  padding: 10px 10px 10px 20px;
}
.header .result .item {
  padding-bottom: 10px;
  cursor: pointer;
}
.card {
  display: inline-block;
  padding: 20px 30px;
  border-radius: 5px;
  color: #fe6a00;
  text-align: center;
}
.card div {
  margin-top: 10px;
}
.card img {
  width: 64px;
  height: 64px;
}
.card .date {
  color: rgb(50, 50, 50);
  padding-top: 15px;
}
</style>