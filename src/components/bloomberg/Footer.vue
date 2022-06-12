<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'bloomberg-footer',
});
</script>

<template>
    <footer class="border-y border-black py-5">
        <div class="container mx-auto flex justify-between">
            <div class="flex flex-col">
                <div class="flex flex-row space-x-5">
                    <a
                        href=""
                        class="text-xs text-gray-500 cursor-pointer hover:underline"
                        >Terms of Service</a
                    >
                    <a
                        href=""
                        class="text-xs text-gray-500 cursor-pointer hover:underline"
                        >Do Not Sell My Info
                    </a>
                    <a
                        href=""
                        class="text-xs text-gray-500 cursor-pointer hover:underline"
                        >Trademarks
                    </a>
                </div>
                <a
                    href=""
                    class="text-xs text-gray-500 cursor-pointer hover:underline"
                    >Privacy Policy</a
                >
                <p href="" class="text-xs text-gray-500">
                    ©2022 Bloomberg L.P. All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>
