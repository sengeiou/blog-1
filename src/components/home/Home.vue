<template>
  <div class="container">
    <navbar></navbar>
    <div class="content">
      <heading></heading>
      <router-view class="flex-item"></router-view>
    </div>
  </div>
</template>

<script>
import Heading from "../header/Heading";
import Navbar from "../navbar/Navbar";

export default {
  name: "Home",
  components: {
      Heading,
      Navbar,
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