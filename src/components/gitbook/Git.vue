<template>
  <git-book :data="data"></git-book>
</template>

<script>
import GitBook from "./GitBook";
import { ref } from "vue"
import GitBookJson from "../../assets/gitbook.json"

export default {
  name: "Git",
  components: {
    GitBook
  },
  setup() {
    const data = ref(GitBookJson['git'])
    return { data }
  }
}

</script>

<style scoped>
</style>