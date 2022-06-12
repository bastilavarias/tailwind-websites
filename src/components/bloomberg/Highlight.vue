<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-highlight',

    setup() {
        const news = ref([
            'Australia Looks to Earn Its Place in Pacific as China Muscles In',
            'Shangri-La Latest: China Says US Strategy Fuels Tensions in Asia',
            'Austin Urges United Front in Asia to Stop Repeat of Ukraine',
        ]);

        return {
            news,
        };
    },
});
</script>

<template>
    <div class="flex flex-col space-y-5">
        <h3 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Weekends
        </h3>
        <div class="flex flex-row space-x-5">
            <div class="w-1/2">
                <img
                    src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQdUwrEoGIao/v1/320x240.jpg"
                    alt="Photo"
                    class="w-max h-auto"
                    style="width: 100%"
                />
            </div>
            <div class="w-1/2 flex flex-col space-y-2">
                <div class="flex flex-col space-y-1">
                    <a href="#" class="text-sm hover:underline">Politics</a>
                    <a
                        href="#"
                        class="text-xl font-bold hover:underline md:text-2xl"
                    >
                        China Warns US Indo-Pacific Strategy Fueling Future
                        Conflict
                    </a>
                    <span class="text-xs text-gray-500">4 hours ago</span>
                </div>
                <div class="divide-y-1 divide-y divide-dashed divide-black">
                    <template v-for="(item, index) in news" :key="index">
                        <div class="py-1">
                            <a href="#" class="text-xs hover:underline">{{
                                item
                            }}</a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
