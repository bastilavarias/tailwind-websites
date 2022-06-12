<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-asset-status-bar',

    setup() {
        const assets = ref([
            {
                name: 'DAX',
                price: 14198.8,
                status: 'down',
                margin: '-1.71%',
            },
            {
                name: 'Pound/Dollar',
                price: 1.25,
                status: 'up',
                margin: '+0.03%',
            },
            {
                name: 'Dollar/Yen',
                price: 134.08,
                status: 'down',
                margin: '-0.21%',
            },
            {
                name: 'Bitcoin',
                price: 30001.08,
                status: 'down',
                margin: '-0.53%',
            },
            {
                name: 'Ethereum',
                price: 1785.24,
                status: 'down',
                margin: '-0.46%',
            },
        ]);

        return {
            assets,
        };
    },
});
</script>

<template>
    <div
        class="flex flex-row justify-between py-1 px-2 border-b-2 border-gray overflow-y-auto space-x-5 md:space-x-3 lg:space-x-1 xl:space-x-0"
    >
        <template v-for="(asset, index) in assets" :key="index">
            <div class="flex flex-row space-x-2 items-center justify-between">
                <div class="flex flex-row text-base font-medium">
                    {{ asset.name }}
                </div>
                <div class="flex flex-row items-center space-x-1">
                    <div class="text-base">{{ asset.price }}</div>
                    <svg
                        class="h-6 w-6 text-green-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        v-if="asset.status === 'up'"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="3 17 9 11 13 15 21 7" />
                        <polyline points="14 7 21 7 21 14" />
                    </svg>
                    <svg
                        class="h-6 w-6 text-red-600"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        v-if="asset.status === 'down'"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="3 7 9 13 13 9 21 17" />
                        <polyline points="21 10 21 17 14 17" />
                    </svg>
                </div>
                <div
                    :class="`text-base ${
                        asset.status === 'up'
                            ? 'text-green-500'
                            : 'text-red-500'
                    }`"
                >
                    {{ asset.margin }}
                </div>
            </div>
        </template>
    </div>
</template>
