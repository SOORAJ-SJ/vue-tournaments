<script setup>
    import { storeToRefs } from 'pinia';
    import { STATUSES } from './globals';
    import { scores } from './stores/scores.store';

    const scoresStore = scores()
    const { getStatus } = storeToRefs(scoresStore)
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark" v-if="getStatus !== STATUSES.PENDING">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Scoreboard</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Upcoming</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped>
</style>
