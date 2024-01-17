<template>
	<a class="block" href="#" @click.prevent="toggleTheme" aria-label="Alterar Tema">
        <i v-if='theme === "light"'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>
        </i>
        <i v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-dim"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.657 6.343h.01"/><path d="M17.657 17.657h.01"/><path d="M6.343 17.657h.01"/><path d="M6.343 6.343h.01"/></svg>
        </i>        
	</a>
</template>
<script setup>
import { defineProps,defineEmits } from 'vue';

const props = defineProps({
    theme: {
        type: String,
        required: true
    }
})

const emit = defineEmits(["themeChanged"]);

const toggleTheme = () => {
    const newTheme = props.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    emit('themeChanged', newTheme);
}

</script>