<template>
    <main class="about-page">
        <Searchbar />

        <div class="text-center py-2 px-2">
            <h1>Contactanos</h1>
        </div>

        <v-layout class="rounded rounded-md">

            <v-main class="d-flex align-center" style="min-height: 500px;">
                <v-sheet elevation="12" max-width="600" rounded="lg" width="100%" class="pa-4 text-center mx-auto">
                    <v-icon class="mb-5" color="success" icon="mdi-account" size="112"></v-icon>

                    <h2 class="text-h5 mb-6">Acerca de nosotros</h2>

                    <div class="about-item align-center py-3">

                        <v-icon class="mb-3" icon="mdi-cellphone" size="35">
                        </v-icon>

                        <p>+569956956</p>

                    </div>
                    <div class="about-item inline align-center py-3">

                        <v-icon class="mb-3" icon="mdi-map-marker" size="35">
                        </v-icon>

                        <p>av.alemania</p>

                    </div>




                    <v-divider class="mb-4"></v-divider>

                    <div class="text-end">
                        <v-btn class="text-none" color="success" rounded variant="flat">
                            <p> Tu opnion nos importa
                            </p>
                        </v-btn>
                    </div>
                </v-sheet>
            </v-main>



        </v-layout>


    </main>
 
</template>
<script setup>
import Searchbar from '../components/Searchbar.vue';
</script>

<style lang="scss">
.footer-style {

    border: 1px solid red;
    height: 200px;
    width: 100rem;
}

.container {
    display: flex;
    border: 1px solid red;
    align-items: center;
    justify-content: center;
}


.about-item {
    display: flex;
    align-content: center;
}

</style>