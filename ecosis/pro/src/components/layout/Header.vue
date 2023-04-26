<template>
    <header class="sticky top-0 z-50 bg-black/10 transition duration-300">
        <div class="container">
            <div class="flex items-center justify-between py-5 lg:py-0">
                <router-link to="/" class="flex text-white text-2xl">
                  <img src="/assets/logos/ecosisPro_light.png" alt="logo" class="h-10 mr-2" />
                  <p>ecosis <span class="font-bold">Pro</span></p>
                </router-link>
                <div class="flex items-center">
                    <div @click="toggleMenu()" class="overlay fixed inset-0 z-[51] bg-black/60" :class="{ hidden: !showMenu }"></div>
                    <div class="menus" :class="{ 'overflow-y-auto ltr:!right-0 rtl:!left-0': showMenu }">
                        <div class="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                            <button @click="toggleMenu()" type="button" class="p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6 text-black dark:text-white"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul @click="showMenu = false">
                            <li><router-link to="/">Home</router-link></li>
                            <li>
                                <router-link to="/#about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/#features">Feature</router-link>
                            </li>
                            <li>
                                <router-link to="/#prices">Prices</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    const showMenu = ref(false);
    const showSearch = ref(false);
    // Mobile menu js
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            showMenu.value = !showMenu.value;
        } else {
            showMenu.value = false;
        }
    };

    // Search Bar - Header
    const toggleSearch = () => {
        showSearch.value = !showSearch.value;
    };
</script>
