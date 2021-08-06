<template>
  <div class="container">
    <div
        class="heading"
        v-for="(value, key) in data"
        :key="key"
        :class="key"
    >
      <div class="key">{{key}}</div>
      <a
          target="_blank"
          v-for="(item, id) in value"
          :key="id"
          :href="'https://app.gitbook.com/@wuchi/s' + item.url"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GitBook",
  props: ['data']
}
</script>

<style scoped>
body {
  background-color: red;
}
.container {
  padding: 30px;
  column-count: 4;
  column-gap: 0;
}
.heading {
  width: 250px;
  margin: 0 auto;
}
.key {
  font-size: 18px;
  text-align: center;
  padding: 20px;
}
.container a {
  width: 100%;
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
  color: black;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
 /* box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);*/
}
.container a:hover {
  color: white;
  background-color: #0084ff;
  border-radius: 5px;
}
</style>