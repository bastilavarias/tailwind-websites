<template>
    <nav class="bg-white">
        <div class="container mx-auto py-2 flex justify-between text-blue">
            <div class="flex space-x-2">
                <router-link :to="{ name: 'site-one' }">
                    <span class="text-blue-600 text-sm underline"
                        >Website #1 (Manage)</span
                    >
                </router-link>
            </div>
            <a href="" target="_blank">
                <span class="text-blue-600 text-sm underline"
                    >Source Code (GitHub)</span
                >
            </a>
        </div>
    </nav>
    <router-view></router-view>
</template>
