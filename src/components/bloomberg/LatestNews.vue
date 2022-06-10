<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-latest-news',

    setup() {
        const latestNews = ref([
            {
                category: 'Pursuits',
                title: 'Japan Eases Foreign Tourism Ban, Allows Guided Package Tours',
                time: 'updated 3h ago',
            },
            {
                category: 'Green',
                title: 'Ex-Nuclear Watchdog Chief Urges Japan to Win Atomic Support',
                time: '3h ago',
            },
            {
                category: 'Politics',
                title: 'Japan’s Kishida Pressured Over Still-Strict Border Measures',
                time: 'updated 4h ago',
            },
        ]);

        return {
            latestNews,
        };
    },
});
</script>

<template>
    <div class="space-y-2">
        <div class="border-y border-black py-1">
            <span class="text-2xl font-weight-medium text-red-500">LATEST</span>
        </div>
        <div class="space-y-3 divide-y divide-dashed divide-black">
            <template v-for="(news, index) in latestNews" :key="index">
                <div class="flex flex-col space-y-1 pt-2">
                    <a href="#" class="text-sm hover:underline">{{
                        news.category
                    }}</a>
                    <a href="#" class="text-md font-bold hover:underline">
                        {{ news.title }}
                    </a>
                    <span class="text-xs text-gray-500">{{ news.time }}</span>
                </div>
            </template>
        </div>
    </div>
</template>
