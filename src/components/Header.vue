<script lang="ts" setup>
    import Logo from './Logo.vue'
    import Typography from './Typography.vue'

</script>

<template>
    <div class="header">
        <Logo />
        <Typography class="ml-1" tagName="h4">  Документация </Typography>  
    </div>
</template>

<style>
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        z-index: 1000;
        background-color: var(--main-background);
    }
</style>