<script lang="ts" setup>
    import { defineProps } from 'vue'

    interface Props {
        path?: string,
    }
    
    const props = defineProps<Props>();
</script>

<template>
    <img
        class="img"
        :src="props.path"
    >
</template>

<style>
    .img{
        border: 1px solid #adadad;
        max-width: 900px;
        width: 100%;
    }
</style>