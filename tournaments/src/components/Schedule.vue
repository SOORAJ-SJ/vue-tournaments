<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['schedule'])
</script>
<template>
    <div class="d-flex justify-content-center align-items-center position-relative schedule-wrapper">
        <div class="p-2 w-50 text-end">
            <slot name="player1">Player 1</slot>
            <div class="score">
                <slot name="playerOneScore">TBA</slot>
            </div>
        </div>
        <div class="flex-shrink-1 mx-2 border p-2">
            <slot name="time"></slot>
        </div>
        <div class="p-2 w-50 text-start">
            <slot name="player2">Player 1</slot>
            <div class="score">
                <slot class="score" name="playerTwoScore">TBA</slot>

            </div>
        </div>
    </div>
    <div class="schedule text-center">{{ schedule }}</div>
</template>
<style scoped>
    .schedule-wrapper:not(:nth-last-child(2)) {
        margin-bottom: 30px;
    }
    .schedule-wrapper:not(:nth-last-child(2))::after {
        content: "";
        width: 1px;
        height: 20px;
        background-color: gray;
        position: absolute;
        bottom: -25px;
    }
</style>