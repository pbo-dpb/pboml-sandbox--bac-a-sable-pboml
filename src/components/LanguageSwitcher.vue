<template>

    <div class="flex flex-row rounded shadow-sm divide-x border border-gray-300 bg-clip-border font-semibold">
        <button href="#" aria-current="page" class="py-2 px-4 text-sm w-12 hover:bg-blue-100 hover:text-blue-900"
            :class="{
                'bg-blue-200 text-gray-700 shadow-inner': $root.language === 'en',
                'text-blue-800': $root.language === 'fr'
            }" @click="$emit('switch', 'en')">
            EN
        </button>
        <button href=" #" class="py-2 px-4 text-sm w-12 hover:bg-blue-100 hover:text-blue-900" :class="{
            'bg-blue-200 text-gray-700 shadow-inner': $root.language === 'fr',
            'text-blue-800': $root.language === 'en'
        }" @click="$emit('switch', 'fr')">
            FR
        </button>

    </div>
</template>
<script>
export default {


}
</script>