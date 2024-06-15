<template>
    <Link :href="$page.props.appUrl + '/works/' + project.slug" class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
        <picture class="block p-14 dark:bg-white">
            <img :src="$page.props.appUrl + '/images/' + project.logo" :alt="project.title" class="border-none"/>
        </picture>
        <div class="text-center px-4 py-6">
            <div class="font-bold text-xl text-pires-color dark:text-ternary-light mb-2">
                <h4>{{ project.title }}</h4>
                <span v-if="project.link" class="font-medium text-sm">{{ project.link.replace(/^https?:\/\/([^/]+).*$/, '$1') }}</span>
            </div>
        </div>
    </Link>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    project: {
        type: Object
    }
});
</script>