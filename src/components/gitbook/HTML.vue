<template>
  <git-book :data="data"></git-book>
</template>

<script>
import GitBook from "./GitBook";
import { ref } from "vue"
import GitBookJson from "../../assets/gitbook.json"

export default {
  name: "HTML",
  components: {
    GitBook
  },
  setup() {
    const data = ref(GitBookJson['html-css'])
    return { data }
  }
}

</script>

<style scoped>
</style>
