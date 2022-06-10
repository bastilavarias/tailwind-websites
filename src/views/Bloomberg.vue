<script lang="ts">
import { defineComponent } from 'vue';
import BloombergSystemBar from '../components/bloomberg/SystemBar.vue';
import BloombergAssetStatusBar from '../components/bloomberg/AssetStatusBar.vue';

export default defineComponent({
    components: { BloombergAssetStatusBar, BloombergSystemBar },
    setup() {
        document.title = 'Website #2 (Bloomberg)';
    },
});
</script>

<template>
    <main>
        <bloomberg-system-bar></bloomberg-system-bar>

        <section class="container mx-auto border-x border-black">
            <bloomberg-asset-status-bar></bloomberg-asset-status-bar>
        </section>
    </main>
</template>
