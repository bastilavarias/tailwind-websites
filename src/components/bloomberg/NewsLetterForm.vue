<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-news-letter-form',
});
</script>

<template>
    <div class="flex flex-col space-y-5">
        <div class="flex flex-col space-y-1">
            <h5 class="text-md md:text-lg font-bold">
                One story you'll want to talk about.
            </h5>
            <p class="text-sm md:text-md">
                Get The Big Take newsletter in your inbox daily.
            </p>
        </div>
        <div class="flex flex-col space-y-3">
            <div class="flex flex-row justify-between space-x-3">
                <input
                    type="text"
                    class="w-1/2 outline-none text-sm border-b border-black"
                    placeholder="Enter your E-mail"
                />
                <button
                    class="w-1/2 border border-black text-black hover:text-gray-500 font-bold text-sm px-2 py-3"
                >
                    Sign Up
                </button>
            </div>
            <div class="flex flex-row items-center space-x-2">
                <input type="checkbox" id="agreement" />
                <label class="text-xs text-gray-500" for="agreement">
                    Bloomberg may send me offers and promotions.</label
                >
            </div>
            <p class="text-xs text-gray-500">
                By submitting my information, I agree to the
                <a href="#" class="underline text-black cursor-pointer"
                    >Privacy Policy</a
                >
                and
                <a href="#" class="underline text-black cursor-pointer"
                    >Terms of Service</a
                >
            </p>
        </div>
    </div>
</template>
