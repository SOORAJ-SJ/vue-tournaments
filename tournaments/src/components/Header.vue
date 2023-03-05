<script setup>
    import { storeToRefs } from 'pinia';
    import { STATUSES } from '../globals';
    import { schedules } from '../stores/schedules.store';
    import { scores } from '../stores/scores.store';

    const scoresStore = scores()
    const schedulesStore = schedules()
    const { getStatus } = storeToRefs(scoresStore)
    const { getSheduleStatus } = storeToRefs(schedulesStore)
</script>
<template>
    <nav 
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark navbar-dark" 
    v-if="getStatus !== STATUSES.PENDING || getSheduleStatus !== STATUSES.PENDING">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">
                <img src="/trophy.png" width="20"> TT
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" exactActiveClass="active" to="/">Scoreboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" exactActiveClass="active" to="/schedules">Schedules</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>