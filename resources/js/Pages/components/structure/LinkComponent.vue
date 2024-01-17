<template>
        <Link :href="$route(props.LinkObject.url)">{{props.LinkObject.name}}</Link>
</template>
<script setup>
import { defineProps  } from "vue";


const props = defineProps({
    LinkObject: {
        type: Object,
        required: true
    }
});

</script>