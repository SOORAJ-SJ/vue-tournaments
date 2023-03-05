<script setup>
    import { defineProps } from 'vue'

    const props = defineProps(['theme', 'headers', 'data', 'caption'])
</script>
<template>
    <div class="card shadow-sm px-1 pt-2 my-3 table-responsive">
        <table class="table table-bordered table-striped">
            <caption class="caption-top">{{ caption }}</caption>
            <thead :class="`table-${theme}`">
                <tr>
                    <th>Player</th>
                    <th>Wins</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>2</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>