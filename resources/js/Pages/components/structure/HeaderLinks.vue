<template>
<div class="hidden m-0 sm:ml-4 mt-5 sm:mt-3 md:flex p-5 sm:p-0 justify-center items-center shadow-none">
    <LinkComponent v-for="LinkObject in appLinks" :LinkObject="LinkObject" :key="LinkObject.id" class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2"/>
</div>
</template>

<script setup>
import { defineProps  } from "vue";
import LinkComponent from "./LinkComponent.vue";
import { appLinks } from '../../data/appLinks.js';

</script>