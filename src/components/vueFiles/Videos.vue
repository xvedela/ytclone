<script setup>
import { useStore } from 'vuex';
import { computed, onMounted} from 'vue'
const store = useStore()

const videos = computed(() => store.getters["ytbe/videos"])
const active = computed(() => store.getters["menu/gridTemplate"])
const activeCategory = computed(() => store.getters["categories/activeCategory"])  


</script>



<template>
    <div class="container">
        <div v-for=" video in videos" :key="c=video.index" class="flex flex-col">{{ video }}}</div>
    </div>
</template>


<style scoped >

</style>