<template>
    <main class="home-page">
        <Searchbar />
        <div class="item">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
            <ProfileButton/>

        </div>
        <v-sheet class="d-flex flex-wrap ">
            <Card v-for="datas in data" :name="datas.name" :description="datas.description" :rating="datas.rating"
                :price="datas.price"></Card>
        </v-sheet>


    </main>
</template>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import Card from '../components/Card.vue';
import data from '../data/data.js';
import CategoryButton from '../components/CategoryButton.vue'

import { useProductStore } from "@/stores/ProductStore.js"


const productStore = useProductStore();


</script>

<style lang="scss">
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.CButton {
    display: flex;

    align-self: center;
    
}
</style>