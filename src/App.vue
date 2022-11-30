<template>
  <div>

    <Slice v-for="slice in slices" :slice="slice"></Slice>

  </div>
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
