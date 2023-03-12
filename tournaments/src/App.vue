<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />
    <div class="container app-container">
        <RouterView />
    </div>
    <Footer />
</template>

<style scoped>
    .app-container {
        min-height: calc(100vh - 11rem);
    }
</style>
