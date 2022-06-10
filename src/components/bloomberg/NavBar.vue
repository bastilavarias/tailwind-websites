<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-nav-bar',

    setup() {
        const navigations = ref([
            'Markets',
            'Technology',
            'Politics',
            'Wealth',
            'Pursuits',
            'Opinion',
            'Business',
            'Equality',
            'Green',
            'CityLab',
            'Crypto',
        ]);

        return {
            navigations,
        };
    },
});
</script>

<template>
    <nav class="hidden lg:block border-y border-black">
        <div class="flex flex-row justify-between">
            <div class="flex-none h-max flex items-center">
                <button
                    class="w-max py-2 flex flex-row items-center hover:bg-black hover:text-white lg:text-sm xl:text-md lg:px-2 xl:px-6 live-now"
                >
                    <svg
                        class="h-3 w-3 bg-black text-black hover:bg-black hover:text-white mr-1 rounded-full"
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
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="12" r="5" />
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke-dasharray=".001 4.03"
                        /></svg
                    >Live Now
                </button>
            </div>
            <div
                class="grow h-max border-x border-black flex flex-row justify-between"
            >
                <template
                    v-for="(navigation, index) in navigations"
                    :key="index"
                >
                    <button
                        class="py-2 flex flex-row items-center hover:bg-black hover:text-white lg:text-sm xl:text-md lg:px-2 xl:px-6"
                    >
                        {{ navigation }}
                    </button>
                </template>
            </div>
            <div class="flex-none h-max">
                <button
                    class="w-max py-2 flex flex-row items-center text-black hover:bg-black hover:text-white lg:text-sm xl:text-md lg:px-1 xl:px-3"
                >
                    More
                    <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.live-now:hover,
svg {
    color: white;
}
</style>
