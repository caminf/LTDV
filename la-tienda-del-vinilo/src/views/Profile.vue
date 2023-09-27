<template>
    <main class="profile-page">
        <div class="d-flex align-center">
            <h1>Perfil</h1> <router-link class="button" to="/editprofile"> 
                <v-tooltip activator="parent" location="end">
                    Editar perfil
                </v-tooltip>
                <v-btn variant="text" icon="">
                    <span class="material-symbols-outlined" style="color: var(--grey);">
                        edit_square
                    </span>
                </v-btn> </router-link>
        </div>
        <br>
        <v-card color=var(--light-grey)>
            <div class="d-flex flex-no-wrap">
                <v-row no-gutters>
                    <v-col-0>
                        <v-avatar class="ma-8" size="230" rounded="0" color=var(--light)>
                            <span class="material-symbols-outlined">
                                person
                            </span>
                        </v-avatar>
                    </v-col-0>
                    <v-col>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Nombre:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>Hector</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Apellido:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>Salamanca</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Correo electrónico:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>hector32@gmail.com</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Usuario:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>hector32</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <br>
        <div>
            <v-btn color=var(--light-alt) icon="">
                    <span class="material-symbols-outlined">
                        shelves
                    </span>
                <v-menu activator="parent" location="end">
                <router-link class="button" to="/wishlist"><v-btn color="var(--light-alt)" style="width: 200px;"><h5>Lista de deseados</h5></v-btn></router-link>
                <router-link class="button" to="/purchasestatus"><v-btn color="var(--light-alt)" style="width: 200px;"><h5>Estado de compra</h5></v-btn></router-link>
                <router-link class="button" to="/previouspurchases"> <v-btn color="var(--light-alt)" style="width: 200px;"><h5>Compras anteriores</h5></v-btn></router-link>               
            </v-menu>
            </v-btn> 
        </div>     
    </main>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");
import Searchbar from '../components/Searchbar.vue';
</script>

<style lang="scss"></style>