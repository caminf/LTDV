<template>
    <aside>
        <router-link class="button" to="/profile">
            <v-col cols="12" sm="8" md="8">
                <v-btn class="ma-2" block rounded="xl" size="x-large" color=var(--dark-alt)>
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </v-btn>
            </v-col>
        </router-link>


    </aside>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/data.js'
const keyword = ref("");


function goToProfile() {
    // if (hasProfile) {



    // }else{
    //     console.log("nada encontrado");
    // }
}

</script>

<style lang="scss">
.profile-button {
    align-self: end;

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>