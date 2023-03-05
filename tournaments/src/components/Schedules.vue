<script setup>
import Schedule from './Schedule.vue';

</script>
<template>
    <div class="card mt-2 shadow-sm px-1 pt-2">
        <div class="alert alert-success">
            Today's Matches
        </div>
        <Schedule schedule="2022-03-03">
            <template v-slot:player1>Suresh</template>
            <template v-slot:player2>Naseem</template>
        </Schedule>
    </div>
</template>