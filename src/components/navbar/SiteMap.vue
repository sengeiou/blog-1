<!-- gitbook 映射 -->
<template>
  <div class="site">
    <ul>
      <li>
        <router-link :to="'/' + RouterLink[index]" v-for="(http, index) in https" :key="http">
          <div class="picture">
            <div class="container" :class="'container-' + http">
              <div class="icon" :class="'icon-' + http"></div>
            </div>
          </div>
          <div class="text">{{ texts[index] }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "SiteMap",
  setup() {
    const RouterLink = ref(['regex', 'git', 'html', 'javascript', 'linux', 'mysql', 'notebook', 'php', 'projects', 'vue'])
    const https = ref(['regex', 'git', 'html-css', 'javascript', 'linux', 'mysql', 'notebook', 'php', 'projects', 'vue'])
    const texts = ref(['正则表达式', 'Git', 'HTML/CSS', 'JavaScript', 'Linux', 'Database', 'NoteBook', 'PHP', 'Projects', 'Vue'])
    return {https, texts, RouterLink}
  }
}
</script>

<style scoped>
.site {
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 20px 0px 0px 20px;
}
a {
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  font-size: 16px;
  padding: 16px;
  margin: 16px;
  background-color: rgb(47, 69, 102);
  color: rgb(255, 255, 255);
}
a:hover {
  background-color: rgb(89, 109, 139);
}
ul {
  list-style: none;
  font-size: 0;
}
.picture {
  display: inline-block;
  vertical-align: middle;
}
.text {
  width: 90px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  font-size: 16px;
  padding-left: 10px;
  vertical-align: middle;
}
.container {
  width: 40px;
  height: 40px;
  background-color: rgb(38, 203, 124);
  padding-top: 4px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.8);
}

.icon {
  background-image: url("../../assets/sprite-objects.png");
  background-size: 8117px 40px;
  width: 40px;
  height: 40px;
  transform: scale(0.75);
}

.icon-regex { background-position: -1558px 0; }
.icon-git { background-position: -2419px 0; }
.icon-html-css { background-position: -1968px 0; }
.icon-javascript { background-position: -1640px 0; }
.icon-linux { background-position: -943px 0; }
.icon-mysql { background-position: -1558px 0; }
.icon-notebook { background-position: -2296px 0; }
.icon-php { background-position: -1312px 0; }
.icon-projects { background-position: -1599px 0; }
.icon-vue { background-position: -2460px 0; }

.container-regex { background-color: rgb(38, 203, 124); }
.container-git { background-color: rgb(38, 203, 124); }
.container-html-css { background-color: rgb(247, 125, 5); }
.container-javascript { background-color: rgb(3, 209, 235); }
.container-linux { background-color: rgb(247, 125, 5); }
.container-mysql { background-color: rgb(3, 209, 235); }
.container-notebook { background-color: rgb(56, 132, 255); }
.container-php { background-color: rgb(255, 70, 66); }
.container-projects { background-color: rgb(164, 78, 237); }
.container-vue { background-color: rgb(56, 132, 255); }

</style>