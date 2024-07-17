<script lang="ts" setup>
  import Typography from '@/components/Typography.vue'
  import Image from '@/components/Image.vue'
  import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
   <div class="page-container">
    <div class="page-container__content">
       <Typography :tagName="'h3'"> 
        Краткая инструкция для мастера
      </Typography>
      <Typography :tagName="'h4'" :bold="true" class="mt-4" id="requisitions"> 
        Создание заявки
      </Typography>
      <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
        Чтобы создать заявку войдите в систему под пользователем с ролью мастер, и перейдите на страницу заявок 
        и нажмите кнопку создать по спецификации. 
      </Typography>
      <Image 
        class="mt-2"
        :path="'./src/assets/images/masterReq.png'"
      />
      <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
        Выберите спецификацию, укажите к какой дате нужно доставить материал, есле необходимо добавьте коментарий.
        После выбора спецификации необходимо заоплинть таблицу указав количество материала из спецификации, после того как таблица заполнена, 
        можно отправить заявку или сохрнаить черновик.
      </Typography>
      <Image 
        class="mt-2"
        :path="'./src/assets/images/masterReqModalSpec.png'"
      />
      <Typography :tagName="'p'" :bold="true" class="mt-4" :color="'#515151'"> 
        После успешной отправки заявки, заявка отобразится в таблице заявок.
      </Typography>
      <Image 
        class="mt-2"
        :path="'./src/assets/images/masterReqModalSpec.png'"
      />
      
      <Typography :tagName="'h4'" :bold="true" class="mt-4" id="specifications"> 
        Спецификации
      </Typography>


      <Typography :tagName="'h4'" :bold="true" class="mt-4" id="brigades"> 
        Бригады
      </Typography>
    </div>
    <div class="page-container__sidebar">
      <Sidebar 
        :role="'master'"
      />
    </div>
  </div>
</template>