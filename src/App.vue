<script setup>
import Categories from "./components/vueFiles/Categories.vue"
import Head from "./components/vueFiles/Header.vue"
import Videos from "./components/vueFiles/Videos.vue"
import LeftSide from "./components/vueFiles/LeftSide.vue"
import { useStore } from 'vuex';
const store = useStore()


</script>

<template>

      <Head />
      <Categories />
      <LeftSide />
      <Videos />
      <RouterView />

</template>

<style >
.header-div{
  display: flex;
}
.categories {
  width: 100%;
  height: 50px;
}
.ff {
  display: flex;
}
.right {
  margin-top: 70px;
  height: 100%;
  width: 100%;
  background-color: rgba(241, 236, 236, 0.911);
}
</style>