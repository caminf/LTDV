<template>
    <main class="home-page">
        <Searchbar />
        <div class="item">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
        </div>
        <v-sheet class="d-flex flex-wrap ">
            <Card v-for="datas in data" :name="datas.name" :description="datas.description" :rating="datas.rating"
                :price="datas.price"></Card>
        </v-sheet>

        
    </main>
</template>

<script setup>
import Searchbar from '../components/Searchbar.vue';
import Card from '../components/Card.vue';
import data from '../data/data.js';
import CategoryButton from '../components/CategoryButton.vue'



</script>

<style lang="scss">
.item {
    display: flex;

    justify-content: space-between;
}

.CButton {
    display: flex;

    align-self: center;
    
}
</style>