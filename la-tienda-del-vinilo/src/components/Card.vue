
<template>
  <v-row no-gutters class="items">


    <v-card :loading="loading" max-width="500" style="height: fit-content;" variant="tonal">

      <v-img height="250" cover src="../assets/logo.png" />

      <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="red" height="4" indeterminate></v-progress-linear>
      </template>

      <v-card-item>
        <v-card-title>
          {{ props.name }}
        </v-card-title>
        <v-card-subtitle>
          <span class="me-1">Nombre Artista</span>
          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <!-- rating discos -->
          <v-rating :model-value="props.rating" color="amber" density="compact" half-increments readonly
            size="small"></v-rating>
          <div class="text-grey ms-4">
            {{ props.rating }} (+50)
          </div>
        </v-row>
        <!-- precio -->
        <div class="my-4 text-subtitle-1">
          $ • {{ props.price }}
        </div>
        <div> {{ props.description }} </div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>


      <div class="px-4">
        <v-card-actions>
          <v-btn color="lighten-2" variant="text" :icon="is_selected ? 'mdi-heart' : 'mdi-heart-outline'"
            @click="selected()">
          </v-btn>

          <v-btn color="lighten-2" variant="text" @click="cartStore.add(props.id)">

            <span class="material-symbols-outlined">shopping_cart</span>
            <p>Añadir al Carro</p>
          </v-btn>




        </v-card-actions>

      </div>
      <v-card-actions>

        <v-dialog width="700">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="#520100" variant="tonal">Ver Detalles</v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-row>
              <v-col cols="6">
                <v-img src="../assets/logo.png"></v-img>

              </v-col>
              <v-col cols="6">
                <v-card :title="props.name">

                  <v-card-text>

                    {{ props.description }}

                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Cerrar" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

          </template>


        </v-dialog>


      </v-card-actions>



    </v-card>



  </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/CartStore'

const loading = ref(false);
const is_selected = ref(false);

const props = defineProps({
  id: Number,
  name: String,
  description: String,
  rating: Number,
  price: Number,
});

function iterImg(productId){

}
console.log(props.name);

const cartStore = useCartStore();


function selected() {
  is_selected.value = !is_selected.value
  loading.value = !loading.value;
  setTimeout(() => (loading.value = false), 2000)

}





</script>
<style>
.items {
  padding: 2rem;
  width: fit-content;
}

.asdf {

  position: absolute;

}
</style>