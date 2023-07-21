<template>

        <nav class = "navbar navbar-expand sm bg-dark navbar-dark">
            <router-link class="navbar-brand" :to="{name:'home'}">home</router-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="text-white " :to="{name:'login'}">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white ml-2" :to="{name:'register'}">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white ml-2" :to="{name:'dashboard'}">Dashboard</router-link>
                </li>
            </ul>


        </nav>

    <router-view></router-view>
</template>
<script setup>
import Dashboard from "@/pages/dashboard.vue";
</script>
