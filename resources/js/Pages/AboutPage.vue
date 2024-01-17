<template>
    <Head>
        <title>About Me</title>
    </Head>
    <App>
        <div class="container mx-auto">

            <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">            
                <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
                    <img :src="imgPires" class="rounded-xl w-96 mx-auto" alt="Imagem Dev Lucas Pires"/>
                </div>

                <div class="w-full sm:w-3/4 text-left text-black dark:text-white">
                    <header class="text-center sm:text-left text-pires-color dark:text-white">
                        <h4 class="font-bold text-2xl mb-2">Web Developer</h4>
                        <p class="font-medium">PHP | LARAVEL | VUE &lt;3</p>
                    </header>
                    <main class="mt-7 space-y-5">
                        <article>
                            <span class="flex items-center gap-1">Turning ideas into code <Code class="w-4" /></span>
                            <p>I enjoy creating solid and scalable Back-end/Front-end products.</p>
                        </article>

                        <article>
                            <p>
                                A special passion for PHP with a solid experience in this language, I am always seeking to learn and evolve. I am eager to take on new challenges and contribute to innovative projects.
                            </p>
                        </article>

                        <article>
                            <h2 class="font-bold text-pires-color dark:text-secondary-light">API Developer</h2>
                            <p>For a Back-end developer, is there anything more enjoyable than developing an API?</p>
                            <p>From creating RESTful APIs to SOAP services, my experience is centered on the agile development of programming interfaces that ensure optimized queries for enhanced usability. My focus is on providing efficient solutions, resulting in fast and effective APIs that meet users' needs effectively.</p>
                            <p>Security and data integrity come first.</p>
                        </article>

                        <article>
                            <h2 class="font-bold text-pires-color dark:text-secondary-light">Integrations</h2>
                            <p>I have extensive experience with various APIs in the E-commerce market, covering major national and international marketplaces to payment integrations with leading industry intermediaries. My expertise includes the efficient implementation of solutions that enhance connectivity and performance in online commercial environments.</p>
                        </article>
                    </main>             
                </div>
            </div>

        </div>
    </App>
</template>
<script setup>
import { Head } from '@inertiajs/vue3';
import App from './components/App.vue';
import { Code } from 'lucide-vue-next';
import imgPires from '../../docs/lhpires.png'

</script>

<style scoped>

</style>