<template>
    <main class="purchasestatus-page">
        <Searchbar></Searchbar>
        <h1>Estado de compra</h1>
    </main>
</template>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");
</script>

<style></style>