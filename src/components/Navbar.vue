<!-- 网站侧边栏UI相关 -->

<template>
  <div class="sidebar">
    <div class="title">BLOG</div>
    <ul>
      <li>
        <router-link to="/">
          <div class="icon"><font-awesome-icon icon="grip-horizontal" /></div>
          <div class="text">Home</div>
        </router-link>
      </li>
      <li>
        <router-link to="/map">
          <div class="icon"><font-awesome-icon icon="sitemap" /></div>
          <div class="text">Map</div>
        </router-link>
      </li>
      <li>
        <router-link to="/demo">
          <div class="icon"><font-awesome-icon icon="tasks" /></div>
          <div class="text">Projects</div>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <div class="icon"><font-awesome-icon icon="user" /></div>
          <div class="text">User</div>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <div class="icon"><font-awesome-icon icon="cog" /></div>
          <div class="text">Setting</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 200px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  text-align: center;
}
.title {
  font-size: 28px;
  font-weight: bold;
  padding: 40px 20px 40px 0px;
  color: rgb(29, 129, 226);
}
ul {
  text-align: left;
  list-style: none;
  margin: 0px 20px;
}
.sidebar ul li a {
  text-decoration: none;
  color: rgb(135, 143, 166);
  display: block;
  padding: 18px 0px 18px 0px;
}
.sidebar ul li a:hover {
  color: white;
  background-color: #0084ff;
  border-radius: 5px;
  box-shadow: 0 5px 10px 2px rgba(10, 137, 255, 0.5);
}
.icon {
  display: inline-block;
  width: 50px;
  text-align: center;
}
.text {
  display: inline-block;
}

</style>