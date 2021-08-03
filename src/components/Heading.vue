<!-- 网站头部UI相关 -->

<template>
  <div class="heading">
    <input
        id="search"
        type="text"
        placeholder=" Google Search"
        @keydown.enter="jump"
        onfocusout="this.value = ''"
    >
    <div class="content">Hello, Ichwu</div>
    <div class="icon search" @click="jump"><font-awesome-icon icon="search" /></div>
    <button @click="show = !show"><div class="icon user"><font-awesome-icon icon="user" /></div></button>
    <div class="card" v-if="show"></div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Heading",
  setup() {
    function jump() {
      let searchval = document.getElementById('search').value;
      if(searchval !== '')
        window.open('https://www.google.com/search?q='+searchval);
    }
    let show = ref(false)

    function say() {
      console.log("Hello")
    }
    return { jump, say, show }
  }
}
</script>

<style scoped>
.heading {
  position: absolute;
  left: 200px;
  width: 1080px;
  margin: 0;
  padding: 0;
}
.heading input {
  display: inline-block;
  background-color: #fff;
  width: 750px;
  border: none;
  outline: none;
  border-radius: 6px;
  margin: 20px 0px 30px 40px;
  height: 40px;
  padding: 10px 60px 10px 10px;
  font-size: 16px;
}
.content {
  display: inline-block;
  height: 40px;
  width: 240px;
  margin: 20px 0px 30px 50px;
  padding: 10px 90px 10px 40px;
  font-size: 16px;
  font-family: Verdana;
  color: rgb(25, 41, 95);
  border-left: 1px solid rgb(226, 229, 234);
}
.icon {
  position: absolute;
  display: inline-block;
  color: #0084ff;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  top: 20px;
}
.search {
  right: 308px;
}
.user {
  height: 40px;
  width: 40px;
  text-align: center;
  right: 30px;
  background-color: rgb(206, 72, 65);
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 18px;
}
.card {
  position: absolute;
  background-color: forestgreen;
  height: 500px;
  width: 500px;
  top: 20px;
  right: 308px;
  z-index: 999;
}

</style>