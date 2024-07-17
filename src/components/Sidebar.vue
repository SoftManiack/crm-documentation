<script lang="ts" setup>
    import Typography from '@/components/Typography.vue'
    import { defineProps, ref } from 'vue'
    
    interface Link {
        tagName: string,
        id: string,
        active: boolean
    }
    
    interface Props {
        role?: string,
    }
    
    const props = defineProps<Props>();
  
    let list: Link[] = ref([])

    const linksMaster = [
      {
        tagName: 'Заявки',
        id: '#requisitions',
        active: true
      },
      {
        tagName:  'Спецификации',
        id: '#specifications',
        active: false
      },
      {
        tagName: 'Бригады',
        id: '#brigades',
        active: false
      },
    ]

    const linksUprav = [
      {
        tagName: 'Аккаунты',
        id: '#accounts',
        active: true
      },
      {
        tagName:  'Объекты',
        id: '#objects',
        active: false
      },
    ]

    console.log(props.role)

    if(props.role == 'master'){
        list = ref(linksMaster)
    } else if(props.role == 'uprav'){
        list = ref(linksUprav)
    }

    const toggle = (item: Link) => {

        for( let i = 0; i < list.value.length; i++ ) {
            list.value[i].active = false
            if( item.id == list.value[i].id ){
               list.value[i].active = true
            }
        }

    }
</script>

<template>
    <div v-if="list.length != 0" class="sidebar">
        <Typography :tagName="'h5'" :bold="true" class="mt-4 mb-2" id="specifications"> 
           Оглавление
        </Typography>
        <div v-for="(item, key) in list" :key="key"> 
            <a
                class="sidebar__link" 
                @click="toggle(item)"
                :href="item.id"
                :class="{ 'sidebar__link--active': item.active }" 
            > 
                {{ item.tagName }}
            </a>
        </div>
    </div>
</template>

<style>
    .sidebar{
        max-width: 100px;
        padding-left: 1.5rem;
        position: fixed;
        border-left: 1px solid var(--line);
        height: 70vh;
        margin-left: 20px;
    }
    h5{
        font-weight: 400;
        color: var(--navbar-text);
    }
    .sidebar__link{
        margin-left: 0.7rem;
        font-size: 0.9rem;
        cursor: pointer;
        color: var(--navbar-text);
    }
    .sidebar__link--active{
        color: var(--link-text);
    }
    .sidebar__link:hover{
        transition: 0.5s all;
        color: var(--link-text);
    }
</style>