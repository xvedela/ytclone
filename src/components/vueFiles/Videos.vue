<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
const store = useStore()

const videos = computed(() => store.getters["Youtube/videos"])
const active = computed(() => store.getters["menu/gridTemplate"])
const activeCategory = computed(() => store.getters["categories/activeCategory"])  

</script>



<template>

</template>


<style scoped >

</style>