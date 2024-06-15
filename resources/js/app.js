import {createApp, h } from 'vue';
import { createInertiaApp,Link } from '@inertiajs/vue3';
import NProgress from 'nprogress';
import { router } from '@inertiajs/vue3';
import route from 'ziggy-js';
import '../css/app.css';

import.meta.glob([
    '../docs/**'
]);

router.on('start', () => NProgress.start());
router.on('finish', () => NProgress.done());

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {

        const VueApp = createApp({ render: () => h(App, props) });
        VueApp.config.globalProperties.$route = route;
        VueApp.component('Link',Link)
            .use(plugin)
            .mount(el);
    },
});

const appTheme = localStorage.getItem('theme');

if (appTheme === 'dark'){
    document.querySelector('html').classList.add('dark');
}else{
    document.querySelector('body').classList.remove('dark');
}


console.log(`⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬛⬛🟥⬛⬛🟥🟥🟥🟥⬛⬛⬜⬜⬜⬜
⬜⬜⬜⬛🟥🟥⬛⬛🟥🟥🟥🟥🟥🟥🟥⬛⬜⬜⬜
⬜⬜⬛🟥🟥⬛⬛⬛🟥🟥🟥🟥🟥🟥🟥🟥⬛⬜⬜
⬜⬛🟥🟥⬛⬛⬛⬛🟥🟥🟥🟥🟥🟥🟥🟥🟥⬛⬜
⬜⬛🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥🟥⬛⬜
⬛🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥🟥⬛
⬛🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥⬛
⬛🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥⬛
⬛🟥🟥🟥⬛⬛⬛⬛⬛🟥🟥⬛⬛⬛⬛⬛⬛🟥⬛
⬛🟥🟥🟥⬛⬛⬛⬛⬛🟥🟥⬛⬛⬛⬛⬛⬛🟥⬛
⬛🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥⬛
⬛🟥🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥⬛🟥⬛
⬜⬛⬛🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥⬛⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥🟥⬛⬜
⬜⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥🟥🟥⬛⬜⬜
⬜⬜⬜⬛🟥🟥⬛⬛⬛🟥🟥🟥🟥🟥🟥⬛⬜⬜⬜
⬜⬜⬜⬜⬛⬛🟥🟥🟥🟥🟥🟥🟥⬛⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜`);

console.log('Linkedin: %o', 'https://www.linkedin.com/in/lhpires/');
console.log('Portifólio V1: %o', 'https://www.pt.pires.dev.br');
