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
                    activeClass="navbar__link--active"
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
        margin-top: 14px;
    }
    .navbar__link{
        text-decoration: none;
    }
    .navbar__link a {
        color: #757575;
    }
    .navbar__link--active{
       color: #3391FF !important;
    }
</style>