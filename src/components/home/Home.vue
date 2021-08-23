<template>
  <div class="container">
    <m-navbar></m-navbar>
    <div class="content">
      <m-header></m-header>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" ></component>
        </keep-alive>
      </router-view>
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
</style>