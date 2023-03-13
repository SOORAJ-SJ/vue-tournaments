<script setup>
    import Schedule from './Schedule.vue';
    import { defineProps, computed } from 'vue'
    import { formatToRelativeDate, getDateDifference } from '../helpers/functions/helper.functions'

    const props = defineProps(['date', 'matches'])
    const matchDate = computed(() => {
        let dateDifference = getDateDifference(props.date)
        return dateDifference == 0 || dateDifference == 1
            ? formatToRelativeDate(dateDifference)
            : props.date
    })
</script>
<template>
    <div class="card mt-2 shadow-sm p-2">
        <div class="card-body">
            <h5 class="card-title schedule-date">
                {{ matchDate }}
            </h5>
            <Schedule v-for="(match, index) in matches" :key="index">
                <template v-slot:player1>{{ match[0] }}</template>
                <template v-slot:playerOneScore>{{ match[3] }}</template>
                <template v-slot:time>{{ match[2] }}</template>
                <template v-slot:player2>{{ match[1] }}</template>
                <template v-slot:playerTwoScore>{{ match[4] }}</template>
            </Schedule>
        </div>
    </div>
</template>

<style scoped>
    .schedule-date {
        text-transform: capitalize;
    }
</style>