<template>
  <div class="heading">
    <input type="text" placeholder=" Search Article">
    <div class="content">Hello, Ichwu</div>
    <div class="icon search"><font-awesome-icon icon="search" /></div>
    <div class="icon user"><font-awesome-icon icon="user" /></div>
  </div>
</template>

<script>
export default {
  name: "Heading"
}
</script>

<style scoped>
.heading {
  position: absolute;
  left: 250px;
  width: 1030px;
  margin: 0;
  padding: 0;
}
.heading input {
  display: inline-block;
  background-color: #fff;
  width: 700px;
  border: none;
  outline: none;
  border-radius: 6px;
  margin: 30px 0px 30px 40px;
  height: 40px;
  padding: 10px 60px 10px 10px;
  font-size: 16px;
}
.content {
  display: inline-block;
  height: 40px;
  width: 240px;
  margin: 30px 0px 30px 50px;
  padding: 10px 90px 10px 40px;
  font-size: 16px;
  font-family: Verdana;
  color: rgb(25, 41, 95);
  border-left: 1px solid rgb(226, 229, 234);
}
.icon {
  position: absolute;
  display: inline-block;
  /* background-color: #0084ff; */
  color: #0084ff;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.search {
  top: 30px;
  right: 308px;
}
.user {
  height: 40px;
  width: 40px;
  text-align: center;
  top: 30px;
  right: 30px;
  background-color: rgb(206, 72, 65);
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 18px;
}
</style>