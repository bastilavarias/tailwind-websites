<script lang="ts">
import { defineComponent } from 'vue';
import BloombergSystemBar from '../components/bloomberg/SystemBar.vue';
import BloombergAssetStatusBar from '../components/bloomberg/AssetStatusBar.vue';
import BloombergHeader from '../components/bloomberg/Header.vue';
import BloombergNavBar from '../components/bloomberg/NavBar.vue';
import BloombergHeadline from '../components/bloomberg/Headline.vue';
import BloombergLatestNews from '../components/bloomberg/LatestNews.vue';
import BloombergHighlight from '../components/bloomberg/Highlight.vue';

export default defineComponent({
    components: {
        BloombergHighlight,
        BloombergLatestNews,
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
            <div class="px-3 space-y-5">
                <bloomberg-headline></bloomberg-headline>
                <div class="flex flex-row justify-start space-x-10">
                    <div class="w-1/6">
                        <bloomberg-latest-news></bloomberg-latest-news>
                    </div>
                    <div class="w-6/12">
                        <bloomberg-highlight></bloomberg-highlight>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>

        <footer class="mt-20"></footer>
    </main>
</template>
