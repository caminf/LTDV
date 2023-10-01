<template>
    <main class="home-page">
        <Searchbar />
        <div class="item">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
            <ProfileButton />

        </div>
        <v-sheet class="d-flex flex-wrap ">
            <Card v-for="product in productStore.data" :id="product.id" :name="product.name"
                :description="product.description" :rating="product.rating" :price="product.price"></Card>
        </v-sheet>

      
    </main>
</template>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import Card from '../components/Card.vue';
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