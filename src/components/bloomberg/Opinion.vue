<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-opinion',

    setup() {
        const opinions = ref([
            {
                author: 'Lisa Jarvis',
                article:
                    'Australia’s Early Flu Season Shows Americans Need Their Shots',
            },
            {
                author: 'Stephen Mihm',
                article: 'Elon Musk’s Futurist Bookshelf Needs Alvin Toffler',
            },
            {
                author: 'Brooke Sample',
                article: 'Retailers Should Heed Target’s Cautionary Tale',
            },
            {
                author: 'Stephen L. Carter',
                article:
                    'What Watching ‘All the President’s Men’ Won’t Tell You',
            },
            {
                author: 'Tim Culpan',
                article:
                    'TSMC May Be Recession-Proof, But It’s Not Bulletproof',
            },
        ]);

        return {
            opinions,
        };
    },
});
</script>

<template>
    <div class="space-y-2">
        <div class="border-y border-black py-1">
            <span class="text-2xl font-bold">
                Bloomberg
                <span class="text-bloombergBlue">Opinion</span>
            </span>
        </div>
        <div
            class="flex flex-col space-y-1 divide-y divide-dashed divide-black"
        >
            <template v-for="(opinion, index) in opinions" :key="index">
                <div class="flex flex-col space-y-1 py-2">
                    <h3 class="text-sm text-bloombergBlue font-bold">
                        {{ opinion.author }}
                    </h3>
                    <a href="#" class="text-md font-bold hover:underline">{{
                        opinion.article
                    }}</a>
                </div>
            </template>
            <div class="flex flex-row justify-between py-1">
                <a href="#" class="text-xs font-light hover:underline"
                    >MORE FROM OPINION</a
                >
                <svg
                    class="h-4 w-4 text-black cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </div>
        </div>
    </div>
</template>
