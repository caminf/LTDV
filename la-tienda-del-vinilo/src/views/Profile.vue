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
                                <p class="UserInfoLabel">Nombre:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>Hector</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p class="UserInfoLabel">Apellido:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>Salamanca</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p class="UserInfoLabel">Correo electrónico:</p>
                            </v-col-6>
                            <v-col align-self="center">
                                <p>hector32@gmail.com</p>
                            </v-col>
                        </v-row>
                        <br>
                        <v-row no-gutters>
                            <v-col-6>
                                <p class="UserInfoLabel">Usuario:</p>
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
                <router-link class="button" to="/userview"><v-btn class="MenuButton"><h5>Lista de deseados</h5></v-btn></router-link>
                <router-link class="button" to="/userview"><v-btn class="MenuButton"><h5>Estado de compra</h5></v-btn></router-link>
                <router-link class="button" to="/userview"> <v-btn class="MenuButton"><h5>Compras anteriores</h5></v-btn></router-link>               
            </v-menu>
            </v-btn> 
        </div>
        <!-- <div>
            <v-btn color=var(--light-alt) icon="">
                    <span class="material-symbols-outlined">
                        shelves
                    </span>
                <v-menu activator="parent" location="end">
                <router-link class="button" to="/registeredusers"><v-btn class="MenuButton"><h5>Usuarios registrados</h5></v-btn></router-link>
                <router-link class="button" to="/orders"><v-btn class="MenuButton"><h5>Pedidos</h5></v-btn></router-link>
                <router-link class="button" to="/deliverystatus"> <v-btn class="MenuButton"><h5>Estado Envíos</h5></v-btn></router-link>               
                <router-link class="button" to="/stock"> <v-btn class="MenuButton"><h5>Stock</h5></v-btn></router-link>               
            </v-menu>
            </v-btn> 
        </div> -->
    </main>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");
</script>

<style lang="scss">
.MenuButton {
    background-color: var(--light-alt);
    width: 200px;
    color: var(--grey);
}
.UserInfoLabel{
    margin:10px;
}
</style>