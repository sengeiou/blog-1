<template>
  <div class="container">
    <div class="heading" v-for="(value, key) in data" :key="key" :class="key">
      <div class="key">{{key}}</div>
      <a target="_blank" v-for="(item, id) in value" :key="id" :href="'https://app.gitbook.com/@wuchi/s' + item.url">
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
  column-gap: 0;
}
@media (min-width: 330px) {
  .container {
    column-count: 1;   /* 屏幕大于330px的均分为1等分 */
  }
}
@media (min-width: 600px) {
  .container {
    column-count: 2;   /* 屏幕大于600px的均分为2等分 */
  }
}
@media (min-width: 870px) {
  .container {
    column-count: 3;   /* 屏幕大于870px的均分为3等分 */
  }
}
@media (min-width: 1140px) {
  .container {
    column-count: 4;   /* 屏幕大于1140px的均分为4等分 */
  }
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
  background-color: rgb(231, 234, 237);
  padding: 10px 10px 10px 20px;

}
.container a:hover {
  color: white;
  background-color: #0084ff;
  border-radius: 5px;
}
</style>