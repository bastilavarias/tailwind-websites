<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-trending-news',

    setup() {
        const news = ref([
            {
                category: 'Food',
                title: "'Unprecedented' Sriracha Sauce Shortage May Last for Months",
            },
            {
                category: 'New Energy',
                title: "Billionaire's Solar Plan Could Save Philippines 1.4 Million Tons of Coal a Year",
            },
            {
                category: 'Wealth',
                title: 'These Are the World’s 20 Most Expensive Cities for Expats',
            },
        ]);

        return {
            news,
        };
    },
});
</script>

<template>
    <div class="space-y-2">
        <div class="border-y border-black py-1">
            <span class="text-2xl font-weight-medium">TRENDING</span>
        </div>
        <div class="space-y-3 divide-y divide-dashed divide-black">
            <template v-for="(item, index) in news" :key="index">
                <div class="flex flex-col space-y-1 pt-2">
                    <div class="flex flex-row items-center space-x-2">
                        <span class="text-2xl">{{ index + 1 }}</span>
                        <a href="#" class="text-sm hover:underline">{{
                            item.category
                        }}</a>
                    </div>
                    <a href="#" class="text-md font-bold hover:underline">
                        {{ item.title }}
                    </a>
                </div>
            </template>
        </div>
    </div>
</template>
