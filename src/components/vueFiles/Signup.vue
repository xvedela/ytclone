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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


.text {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}


.block {
  display: block;
}

.text-gray-700 {
  color: #4a5568;
}

.font-bold {
  font-weight: bold;
}

.mb-2 {
  margin-bottom: 8px;
}

.border {
  border: 1px solid #ddd;
}

.rounded-lg {
  border-radius: 8px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}

.w-full {
  width: 100%;
}


.bg-blue-500 {
  background-color: #4299e1;
  margin-top: 30px;
  margin-left: 120px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.rounded {
  border-radius: 9999px;
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}

.text-white {
  color: #fff;
}

</style>