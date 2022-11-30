<template>
    <figure class="border-2 border-sky-900 rounded shadow">

        <figcaption class="flex flex-col p-4 bg-sky-900 text-white">
            <h3 class="text-2xl font-thin">{{ slice.name.en }}</h3>
            <p class="font-semibold">{{ slice.description.en }}</p>
        </figcaption>


        <div v-if="payload" class="grid grid-cols-3">

            <div class="bg-sky-100  p-4 border-r-2 border-sky-900">
                <CodeEditor v-model="payload" mode="yaml"></CodeEditor>
            </div>

            <div class="col-span-2 p-4">
                <SliceRenderer ref="renderer" :payload="payload"></SliceRenderer>
            </div>

        </div>
    </figure>
</template>
<script>
import CodeEditor from "./CodeEditor.vue"
import SliceRenderer from "./SliceRenderer.vue"

export default {
    props: {
        slice: Object
    },
    data() {
        return {
            payload: null
        }
    },
    components: {
        CodeEditor,
        SliceRenderer
    },
    mounted() {

        fetch(`/${this.slice.payload}`)
            .then((response) => response.text())
            .then((data) => this.payload = data);
    },


}
</script>
