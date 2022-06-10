<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-headline',
});
</script>

<template>
    <div class="pt-6 flex flex-row space-x-7">
        <div class="w-1/4">
            <img
                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ikiwRSS2NqHo/v1/390x293.jpg"
                alt="Photo"
                class="w-max h-auto"
                style="width: 100%"
            />
        </div>
        <div
            class="w-3/4 flex flex-col justify-start border-b border-black space-y-5 pb-10"
        >
            <h3
                class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold hover:underline"
            >
                Five Key Moments From the Jan. 6 Capitol Riot Hearing
            </h3>
            <div class="flex flex-row space-x-10">
                <a href="#" class="text-md xl:text-xl hover:underline">
                    Ivanka Trump Says She Believed AG Barr That Her Father Lost
                    2020 Election
                </a>
                <a href="#" class="text-md xl:text-xl hover:underline">
                    ‘Slipping in People’s Blood’: Capitol Police Officer Edwards
                    Recalls Fight With Jan. 6 Mob
                </a>
                <a href="#" class="text-md xl:text-xl hover:underline">
                    Kushner Dismissed White House Counsel Threats to Quit Over
                    2020 Election
                </a>
            </div>
        </div>
    </div>
</template>
