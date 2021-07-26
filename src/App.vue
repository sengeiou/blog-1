<template>
  <navbar></navbar>
  <heading></heading>
</template>

<script>
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";

export default {
  name: 'App',
  components: {
    Navbar,
    Heading
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Helvetica, 'PingFang SC', 'Microsoft Yahei', sans-serif;
}

body {
  background-color: rgb(248, 248, 248);
}
</style>
