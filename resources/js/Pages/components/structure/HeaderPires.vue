<template>
    <nav id="nav" class="sm:container sm:mx-auto">
        <!-- Header start -->
        <div class="z-10 max-w-screen-lg xl:max-w-screen-xl flex justify-around sm:items-center my-6">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <Link :href="$route('portfolio.homeSweetHome')" class="santa-logo font-bold block relative text-left text-3xl text-pires-color hover:opacity-90 transition-opacity duration-200 ease-in-out dark:text-ternary-light sm:mx-4 mb-2 sm:py-2">
                        LHPIRES
                        <img
                            v-if="holidayThemeActive"
                            :src="santaHatUrl"
                            alt=""
                            aria-hidden="true"
                            class="santa-hat"
                        />
                    </Link>
                </div>
            </div>

            <!-- Header links -->
            <HeaderLinks />

            
            <div class="hidden sm:flex justify-between items-center flex-col md:flex-row">
                <!-- Hire me button -->
                <div class="hidden md:block">
                    <ThemeComponent :theme="theme" @theme-changed="updateTheme" class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer" />
                </div>              
            </div>

            <div class="block md:hidden">
                <XMobile :theme="theme"  @theme-changed="updateTheme"/>
            </div>


        </div>
    </nav>
</template>
<script setup>
import { ref,onMounted,onUpdated  } from "vue";

import feather from 'feather-icons';
import HeaderLinks from "./HeaderLinks.vue";
import XMobile from "../reusable/XMobile.vue";
import ThemeComponent from "../Theme.vue";
import { isHolidayThemeActive } from '../../../config/holidayTheme.js';


const theme = ref('');
const santaHatUrl = '/images/natal/chapeu-noel.png';
const holidayThemeActive = isHolidayThemeActive();

const updateTheme = (newTheme) => {
    theme.value = newTheme;
    if(theme.value == "dark"){
        document.getElementsByTagName('html')[0].classList.add('dark')
    }else{
        document.getElementsByTagName('html')[0].classList.remove('dark') 
    }
}

onMounted( () => {
    theme.value = (localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'light';
    feather.replace();
});

onUpdated( () => {
    feather.replace();
});


</script>

<style scoped>
.santa-logo {
    width: fit-content;
}

.santa-hat {
    position: absolute;
    width: 1.95rem;
    height: auto;
    left: -0.9rem;
    top: -0.25rem;
    transform: rotate(-11deg);
    pointer-events: none;
    object-fit: contain;
}

@media (min-width: 640px) {
    .santa-hat {
        width: 2.25rem;
        left: -1.277rem;
        top: -0.177rem;
    }
}
</style>