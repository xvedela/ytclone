<script setup>
import { useStore } from 'vuex';
import Profilelogo from './Profilelogo.vue';
import Search from './Search.vue';
import Bellicon from './Bellicon.vue'
const store = useStore()
const menuOn = () => {
  store.state.menu.menuOn = !store.state.menu.menuOn

}

</script>
<template>
  <div class="head">
    <div class="first-part">
      <img @click="menuOn" class="hamburger" src="../../assets/icons/Hamburger_icon.svg.png" alt="">
      <img class="youtube-logo" src="../../assets/icons/8gzcr6RpGStvZFA2qRt4v6-removebg-preview.png" alt="">
    </div>
    <Search />
    <Bellicon />
    <Profilelogo />
  </div>
</template>

<style>
.hamburger {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.youtube-logo {
  width: 120px;
  height: 70px;
  margin-left: 20px;
}

.head {
  top: 0;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100%;
}

.first-part {
  display: flex;
  align-items: center;
  margin-left: 30px;
}
</style>