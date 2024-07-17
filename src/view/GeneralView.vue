<script lang="ts" setup>
  import Typography from '@/components/Typography.vue'
  import Image from '@/components/Image.vue'
  import Sidebar from '@/components/Sidebar.vue'

</script>

<template>
  <div class="page-container">
    <div class="page-container__content">
       <Typography :tagName="'h3'"> 
        Краткая инструкция для пользователей
      </Typography>
      <Typography :tagName="'h4'" :bold="true" class="mt-4"> 
        Авторизация
      </Typography>
      <hr class="hr">
      <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
        Чтобы войти в систему
      </Typography>
      <ol class="list-ol mt-2">
        <li class="list-li">
          Получите логин и пароль у администратора
        </li>
        <li class="list-li">
          Введите логин и пароль.
        </li>
      </ol>
      <Image 
        class="mt-2"
        :path="'./src/assets/images/login.png'"
      />
    </div>
    <div class="page-container__sidebar">
      <Sidebar 
        :links="'general'"
      />
    </div>
  </div>
</template>
