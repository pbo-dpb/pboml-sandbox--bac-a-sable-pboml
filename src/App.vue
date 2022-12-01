<template>
  <main class="flex flex-col gap-4 m-4">

    <h1 class="text-4xl font-extralight">PBOML Slices Sandbox</h1>
    <Slice v-for="slice in slices" :slice="slice"></Slice>

  </main>
</template>
<script>
import Slice from "./components/Slice.vue"
import index from '../assets/index.json?json'

export default {
  data() {
    return {

    }
  },
  components: {
    Slice
  },
  computed: {
    slices() {
      return index;
    }
  }
}
</script>
