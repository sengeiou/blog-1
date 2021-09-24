<!-- 网站头部UI相关 -->
<!-- https://www.bilibili.com/favicon.ico?v=1 -->
<!-- https://github.githubassets.com/favicons/favicon.svg -->
<template>
  <div class="heading">
    <input
        class="input"
        id="search"
        type="text"
        placeholder=" Google Search"
        @keydown.enter="jump"
    >
    <div class="container">
      <div class="icon search"><font-awesome-icon icon="search" @click="jump"/></div>
      <a class="link link-bilibili" href="https://www.bilibili.com/" target="_blank"><img class="web bilibili" src="https://www.bilibili.com/favicon.ico?v=1" alt="bilibili"></a>
      <a class="link link-github" href="https://github.com/" target="_blank"><img class="web github" src="https://github.githubassets.com/favicons/favicon.svg" alt="github"></a>
      <div class="text content">Hello, Ichwu</div>
      <div class="icon user" @click="show = !show">
        <div class="user-wrapper">
          <font-awesome-icon icon="user"/>
        </div>
      </div>
    </div>
    <div class="user-container" v-if="show" @click="show = !show">
      <div class="user-info">
        <div class="user-info-title">Contact Me @</div>
        <div class="user-info-text">Email: wuchi57@outlook.com</div>
        <div class="user-info-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Header",
  setup() {
    let show = ref(false)

    function jump() {
      let searchEl = document.getElementById('search');
      if(searchEl.value !== '')  window.open('https://www.google.com/search?q='+searchEl.value);
      searchEl.value = ''
    }

    return { show, jump }
  }
}
</script>

<style scoped>
.heading {
  width: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}
@media (max-width: 900px) {
  .heading {
    display: none;
  }
}
.input {
  width: calc(100% - 40px - 392px);
  min-width: 260px;
  height: 40px;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0px 0px 80px 40px rgba(0, 0, 0, 0.03);
  outline: none;
  border: none;
  border-radius: 6px;
  margin: 40px 0px 40px 40px;
  padding: 0px 62px 0px 20px;
  font-size: 16px;
  vertical-align: middle;
}
.container {
  display: inline-block;
  vertical-align: middle;
}
.link {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}
.link-bilibili {
  margin: 0px 15px 0px 15px;
}
.link-github {
  margin: 0px 30px 0px 15px;
}
.web {
  width: 24px;
  height: 24px;
}
.text {
  display: inline-block;
  width: 145px;
  vertical-align: middle;
  font-size: 18px;
  font-family: Verdana;
  color: rgb(25, 41, 95);
  padding-left: 30px;
  border-left: 1px solid rgb(226, 229, 234);
}
.icon {
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
  color: #0084ff;
}
.search {
  position: relative;
  right: calc(22px + 20px);
}
.search:hover {
  cursor: pointer;
}
.user-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.user {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  margin: 0px 30px;
}


/* 个人信息展示 */
.user-container {
  position: absolute;
  top: 0;
  transform: translateX(-200px);
  width: 100%;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(30px);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}
.user-info {
  text-align: center;
}
.user-info-title {
  font-size: 20px;
  margin-bottom: 20px;
}
.user-info-text {
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
}
.user-info-bg {
  width: 230px;
  height: 300px;
  background: url("../../assets/join.jpg");
  background-size: contain;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 auto;
}
</style>