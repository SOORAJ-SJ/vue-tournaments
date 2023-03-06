<script setup>
    import { schedules } from '../stores/schedules.store'
    import { scores } from '../stores/scores.store'
    import { storeToRefs } from 'pinia'
    import { STATUSES } from '../globals'

    const schedulesStore = schedules()
    const scoresStore = scores()
    const { getSheduleStatus } = storeToRefs(schedulesStore)
    const { getStatus } = storeToRefs(scoresStore)
</script>
<template>
    <footer 
    class="text-bg-dark mt-4"
    v-if="getStatus !== STATUSES.PENDING || getSheduleStatus !== STATUSES.PENDING">
        <div class="p-4">©Team Sattva</div>
    </footer>
</template>
<style>
</style>