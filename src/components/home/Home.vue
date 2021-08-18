<template>
  <div class="container">
    <m-navbar></m-navbar>
    <div class="content">
      <m-header></m-header>
      <router-view class="flex-item"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

export default {
  name: "Home",
  components: {
      "m-header": Header,
      "m-navbar": Navbar,
  },
}
</script>

<style scoped>
.container {
  display: flex;
}
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100vh;
}
.flex-item {
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 20px 0px 0px 20px;
}
</style>