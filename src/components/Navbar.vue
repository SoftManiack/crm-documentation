<script lang="ts" setup>
    interface Link {
        path: string,
        name: string
    }

    const list: Link[] = [
        {
            path: '/',
            name: 'Общая инструкция'
        },
        {
            path: '/uprav',
            name: 'Управление'
        },
        {
            path: '/master',
            name: 'Мастера'
        },
        {
            path: '/supply',
            name: 'Снабжение'
        }
    ]
    
</script>

<template>
    <div class="navbar">
        <ul>
            <li
                v-for="item in list"
                :key="item.name" 
                class="navbar__link"
            >
                <RouterLink
                    :to="item.path"
                >
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
    .navbar{
        
    }
    .navbar__link{
 
    }
</style>