<template>
    <main class="home-page">
        <Searchbar />
        <div class="item">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
            <ProfileButton />

        </div>
        <v-divider class="mb-4"></v-divider>

        <v-carousel hide-delimiters>
            <v-carousel-item v-for="datas in data">
                <v-sheet class="card-content" border rounded elevation="10">

                    <v-row>

                        <v-col cols="5" style="height: 20rem;">
                            <v-img src="../assets/logo.png" ></v-img>

                        </v-col>
                        <v-col cols="7" style="height: 20rem;">
                            <p>
                                {{ datas.id }}
                            </p>
                            <p>
                                {{ datas.name }}
                            </p>
                            <p>
                                {{ datas.description }}
                            </p>
                        </v-col>

                    </v-row>

                </v-sheet>
            </v-carousel-item>

        </v-carousel>
        <v-divider class="mb-4"></v-divider>

        <v-sheet class="d-flex flex-wrap ">
            <Card v-for="datas in data" :id="datas.id" :name="datas.name" :description="datas.description"
                :rating="datas.rating" :price="datas.price"></Card>

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
import { useWishlistStore } from '@/stores/WishlistStore.js';


const productStore = useProductStore();
const wishlistStore = useWishlistStore();

</script>

<style lang="scss">
.card-content {
    border: 1px solid red;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}

.center-card {
    padding-top: 100px;
    padding-right: 50px;
    padding-bottom: 100px;
    padding-left: 50px;
}

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