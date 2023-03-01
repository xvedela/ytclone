<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';


const store = useStore()
const categories = computed(() => store.getters["categories/categories"])
const changeCategory = (e) => {
    store.state.categories.activeCategory = e.target.innerHTML
}
</script>



<template>
    <div class="categories">
        <div @click="changeCategory" v-for="category in categories" class="category">
            <p>{{ category.category }}</p>
        </div>


    </div>
</template>

<style>
.categories {
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0%;
    top: 70px;
    background-color: white;
    height: 30px;
    width: 100vh;
}

.category {
    margin-left: 15px;
    background-color: rgba(250, 242, 242, 0.941);
    width: 80px;
    height: 30px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
}

.category:hover {
    background-color: rgba(128, 128, 128, 0.44);

}
</style>