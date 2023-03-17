<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const name = ref();

const categories = computed(() => store.getters['category/categories'])

const logOut = () => {
    localStorage.clear(); router.push('/');
}

onMounted(() => store.dispatch('category/getCategories'))
</script>

<template>
    <button @click="logOut">Log Out</button>
    <form @submit.prevent="store.dispatch('category/addCategory', name); name = null;">
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Enter name:</label>
        <div class="relative">
            <input type="search" v-model="name" id="search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name" required>
            <button
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </div>
    </form>
    <div class="flex flex-col w-full">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">Name</th>
                                <th scope="col" class="px-6 py-4">Type</th>
                                <th scope="col" class="px-6 py-4"></th>
                                <th scope="col" class="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="c in categories" class="flex justify-around p-1.5 border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">{{ c.name }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ c.type }}</td>
                                <td class="whitespace-nowrap px-6 py-4 ml-1.5">Edit</td>
                                <td class="whitespace-nowrap px-6 py-4 ml-1.5"><button
                                        @click="store.dispatch('category/deleteCategory', c.id)">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>