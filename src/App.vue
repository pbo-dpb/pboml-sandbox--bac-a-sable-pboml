<template>
  <header
    class="px-4 py-2 border-b border-gray-300 sticky top-0 flex flex-row justify-between items-center bg-white z-10">
    <h1 class="text-4xl font-extralight">{{ strings.title[language] }}</h1>
    <LanguageSwitcher @switch="switchLanguage"></LanguageSwitcher>
  </header>
  <main class="flex flex-col gap-4 m-4">

    <Slice v-for="slice in slices" :slice="slice"></Slice>

  </main>
</template>
<script>
import Slice from "./components/Slice.vue"
import index from '../assets/index.json?json'
import strings from '../assets/strings.json?json'

import LanguageSwitcher from "./components/LanguageSwitcher.vue"

export default {
  data() {
    return {
      language: document.documentElement.lang
    }
  },
  components: {
    Slice,
    LanguageSwitcher
  },
  computed: {
    slices() {
      return index;
    },
    strings() {
      return strings;
    }
  },
  methods: {
    switchLanguage(newLang) {
      this.language = newLang;
      document.documentElement.lang = newLang
    }
  }
}
</script>
