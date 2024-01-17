<template>

    <Head>
        <title>All My Works</title>
    </Head>

    <App>
        
        <div class="container mx-auto">
            
            <WorkGrid title="Selected work I've taken on in the past." :projects="works"/>
            

        </div>


    </App>

</template>
<script setup>
import { reactive,defineProps } from 'vue';
import App from './components/App.vue';
import WorkGrid from './components/works/WorkGrid.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    works:{
        type: Array
    }
});

const worksReactive = reactive({
    works: props.works
});

</script>