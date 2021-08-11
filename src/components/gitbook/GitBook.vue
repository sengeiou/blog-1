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
  padding: 20px 0px 20px 40px;
}
.container a {
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: black;
  background-color: rgb(249, 251, 253);
  padding: 10px 10px 10px 20px;
}
.container a:hover {
  color: white;
  background-color: #0084ff;
  border-radius: 5px;
}
</style>