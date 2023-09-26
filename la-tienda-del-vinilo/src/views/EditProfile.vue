<template>
    <main class="edit-profile-page">
        <Searchbar></Searchbar>
        <h1>Editar Perfil</h1>
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
                            <v-col>
                                <v-text-field placeholder="Jane" variant="outlined" density="compact" style="padding-right: 25px;"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Apellido:</p>
                            </v-col-6>
                            <v-col>
                                <v-text-field placeholder="Doe" variant="outlined" density="compact" style="padding-right: 25px;"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Correo electrónico:</p>
                            </v-col-6>
                            <v-col>
                                <v-text-field placeholder="janedoe83@correo.com" variant="outlined" density="compact" style="padding-right: 25px;"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row no-gutters>
                            <v-col-6>
                                <p style="margin:10px">Usuario:</p>
                            </v-col-6>
                            <v-col>
                                <v-text-field placeholder="jane1983" variant="outlined" density="compact" style="padding-right: 25px;"></v-text-field>  
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-card>
        <br>
        <div class="d-flex align-center">
            <router-link class="button" to="/profile">
                <v-btn color=var(--light-alt)>
                    <h5>Guardar cambios</h5>
                    <span class="material-symbols-outlined" style="margin: 5px">
                        save
                    </span>
                </v-btn>
             </router-link>
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