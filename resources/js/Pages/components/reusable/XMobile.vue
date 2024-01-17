<template>
    <button @click="toggleXButton" type="button" :tgt="tgtState" class="menu-target text-pires-color dark:text-white"></button>
    <nav id="menu-lhpires" class="space-y-9 text-pires-color dark:text-white bg-white dark:bg-primary-dark" :tgt="tgtState">
        <ul class="links-site">
            <li v-for="LinkObject in appLinks" :key="LinkObject.id">
                <LinkComponent class="font-medium" :LinkObject="LinkObject"/>
            </li>
        </ul>
        <div class="contato-email">
            <span>Diga olá</span>
            <ul>
                <li><a href="mailto:lucas@pires.dev.br">lucas@pires.dev.br</a></li>
            </ul>
        </div>
        <div class="mt-5">
            <span>Alterar Tema</span>
            <ThemeComponent :theme="props.theme" @theme-changed="toggleTheme" class="bg-primary-light dark:bg-ternary-dark block w-fit px-3 py-2 w-auto shadow-sm rounded-xl cursor-pointer" />
        </div>
    </nav>
</template>

<script setup>
import { ref,defineProps,defineEmits,onMounted } from 'vue';
import LinkComponent from '../structure/LinkComponent.vue';
import ThemeComponent from "../Theme.vue";
import { appLinks } from '../../data/appLinks';


const props = defineProps({
    theme: {
        type: String,
        required: true
    }
})

const tgtState = ref(false);


const toggleXButton = () => {
    tgtState.value = !tgtState.value;
};

const emit = defineEmits(["themeChanged"]);

const toggleTheme = ( () => {    
    emit('themeChanged', localStorage.getItem('theme'));
});


</script>

<style scoped>
.menu-target {
    z-index: 11;
    width: 2.78em;
    height: 2.09em;
    background: none;
    position: relative;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-flexbox;
    display: inline-flex;
    border: none;
    -webkit-transform: scale(.9);
    -ms-transform: scale(.9);
    transform: scale(.9);
    top: 10%
}


.menu-target:after {
    content: "";
    height: 2px;
    position: absolute;
    -webkit-transition: .2s ease;
    transition: .2s ease;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0);
    background-color: currentColor;
    right: 0;
    width: 72%;
    top: 1.13em
}


.menu-target:before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    -webkit-transition: .2s ease;
    transition: .2s ease;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0);
    top: 0;
    right: 0;
    background-color: currentColor
}

.menu-target[tgt="true"]::before {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg)
}

.menu-target[tgt="true"]::after {
    top: 0;
    width: 100%;
    right: 0;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

nav#menu-lhpires {
    opacity: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-shadow: none;
    padding: 3.473rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    top: 1.39em;
    right: 3.41em;
    width: 22.223em;
    font-size: 1.1em;
    position: absolute;
    -webkit-transition: opacity .4s,box-shadow .4s;
    transition: opacity .4s,box-shadow .4s;
    display: none;
}

nav#menu-lhpires[tgt=true] {
    display: block;
    z-index: 10;
    opacity: 1;
    box-shadow: 0 10px 53px #a3ccaa4d
}

nav#menu-lhpires ul {
    list-style: none;
    padding: 0
}

nav#menu-lhpires ul li {
    padding: 4px 0
}

nav#menu-lhpires ul li a {
    text-decoration: none;
    font-size: 1.17rem
}

@media (max-width: 768px) {
    nav#menu-lhpires {
        top: 0;
        right: 0;
        height: 0;
        width: 100vw;
        height: 100vh;
        transition: all .4s
    }
}
</style>