<script lang="ts" setup>
  import Typography from '@/components/Typography.vue'
  import Image from '@/components/Image.vue'
  import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
    <div class="page-container">
      <div class="page-container__content">
        <Typography :tagName="'h3'"> 
          Краткая инструкция для управления
        </Typography>
        <Typography :tagName="'h4'" :bold="true" class="mt-4" id="accounts"> 
          Создание аккаунта
        </Typography>
        <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
          Чтобы создать учетную запись в системе перейдите на старницу аккаунтов в справочниках и нажмите кнопку создать.
        </Typography>
        <Image 
          class="mt-2"
          :path="'./src/assets/images/uprav/upravAccount.png'"
        />
        <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
          Заполните поля в форме и нажмите сохранить.
        </Typography>
        <Image 
          class="mt-2"
          :path="'./src/assets/images/uprav/upravAccountModal.png'"
        />
        <Typography :tagName="'h4'" :bold="true" class="mt-4" id="objects"> 
          Объекты
        </Typography>
        <Image 
          class="mt-2"
          :path="'./src/assets/images/uprav/objects.png'"
        />
      </div>
      <div class="page-container__sidebar">
        <Sidebar 
          :role="'uprav'"
        />
      </div>
    </div>
</template>