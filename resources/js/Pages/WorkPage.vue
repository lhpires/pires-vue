<template>

    <Head>
        <title>{{work.title}}</title>
    </Head>

    <App>
        
        <div class="container mx-auto">
            <section>
                <div class="mb-24">
                    <p class="font-general-medium text-center text-3xl sm:text-4xl font-bold text-pires-color dark:text-primary-light mt-14 sm:mt-20"> {{ work.title }}</p>
                    <a class="text-xl block text-center dark:text-ternary-light hover:opacity-80 transition-opacity duration-300 ease-in-out" v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer">{{  work.link  }}</a>
                </div>
                <picture>
                    <CarrouselVue :photos="photos"/>
                </picture>
                
                <article v-html="work.description_english" class="mt-24 dark:text-white"></article>
                
            </section>
          
        </div>


    </App>

</template>
<script setup>
import { reactive,defineProps } from 'vue';
import App from './components/App.vue';
import { Head } from '@inertiajs/vue3';
import CarrouselVue from './components/reusable/Carrousel.vue';

const props = defineProps({
    work:{
        type: Object,
        required: true
    },
    photos:{
        type: Array,
        required: true
    }
});

const workReactive = reactive({
    work: props.work,
    photos: props.photos,
});

</script>