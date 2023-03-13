<script>

import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      
      axios.post('https://items.magischer.de/api/auth/register', data)
        .then(response => {
         console.log(response.data)
        })
        .catch(error => {
        });
    }
  }
}
</script>

<template>
  <div class="box3">
    <h2 class="text">Register</h2>
    <form @submit.prevent="submitForm">
      <div class="nameclass">
        <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
        <input type="text" id="name" v-model="name" required class="border rounded-lg py-2 px-3 w-full">
      </div>
      
      <div class="emailclass">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" v-model="email" required class="border rounded-lg py-2 px-3 w-full">
      </div>
      
      <div class="passwordclass">
        <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
        <input type="password" id="password" v-model="password" required class="border rounded-lg py-2 px-3 w-full">
      </div>
        <div class="submitclass">
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.box3 {
  background-color: blue;
}
</style>