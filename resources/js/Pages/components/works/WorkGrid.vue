<template>
	<section class="pt-10 sm:pt-32">
		<div class="text-center">
			<h4 class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-14 text-ternary-dark dark:text-ternary-light">{{ props.title }}</h4>
		</div>
		<section class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 mt-6 sm:gap-10">
			<WorkCard v-for="project in obj.projects" :key="project.id" :project="project"/>
		</section>
	</section>
</template>
<script setup>
import { defineProps,reactive } from 'vue';
import WorkCard from './WorkCard.vue';

const props = defineProps(
	{
		projects: Object,
		title: {
			type: String,
			default: "My Works"
		}
	}
);


const obj = reactive({
    projects: props.projects
});
</script>
