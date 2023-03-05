<script setup>
import Loader from '../components/Loader.vue';
import Table from '../components/Table.vue';

</script>

<template>
    <main>
        <div class="alert alert-secondary h2 mt-4 mb-2" role="alert">
            Group Standings
        </div>
        <Table theme="primary" caption="Pool A" />
        <Table theme="success" caption="Pool B" />
        <Table theme="danger" caption="Pool C" />
        <Table theme="warning"  caption="Pool D" />
    </main>
</template>
