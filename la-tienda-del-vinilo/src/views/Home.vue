<template>
    <main class="home-page">
        <div style="height: 55px;">
            <Searchbar />
        </div>
        
        <div class="item my-4">
            <h1>Vinilos</h1>
            <CategoryButton class="CButton" />
            <ProfileButton />
        </div>
        <v-divider class="mb-4"></v-divider>
        <v-carousel cycle hide-delimiters show-arrows="hover" height="440px">
            <v-carousel-item v-for="datas in data">
                <v-sheet class="card-content " border rounded elevation="4">
                    <v-row class="car">
                        <v-col cols="4" style="height: 20rem;">
                            <v-img :src="datas.imgUrl"></v-img>

                        </v-col>
                        <v-col cols="7" style="height: fit-content;">
                            <h1>{{ datas.name }}</h1>
                            <v-rating :model-value="datas.rating" color="amber" density="compact" half-increments readonly
                                size="small"></v-rating>
                            <p class="py-2"> {{ datas.description }} </p>
                            <h4> $ {{ datas.price }} </h4>
                        </v-col>
                        <v-sheet class="d-flex" style="width: 974px;">
                            <v-sheet class="ma-2 pa-2 me-auto">
                                <v-btn text="Añadir al Carro" color="#520100" variant="tonal"
                                    @click="cartStore.add(datas.id)"></v-btn>
                            </v-sheet>
                            <v-sheet class="ma-2 pa-2">
                                <v-btn color="#520100" variant="tonal" @click="wishlistStore.add(datas.id)">
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                            </v-sheet>
                            <v-sheet class="ma-2 pa-2">
                                <v-btn text="Comprar"></v-btn>
                            </v-sheet>
                        </v-sheet>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <v-divider style="margin-bottom: 1rem;"></v-divider>
        <v-sheet class="d-flex flex-wrap" color="#f1f5f9">
            <Card v-for="datas in data" :id="datas.id" :name="datas.name" :description="datas.description"
                :rating="datas.rating" :price="datas.price" :imgUrl="datas.imgUrl"></Card>
        </v-sheet>

    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import Searchbar from '../components/Searchbar.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import Card from '../components/Card.vue';
import CategoryButton from '../components/CategoryButton.vue'
import { useCartStore } from '../stores/CartStore'
import { useProductStore } from '@/stores/ProductStore';
import { useWishlistStore } from '@/stores/WishlistStore';
import { ref } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
let data = ref([]);


onMounted(async () => {
    await productStore.fetchProducts();
    data.value = productStore.data;
});
</script>

<style lang="scss">
.buttons {
    margin-right: 4rem;
    padding-bottom: 1rem;
    justify-content: space-between;
}

.car {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 2rem;

}

.card-content {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;

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