<script setup>
import { useStore } from 'vuex';
import { computed, onMounted} from 'vue'
const store = useStore()

const videos = computed(() => store.getters["ytbe/videos"])
const active = computed(() => store.getters["menu/gridTemplate"])
const activeCategory = computed(() => store.getters["categories/activeCategory"])  


</script>

<template>
<div class="videos">
    <div class="video" v-for="video in videos">
      <div class="thumbnail">
        <img alt="" :src="video.img"/>
      </div>

      <div class="details">
        <div class="author">
          <img
              alt=""
              :src="video.img"/>
        </div>
        <div class="title">
          <h3>
            {{ video.name}}
          </h3>
          <a href="#">
            {{video.uploader}}
          </a>
          <span> 2M Views • {{video.date}} </span>
        </div>
      </div>

    </div>
  </div>

  </template>


<style scoped >
.thumbnail img {
    width: 320px;
    height: 180px;
    border-radius: 10px;
}

.author img {
width: 40px;
height: 40px;
border-radius: 20px;
}

.title {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}

.details {
    display: flex;
    flex-direction: row;
    margin-top: 15px;

}

.videos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 90px;

}

.video {
    margin: 20px;
}
</style>