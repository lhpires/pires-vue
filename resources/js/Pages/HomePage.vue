<template>
    <Head>
        <title>LHPIRES</title>
    </Head>
    <App>
        
        <div class="container mx-auto">

            <PresentationPires />            
            <WorkGrid :projects="works"/>

            <Link :href="$route('portfolio.works')" class="block text-center">
                <ButtonToWork>
                    See my projects
                </ButtonToWork>
            </Link>
          

        </div>
    </App>

</template>
<script setup>
import { ref,defineProps } from 'vue';
import App from './components/App.vue';
import PresentationPires from './components/structure/PresentationPires.vue';
import WorkGrid from "./components/works/WorkGrid.vue";
import ButtonToWork from './components/reusable/ButtonToWork.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps({
    works: Object
});

const works = ref(props.works);

</script>