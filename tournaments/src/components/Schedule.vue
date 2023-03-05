<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['schedule'])
</script>
<template>
    <div class="d-flex justify-content-between align-items-center">
        <div class="text-bg-secondary text-center w-100 rounded-2 p-2">
            <slot name="player1">Player 1</slot>
        </div>
        <div class="flex-shrink-1 mx-2">vs</div>
        <div class="text-bg-secondary text-center rounded-2 w-100 p-2">
            <slot name="player2">Player 1</slot>
        </div>
    </div>
    <div class="schedule text-center">{{ schedule }}</div>
</template>