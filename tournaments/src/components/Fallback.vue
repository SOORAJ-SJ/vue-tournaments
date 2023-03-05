<script setup>
</script>
<template>
    <div id="fallback-wrapper">
        <div class="container p-4 text-center">
            <img src="../assets/images/9233841_4120164.jpg" alt="this page is under development">
            <div>
                <router-link to="/">&lt;&lt;Go Back</router-link>
            </div>
        </div>
    </div>
</template>
<style>
    #fallback-wrapper {
        width: 100vw;
        height: 100dvh;
        height: 100vh;
        background-color: white;
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
        z-index: 1;
    }
    #fallback-wrapper img {
        width: 100%;
        max-width: 500px;
    }
</style>