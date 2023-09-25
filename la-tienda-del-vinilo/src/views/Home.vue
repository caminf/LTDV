<template>
    <main class="home-page">
        <Searchbar />
        <h1>Vinilos</h1>
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



</script>

<style lang="scss">
.item {
    display: flex;
    border: 1px solid blue;
    align-content: flex-start;
}
</style>