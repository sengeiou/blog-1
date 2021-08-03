<template>
  <heading></heading>
  <navbar></navbar>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
import Heading from "./Heading";
import Navbar from "./Navbar";

export default {
  name: "Home",
  components: {
      Heading,
      Navbar,
  },
}
</script>

<style scoped>
.main {
  position: absolute;
  top: 91px;
  left: 200px;
  width: 1080px;
  height: 545px;
  /*height: 709px;*/
  padding: 40px;
  overflow: scroll;
}
</style>