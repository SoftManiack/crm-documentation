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
    max-width: 1500px;
    margin: 0 auto;
  } 

  @media screen and (max-width: 1207px){
    .container {
        max-width: 760px;
    }
  }

  main{
    padding-top: 120px;
    display: flex;
  }
</style>
