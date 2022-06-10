<script lang="ts">
import { defineComponent } from 'vue';
import BloombergSystemBar from '../components/bloomberg/SystemBar.vue';
import BloombergAssetStatusBar from '../components/bloomberg/AssetStatusBar.vue';
import BloombergHeader from '../components/bloomberg/Header.vue';
import BloombergNavBar from '../components/bloomberg/NavBar.vue';
import BloombergHeadline from '../components/bloomberg/Headline.vue';

export default defineComponent({
    components: {
        BloombergHeadline,
        BloombergNavBar,
        BloombergHeader,
        BloombergAssetStatusBar,
        BloombergSystemBar,
    },
    setup() {
        document.title = 'Website #2 (Bloomberg)';
    },
});
</script>

<template>
    <main>
        <bloomberg-system-bar></bloomberg-system-bar>

        <section class="lg:container mx-auto md:border-x md:border-black">
            <bloomberg-asset-status-bar></bloomberg-asset-status-bar>
            <bloomberg-header></bloomberg-header>
            <bloomberg-nav-bar></bloomberg-nav-bar>
            <div class="px-3">
                <bloomberg-headline></bloomberg-headline>
            </div>
        </section>
    </main>
</template>
