<script setup>
    import { onMounted } from 'vue'
    import Table from '../components/Table.vue';
    import { storeToRefs } from 'pinia'
    import { scores } from '../stores/scores.store'
    import Loader from '../components/Loader.vue';
    import { STATUSES } from '../globals';
import Legend from '../components/Legend.vue';

    const scoresStore = scores()
    const theme = ['primary', 'warning', 'dark', 'success']

    const { getScores, getStatus } = storeToRefs(scoresStore)
    
    onMounted(async () => {
        if (getStatus.value == STATUSES.PENDING)
            await scoresStore.fetchScores()
    })
</script>

<template>
    <main>
        <Loader v-if="getStatus === STATUSES.LOADING || getStatus === STATUSES.PENDING" />
        <div 
        v-else-if="getStatus === STATUSES.ERROR"
        @click="scoresStore.fetchScores()"
        class="alert alert-danger d-flex align-items-center h5 mt-4 mb-2" 
        role="alert">
            <div>
                Oops!!! Something went wrong while getting the results
                <p class="lead mb-0">
                    Tap to retry
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                </p>
            </div>
        </div>
        <div v-else>
            <div 
            class="alert alert-secondary h2 mt-4 mb-2 d-flex align-items-center justify-content-between" 
            role="alert"
            @click="scoresStore.fetchScores()">
                Group Standings
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                </svg>
            </div>
            <Legend class="mt-3" />
            <Table 
            v-for="(score, index) in getScores" 
            :key="index" 
            :theme="theme[index]"
            :headers="score.values[0]"
            :rows="score.values.slice(1, score.values.length) "/>
        </div>
    </main>
</template>
