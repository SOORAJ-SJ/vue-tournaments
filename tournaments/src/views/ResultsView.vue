<script setup>
    import { storeToRefs } from 'pinia';
    import { onMounted, computed } from 'vue';
    import Loader from '../components/Loader.vue';
    import { STATUSES } from '../globals';
    import { schedules } from '../stores/schedules.store'
    import Schedules from '../components/Schedules.vue'
    import Fallback from '../components/Fallback.vue';

    const schedulesStore = schedules()
    const { getSheduleStatus, getSchedules } = storeToRefs(schedulesStore)
    //format schedules to make it easier to understand
    const schedulesList = computed(() => {
        let schedulesListTemp = []
        if (getSheduleStatus.value === STATUSES.SUCCESS) {
            //group schedules by date as objects
            for (let getSchedule of getSchedules.value.slice(1)) {
                const existingScheduleIndex = schedulesListTemp.findIndex(schedule => schedule.date == getSchedule[0])
                if (existingScheduleIndex >= 0)
                    schedulesListTemp[existingScheduleIndex].matches.push(getSchedule.slice(1))
                else
                    schedulesListTemp.push({
                        date: getSchedule[0],
                        matches: [getSchedule.slice(1)]
                    })
            }
        }
        return schedulesListTemp;
    })
    onMounted(async () => {
        if (getSheduleStatus.value == STATUSES.PENDING)
            await schedulesStore.fetchSchedules()
    })
</script>
<template>
    <main>
        <Loader v-if="getSheduleStatus === STATUSES.LOADING || getSheduleStatus === STATUSES.PENDING" />
        <div 
        v-else-if="getSheduleStatus === STATUSES.ERROR"
        @click="schedulesStore.fetchSchedules()"
        class="alert alert-danger d-flex align-items-center h5 mt-4 mb-2" 
        role="alert">
            <div>
                Oops!!! Something went wrong while getting the schedules
                <p class="lead mb-0">
                    Tap to retry
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                    </svg>
                </p>
            </div>
        </div>
        <div>
            <div>
                <div 
                class="alert alert-secondary h2 mt-4 mb-2 d-flex align-items-center justify-content-between" 
                role="alert"
                @click="schedulesStore.fetchSchedules()">
                    Results
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                </div>
                <div class="row" v-if="schedulesList.length">
                    <div class="col col-md-6 col-lg-4" v-for="(schedule, index) in schedulesList.slice(0, 12)">
                        <Schedules :date="schedule.date" :matches="schedule.matches" :key="index" />
                    </div>
                </div>
                <div v-else>
                    <div 
                    class="alert alert-warning h4 mt-4 mb-2" 
                    role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                        Looks like there are no matches scheduled for now!
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>