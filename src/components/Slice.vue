<template>
    <figure class="border-2 border-sky-900 rounded shadow">

        <figcaption class="flex flex-col p-4 bg-sky-900 text-white">
            <h3 class="text-2xl font-thin">{{ slice.name[$root.language] }}</h3>
            <p class="font-semibold">{{ slice.description[$root.language] }}</p>
        </figcaption>


        <div v-if="slicePayload" class="grid grid-cols-3">

            <div class="bg-sky-100  p-4 border-r-2 border-sky-900">
                <CodeEditor v-model="slicePayload" mode="yaml"></CodeEditor>
            </div>

            <div class="col-span-2 p-4">
                <SliceRenderer v-if="stringifiedPayload" :payload="stringifiedPayload"></SliceRenderer>
                <pre v-if="error" class="text-red-800">{{ error }}</pre>
            </div>

        </div>
    </figure>
</template>
<script>
import CodeEditor from "./CodeEditor.vue"
import SliceRenderer from "./SliceRenderer.vue"
import yaml from 'js-yaml'

export default {
    props: {
        slice: Object
    },
    data() {
        return {
            payload: null,
            slicePayload: null,
            error: null
        }
    },
    components: {
        CodeEditor,
        SliceRenderer
    },
    mounted() {

        fetch(`/${this.slice.payload}`)
            .then((response) => response.text())
            .then((data) => {
                try {
                    const doc = yaml.load(data);
                    this.slicePayload = yaml.dump(doc.slices[0]);
                    this.payload = doc
                } catch (e) {
                    console.log(e);
                }


            });
    },

    computed: {
        stringifiedPayload() {
            this.error = null;
            try {
                const slice = yaml.load(this.slicePayload);
                this.payload.slices = [slice];
                return yaml.dump(this.payload);
            } catch (e) {
                this.error = e.message;
                console.log(e);
            }
        },

    }


}
</script>
