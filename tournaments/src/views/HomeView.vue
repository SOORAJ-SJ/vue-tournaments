<script setup>
    import { onMounted } from 'vue'
    import Table from '../components/Table.vue';
    import { storeToRefs } from 'pinia'
    import { scores } from '../stores/scores.store'
    import Loader from '../components/Loader.vue';
    import { STATUSES } from '../globals';

    const scoresStore = scores()
    const theme = ['primary', 'warning', 'dark', 'success']

    const { getScores, getStatus } = storeToRefs(scoresStore)
    
    onMounted(async () => {
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
            <div class="alert alert-secondary h2 mt-4 mb-2" role="alert">
                Group Standings
            </div>
            <Table 
            v-for="(score, index) in getScores" 
            :key="index" 
            :theme="theme[index]"
            :headers="score.values[0]"
            :rows="score.values.slice(1, score.values.length) "/>
        </div>
    </main>
</template>
