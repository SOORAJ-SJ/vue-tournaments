import { defineStore } from 'pinia'
import { batchGet } from '../api/sheet.api'
import { STATUSES } from '../globals'

export const scores = defineStore('scores', {
    state: () => {
        return {
            error: null,
            scores: null,
            status: STATUSES.PENDING
        }
    },
    getters: {
        getScores: (state) => state.scores.valueRanges,
        getStatus: (state) => state.status,
        getError: (state) => state.error
    },
    actions: {
        async fetchScores() {
            try {
                this.status = STATUSES.LOADING
                const rangesList = [
                    'Sorted Group Standings!D7:O11', 
                    'Sorted Group Standings!D13:O17'
                ]
                const scores = await batchGet(rangesList.join('&ranges='))
                this.scores = scores.data
                this.status = STATUSES.SUCCESS
            } catch (err) {
                this.status = STATUSES.ERROR
                this.error = err.response.data.error
            }
        }
    }
})