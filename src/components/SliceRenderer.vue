<template>
    <pboml-parser v-if="showParser" standalone :payload="payload"></pboml-parser>
</template>
<script>

export default {
    props: {
        payload: String
    },
    data() {
        return {
            showParser: true
        }
    },
    methods: {
        redraw() {
            this.showParser = false;
            this.$nextTick(() => this.showParser = true)
        }
    },
    watch: {
        payload: function (nv) {
            // Force render parser. Not ideal...
            this.redraw()
        },
        '$root.language': function (newLang) {
            this.redraw()
        }
    }
}
</script>