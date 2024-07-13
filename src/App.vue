<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Header from '@/components/Header.vue'
  import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <div class="container">
    <Header/>
    <main>
      <Navbar/>
      <RouterView />
    </main>
  </div>
</template>

<style>
  .container{
    margin: 0 auto;
  } 

  /* Устройства Medium (планшеты, 768 пикселей и выше) */
  @media (min-width: 768px) { 
    .container{
      max-width: 768px;
    }
  } 

  /* Устройства Large (настольные компьютеры, 992 пикселей и выше) */
  @media (min-width: 992px) { 
     .container{
      max-width: 992px;
    }
  }

  /* Устройства X-Large (большие настольные компьютеры, 1200 пикселей и выше) */
  @media (min-width: 1200px) {
    .container{
      max-width: 1200px;
    }
  }

  /* Устройства XX-Large (большие настольные компьютеры, 1400 пикселей и выше) */
  @media (min-width: 1400px) { 
       .container{
         max-width: 1500px;
      }
  }

  main{
    padding-top: 120px;
    display: flex;
  }
</style>
