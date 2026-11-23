<template>
    <div class="pt-0.5">
        <canvas v-if="holidayThemeActive" ref="snowCanvas" class="snow-canvas" aria-hidden="true"></canvas>

        <!-- HEADER -->
        <HeaderPires />

        <!-- Conteúdo -->
        <slot></slot>

        <!-- Footer -->
        <FooterPires />
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import feather from 'feather-icons'
import HeaderPires from './structure/HeaderPires.vue'
import FooterPires from './structure/FooterPires.vue'
import { isHolidayThemeActive } from '../../config/holidayTheme.js'

const holidayThemeActive = isHolidayThemeActive()

const snowCanvas = ref(null)

let snowContext = null
let snowAnimationFrame = null
let snowWidth = 0
let snowHeight = 0
let snowflakes = []

const createSnowflakes = () => {
    const count = Math.min(180, Math.max(70, Math.round((snowWidth * snowHeight) / 12000)))

    snowflakes = Array.from({ length: count }, () => ({
        x: Math.random() * snowWidth,
        y: Math.random() * snowHeight,
        radius: Math.random() * 2.5 + 1,
        speed: Math.random() * 1.1 + 0.45,
        drift: Math.random() * 1.2 + 0.3
    }))
}

const resizeSnow = () => {
    if (!snowCanvas.value) return

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    snowWidth = window.innerWidth
    snowHeight = window.innerHeight

    snowCanvas.value.width = snowWidth * pixelRatio
    snowCanvas.value.height = snowHeight * pixelRatio
    snowCanvas.value.style.width = `${snowWidth}px`
    snowCanvas.value.style.height = `${snowHeight}px`

    snowContext = snowCanvas.value.getContext('2d')
    snowContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    createSnowflakes()
}

const drawSnow = () => {
    if (!snowContext) return

    snowContext.clearRect(0, 0, snowWidth, snowHeight)
    snowContext.fillStyle = 'rgba(255, 255, 255, 0.85)'
    snowContext.beginPath()

    for (const flake of snowflakes) {
        snowContext.moveTo(flake.x, flake.y)
        snowContext.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)

        flake.y += flake.speed
        flake.x += Math.sin(flake.y * 0.01) * flake.drift * 0.25

        if (flake.y > snowHeight + 5) {
            flake.y = -5
            flake.x = Math.random() * snowWidth
        }

        if (flake.x > snowWidth + 5) flake.x = -5
        if (flake.x < -5) flake.x = snowWidth + 5
    }

    snowContext.fill()
    snowAnimationFrame = requestAnimationFrame(drawSnow)
}

onMounted(() => {
    feather.replace()

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (holidayThemeActive && !prefersReducedMotion) {
        resizeSnow()
        drawSnow()
        window.addEventListener('resize', resizeSnow)
    }
})

onUpdated(() => {
    feather.replace()
})

onBeforeUnmount(() => {
    if (snowAnimationFrame) cancelAnimationFrame(snowAnimationFrame)

    window.removeEventListener('resize', resizeSnow)
})
</script>

<style scoped>
.snow-canvas {
    position: fixed;
    inset: 0;
    z-index: 5;
    pointer-events: none;
}
</style>