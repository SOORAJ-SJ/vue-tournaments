<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['theme', 'headers', 'rows'])
</script>
<template>
    <div class="card shadow-sm px-1 pt-2 my-3 table-responsive">
        <table class="table table-bordered table-striped">
            <thead :class="`table-${theme}`">
                <tr>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows">
                    <td v-for="data in row">{{ data }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
    th {
        white-space: nowrap;
    }
</style>