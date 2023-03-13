import { defineStore } from "pinia";
import { STATUSES } from "../globals";
import { getRange } from '../api/sheet.api'

export const schedules = defineStore('schedules', {
    state: () => {
        return {
            error: null,
            schedules: null,
            status: STATUSES.PENDING
        }
    },
    getters: {
        getSchedules: (state) => state.schedules.values,
        getSheduleStatus: (state) => state.status
    },
    actions: {
        async fetchSchedules() {
            try {
                this.status = STATUSES.LOADING
                const schedules = await getRange('schedules!A:F')
                this.status = STATUSES.SUCCESS
                this.schedules = schedules.data
            } catch (err) {
                this.status = STATUSES.ERROR
                this.error = err.response.data.error
            }
        }
    }
})