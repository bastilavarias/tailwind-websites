<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const tabs = ref([
            {
                name: 'Website #1 (Manage)',
                to: { name: 'manage' },
            },

            {
                name: 'Website #2 (Bloomberg)',
                to: { name: 'bloomberg' },
            },
        ]);

        return {
            tabs,
        };
    },
});
</script>

<template>
    <nav class="bg-white">
        <div class="container mx-auto py-2 flex justify-between text-blue">
            <div class="flex space-x-2">
                <template v-for="(tab, index) in tabs" :key="index">
                    <router-link :to="tab.to">
                        <span class="text-blue-600 text-sm underline">{{
                            tab.name
                        }}</span>
                    </router-link>
                </template>
            </div>
            <a
                href="https://github.com/bastilavarias/tailwind-websites"
                target="_blank"
            >
                <span class="text-blue-600 text-sm underline"
                    >Source Code (GitHub)</span
                >
            </a>
        </div>
    </nav>
    <router-view></router-view>
</template>
