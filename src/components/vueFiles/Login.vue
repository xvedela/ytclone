<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            const data = {
                email: this.email,
                password: this.password
            };

            axios.post('https://items.magischer.de/api/auth/login', data)
                .then(response => {
                    if (response.data.status) {
                        this.$store.dispatch('register/token', response.data.token)
                        this.$router.push({ name: 'settings' })
                    } else {
                        this.$router.push({ name: 'settings', params: 'error' })
                    }
                })
                .catch(error => {
                });
        },
        cancel() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<template>
     <RouterView>
    <div class="box">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" v-model="email" required class="border rounded-lg py-2 px-3 w-full">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" id="password" v-model="password" required class="border rounded-lg py-2 px-3 w-full">
            </div>
            <div class="text-center">
                <button>
                    Submit
                </button>
                <div class="cancel">
                    <button>
                        cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
   </RouterView>
</template>
  
<style scoped>
.box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #8c9aea;
    padding: 20px;
    border: 1px solid #d20303;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.text-2xl {
    font-size: 2rem;
}

.font-bold {
    font-weight: bold;
}

.mb-4 {
    margin-bottom: 1rem;
}

.block {
    display: block;
}

.text-gray-700 {
    color: #4a5568;
}

.border {
    border: 1px solid #e2e8f0;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.w-full {
    width: 100%;
}

.text-center {
    text-align: center;
}
.cancel {
    margin-left: 157px;
}
</style>