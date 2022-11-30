<template>
  <div>
    <code-editor mode="yaml" v-model="rawContent"></code-editor>

  </div>
</template>
<script>
import CodeEditor from "./components/CodeEditor.vue"

export default {
  data() {
    return {
      rawContent: 'Hello, world'
    }
  },
  components: {
    CodeEditor
  }
}
</script>
