<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-more-news',

    setup() {
        const news = ref([
            {
                category: 'Markets',
                title: 'Shanghai Reimposes Dine-In Ban, Punishes Officials Over Lapse',
                time: '4 hours ago',
            },
            {
                category: 'Politics',
                title: 'China Starts Solomon Islands Police Training After Security Pact',
                time: '4 hours ago',
            },
            {
                category: 'Business',
                title: 'Banker to 467 Million Indians Says Loan Demand Is Bouncing Back',
                time: '4 hours ago',
            },
            {
                category: 'Technology',
                title: 'Crypto Extends Tumble Into Weekend After US Inflation Data',
                time: '4 hours ago',
            },
            {
                category: 'Politics',
                title: 'US Sees Signs of Asian Nations Examining Future Of Russian Ties',
                time: '4 hours ago',
            },
            {
                category: 'Markets',
                title: 'June’s Looking Like a Game Changer for Beleaguered China Stocks',
                time: '4 hours ago',
            },
            {
                category: 'Politics',
                title: 'Ukraine Latest: Chemical Plant Reported Ablaze in Embattled City',
                time: '4 hours ago',
            },
            {
                category: 'Politics',
                title: 'Hong Kong Daily Covid Cases Rise to Highest in Nearly Two Months',
                time: '4 hours ago',
            },
        ]);

        return {
            news,
        };
    },
});
</script>

<template>
    <div class="flex flex-row flex-wrap justify-between">
        <template v-for="(news, index) in news" :key="index">
            <div class="w-1/4 flex flex-col space-y-1 pt-2 py-5">
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
</template>
