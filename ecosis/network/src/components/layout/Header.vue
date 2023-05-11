<template>
    <header class="sticky top-0 z-50 bg-black/10 transition duration-300 !backdrop-blur-md">
        <div class="container">
            <div class="flex items-center justify-between py-5 lg:py-0">
                <router-link to="/"><img src="/assets/logos/ecosis_v2.png" alt="logo" class="h-10" /></router-link>
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
                            <!-- <li><router-link to="/#about" :class="{ active: $route.name === '/' }"> About </router-link></li> -->
                            <li>
                                <router-link to="/#about" :class="{ active: $route.name === '#about' }">About</router-link>
                            </li>
                            <li>
                                <router-link to="/#guide" :class="{ active: $route.name === '#guide' }">Guide</router-link>
                            </li>
                            <li>
                                <router-link to="/#team" :class="{ active: $route.name === '#team' }">Team</router-link>
                            </li>

                            <div class="m-2">
                              <a href="https://airtable.com/shruP2nuVOBvsktsf" target="_blank" class="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto px-4">Get Early Access</a>
                            </div>
                        </ul>
                    </div>

                    <button type="button" class="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden" @click="toggleMenu()">
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white">
                            <path
                                d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                fill="currentColor"
                            />
                            <path d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z" fill="currentColor" />
                            <path d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z" fill="currentColor" />
                        </svg>
                    </button>
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
