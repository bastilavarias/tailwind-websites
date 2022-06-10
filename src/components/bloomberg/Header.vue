<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'bloomberg-header',
});
</script>

<template>
    <div class="flex flex-row justify-between items-center pt-5 pb-2 pl-3 pr-2">
        <div class="flex flex-col items-start">
            <h1 class="text-4xl font-bold">Bloomberg</h1>
            <div class="flex flex-row items-center justify-center">
                <a href="#" class="text-md">Asia Edition</a>
                <svg
                    class="h-5 w-5 text-black cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </div>
        <div class="flex flex-row items-center space-x-3">
            <a href="" class="text-sm text-black hover:text-gray-500"
                >Sign In</a
            >
            <button
                class="border border-black text-black hover:text-gray-500 font-bold text-sm rounded-md px-2 py-1"
            >
                Subscribe
            </button>
            <button class="border border-black rounded-md px-2 py-1">
                <svg
                    class="h-5 w-5 text-black hover:text-gray-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </button>
        </div>
    </div>
</template>
