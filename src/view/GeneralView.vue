<script lang="ts" setup>
    import Typography from '@/components/Typography.vue'
</script>

<template>
  <div class="page">
      <Typography :tagName="'h3'"> 
        Краткая инструкция для пользователей
      </Typography>
      <Typography :tagName="'h4'" :bold="true" class="mt-4"> 
        Краткая инструкция для пользователей
      </Typography>
      <hr class="hr">
  </div>
</template>
