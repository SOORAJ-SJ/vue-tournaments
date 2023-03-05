<script setup>
    import lottieWeb from 'lottie-web'
    import { onMounted, ref } from 'vue'

    const player = ref(null)

    // lottieWeb.loadAnimation({
        // container: this.$refs.player,
        // path: '../assets/images/pint-pong.json',
        // loop: true,
        // renderer: 'svg',
        // autoplay: true
    // })

    onMounted(() => {
        lottieWeb.loadAnimation({
            container: player.value,
            path: '../assets/images/ping-pong.json',
            loop: true,
            renderer: 'svg',
            autoplay: true
        })
    })
</script>
<template>
    <div ref="player"></div>
</template>