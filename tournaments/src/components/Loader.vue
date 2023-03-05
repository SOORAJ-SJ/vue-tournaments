<script>
    export default {
        mounted() {
            document.body.classList.add('overflow-hidden')
        },
        beforeUnmount() {
            console.log('unmounted')
            document.body.classList.remove('overflow-hidden')
        }
    }
</script>
<template>
    <div id="loader-wrapper">
        <div class="loader">
            <img src="../assets/images/animation_200_lesidodc.gif" alt="page loading animation"/>
        </div>
    </div>
</template>

<style scoped>
    .loader {
        width: 100vw;
        height: 100dvh;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        z-index: 1;
        display: grid;
        place-content: center;
        overflow: hidden;
    }
</style>