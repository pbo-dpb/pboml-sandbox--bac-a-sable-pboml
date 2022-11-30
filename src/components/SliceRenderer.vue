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
    watch: {
        payload: function (nv) {
            // Force render parser. Not ideal...
            this.showParser = false;
            this.$nextTick(() => this.showParser = true)
        }
    }
}
</script>