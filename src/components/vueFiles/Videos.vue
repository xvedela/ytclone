<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'
const store = useStore()
const videos = computed(() => store.getters["Youtube/videos"])
const active = computed(() => store.getters["menu/gridTemplate"])
const activeCategory = computed(() => store.getters["categories/activeCategory"])  
</script>

<template>
        <div class="video-table" :style="{gridTemplateColumns: active}">
        <div class="card" v-for="video in videos" >
          <div v-if="video.category== activeCategory ">
            <img class="video-img" :src="video.img" alt="">
            <div class="description">
                <img class="profile-pic" :src="video.uploader_img" alt="">
                <div class="video-name">
                    <h3 class="name">{{ video.name }}</h3>
                    <p class="uploader">{{ video.uploader }}</p>
                    <p class="upload-date">{{ video.date }}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>


<style scoped >
.upload-date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606060;
    padding-bottom: 3px;
}
.profile-pic {
    margin-top: -10%;
}
.name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding-bottom: 3px;
}
.uploader {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606060;
    padding-bottom: 3px;
}
.video-name {
    padding: 8px;
}
.description {
    display: flex;
    align-items: center;
}
.video-table {
    display: grid;
    margin-top: 5%;
    row-gap: 30px;
    width: 80vw;
    margin-left: 10%;
    box-sizing: border-box;
}
.video-img {
    width: 87%;
    height: 180px;
    border-radius: 15px;
}</style>