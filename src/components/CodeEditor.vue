<template>
    <pre ref="editor" v-text="oneWayText"></pre>
</template>
<script>


export default {
    data() {
        return {
            oneWayText: null
        }
    },
    props: {
        modelValue: String,
        mode: String
    },
    emits: ['update:modelValue'],

    methods: {
        buildEditor() {
            var editor = window.ace.edit(this.$refs.editor);
            if (this.mode)
                editor.session.setMode("ace/mode/" + this.mode);
            if (this.mode === 'yaml')
                editor.session.setOptions({ tabSize: 2, useSoftTabs: true });
            editor.session.on('change', (delta) => {
                this.$emit('update:modelValue', editor.getValue());
            })
        }
    },
    mounted() {
        this.oneWayText = `${this.modelValue}`;
        const aceJsCdnLocation = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.11.2/ace.js";
        // We must clean up existing ace editors
        window.ace = null;
        document.querySelectorAll(`script[src~="${aceJsCdnLocation}"]`).forEach(node => node.remove());
        let aceScript = document.createElement('script')
        aceScript.async = true;
        aceScript.setAttribute('src', aceJsCdnLocation);
        aceScript.setAttribute('integrity', 'sha512-AhCq6G80Ge/e6Pl3QTNGI2Je+6ixVVDmmE4Nui8/dHRBKxMUvjJxn6CYEcMQdTSxHreC3USOxTDrvUPLtN5J7w==');
        aceScript.setAttribute('crossorigin', 'anonymous');
        aceScript.setAttribute('referrerpolicy', 'no-referrer');
        aceScript.addEventListener("load", () => {
            this.buildEditor();
        }, false);
        document.head.appendChild(aceScript)


    }




};
</script>
<style scoped>
pre {
    height: 65vh;
    border: 1px solid lightgray;
}
</style>