<script setup>
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

const store = useStore()

const changeSearch = ( e ) => store.commit("ytbe/UPDATE_SEARCH_STRING", e.target.value)
</script>

<template>
    <div class="middle-part">
        <input class="search-input" @input="changeSearch" placeholder="ძიება">
        <div class="search-button " @click="changeSearch">
            <img class="search-button-logo" src="../../assets/icons/3031293.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.middle-part {
    margin-left: 25%;
    width: 500px;
    display: flex;
}

.search-input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.308);
    padding-left: 20px;
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-size: 15px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
}

.search-button-logo {
    width: 20px;
}

.search-button {
    background-color: rgba(128, 128, 128, 0.068);
    padding-left: 13px;
    padding-right: 13px;
    display: flex;
    align-items: center;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.308);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
}

.search-button:hover {
    border-color: rgba(0, 0, 0, 0.658);
}
</style>
