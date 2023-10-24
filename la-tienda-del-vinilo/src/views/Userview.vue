<template>
    <main class="wishlist-page">
        <div class="item">
            <h1>Usuario</h1>
            <ProfileButton />
        </div>
        <div>
            <v-container class="navbar">
                <v-card class="navbar">
                    <v-tabs v-model="tab" color=var(--grey) align-tabs="center">
                        <v-tab :value="1" width="333px" color="#520100">Lista de deseos</v-tab>
                        <v-tab :value="2" width="333px" color="#520100">Estado de compra</v-tab>
                        <v-tab :value="3" width="333px" color="#520100">Compras anteriores</v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item v-for="n in 3" :key="n" :value="1">
                            <v-container fluid>
                                <v-container>
                                    <v-card color="#F8E3E3">
                                        <v-row style="justify-content: space-evenly;">
                                            <v-col cols="2" style="align-self: center;">
                                                <v-img class="ma-4" height="60" src="../assets/logo.png"></v-img>
                                            </v-col>
                                            <v-col cols="auto" style="align-self: center;">
                                                <v-card-item>
                                                    <v-card-title>This is a wished product</v-card-title>
                                                    <v-card-subtitle>This is the artist of the product</v-card-subtitle>
                                                </v-card-item>
                                            </v-col>
                                            <v-col cols="1" style="align-self: center;">
                                                <h4>$</h4>
                                            </v-col>
                                            <v-col cols="4" style="align-self: center;">
                                                <v-card-actions>
                                                    <v-btn color="lighten-2" variant="tonal"
                                                        @click="cartStore.add(props.id)">

                                                        <span class="material-symbols-outlined">shopping_cart</span>
                                                        <p>Añadir al Carro</p>
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-col>
                                        </v-row>

                                    </v-card>
                                </v-container>

                                <!-- <div v-if="!wishlistStore.formattedCart.length">0</div>
          <div v-else>2</div> -->
                            </v-container>
                        </v-window-item>
                        <v-window-item v-for="n in 3" :key="n" :value="2">
                            <v-container fluid>
                                b
                            </v-container>
                        </v-window-item>
                        <v-window-item v-for="n in 3" :key="n" :value="3">
                            <v-container fluid>
                                <v-card color="#F8E3E3">
                                    <v-row style="justify-content: space-evenly;">
                                        <v-col cols="2" style="align-self: center;">
                                            <v-img class="ma-4" height="60" src="../assets/logo.png"></v-img>
                                        </v-col>
                                        <v-col cols="auto" style="align-self: center;">
                                            <v-card-item>
                                                <v-card-title>This is a bought product</v-card-title>
                                                <v-card-subtitle>This is the artist of the product</v-card-subtitle>
                                            </v-card-item>
                                        </v-col>
                                        <v-col cols="1" style="align-self: center;">
                                            <h4>$</h4>
                                        </v-col>
                                        <v-col cols="2" style="align-self: center;">
                                            dd/mm/aa
                                        </v-col>



                                    </v-row>

                                </v-card>
                                <!-- <div v-if="!wishlistStore.formattedCart.length">1</div>
          <div v-else></div> -->
                            </v-container>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-container>

        </div>
    </main>
</template>

<script setup>
import ProfileButton from '@/components/ProfileButton.vue';
import { ref } from 'vue';

const tab = ref(null);
</script>

<style lang="scss">
.navbar {
    height: 500px;
    width: 999px;
    margin-left: 20px;
    align-content: center;
}

.cardItems {
    justify-content: space-between;
}
</style>