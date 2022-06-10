<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'bloomberg-system-bar',
});
</script>

<template>
    <div class="hidden bg-black py-1 md:block">
        <div
            class="container mx-auto flex flex-row space-x-2 items-center pl-8"
        >
            <div class="flex flex-row items-center space-x-1">
                <a href="#" class="text-white text-xs font-medium"
                    >Bloomberg the Company & Its Products</a
                >
                <svg
                    class="h-5 w-5 text-gray-500 hover:text-white cursor-pointer"
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
            <div class="border-l border-white flex items-center pl-2">
                <a href="#" class="text-white text-xs font-medium"
                    >Bloomberg Terminal Demo Request</a
                >
            </div>
            <div class="border-l border-white flex items-center space-x-2 pl-2">
                <svg
                    class="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>

                <a href="#" class="text-bloombergOrange text-xs font-medium"
                    >Bloomberg Terminal Demo Request</a
                >
            </div>
            <div class="border-l border-white flex items-center pl-2">
                <a href="#" class="text-white text-xs font-medium"
                    >Bloomberg Customer Support</a
                >
            </div>
        </div>
    </div>
</template>
