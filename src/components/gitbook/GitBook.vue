<template>
  <div class="container">
    <div
        class="title"
        v-for="(item, id) in data"
        :key="id"
        v-show="item.url"
    >
      <a
          target="_blank"
          v-for="(item, id) in data"
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
  background-color: rgb(238, 232, 234);
}
.container {
  margin: 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-auto-flow: row;
  height: 100%;
  justify-content: center;
}

.container a {
  display: inline-block;
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
}
</style>