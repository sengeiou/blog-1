<template>
  <git-book :data="data"></git-book>
</template>

<script>
import GitBook from "./GitBook";
import { ref } from "vue"
import GitBookJson from "../../assets/gitbook.json"

export default {
  name: "Vue",
  components: {
    GitBook
  },
  setup() {
    const data = ref(GitBookJson['vue'])
    return { data }
  }
}

</script>

<style scoped>
</style>
