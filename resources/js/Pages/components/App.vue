<template>
    <div class="pt-0.5">
		<!-- HEADER -->
		<HeaderPires />

        <!-- Conteúdo -->
        <slot></slot>        

        <!-- Footer -->
        <FooterPires />

	</div>
</template>

<script setup>
import { onMounted,onUpdated } from 'vue'
import feather from 'feather-icons';
import HeaderPires from './structure/HeaderPires.vue';
import FooterPires from './structure/FooterPires.vue';

onMounted( () => {
    feather.replace();    
});

onUpdated( () => {
    feather.replace();
});



</script>