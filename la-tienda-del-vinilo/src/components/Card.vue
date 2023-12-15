<template>
  <v-row no-gutters class="items">

    <v-card :loading="loading" width="300" style="height: fit-content;" variant="tonal">

      <v-img cover :src="props.imgUrl" />

      <template v-slot:loader="{ isActive }">
        <v-progress-linear :active="isActive" color="red" height="4" indeterminate></v-progress-linear>
      </template>
      <v-row style="justify-content: space-between;">
        <v-card-item>

          <v-card-title style="padding: 10px;">
            <h5 class="productName"
              style="overflow: hidden; text-overflow: ellipsis; margin-right: 5px; max-width: 200px;">{{ props.name }}
            </h5>
          </v-card-title>
        </v-card-item>
        <v-card-item style="margin-right: 4px; margin-top: 3px;">
          <v-btn color="lighten-2" variant="text" density="compact" icon="" @click="wishlistStore.add(props.id)">
            <div v-if="liked()">
              <span class="material-symbols-outlined">favorite</span>
            </div>
            <div v-else>
              <span class="material-symbols-outlined">heart_check</span>
            </div>
            <span class=""></span>
          </v-btn>
        </v-card-item>
      </v-row>
      <v-card-text>
        <v-row align="center" style="justify-content: space-between;">
          <!-- rating discos -->
          <div>
            <v-row align="center">
              <v-rating :model-value="props.rating" color="amber" density="compact" half-increments readonly size="small"
                style="margin-left: 20px;"></v-rating>
              <div class="text-grey mx-1">
                {{ props.rating }} (+50)
              </div>
            </v-row>

          </div>

          <div class=" text-subtitle-1" style="justify-self: end; margin-right: 8px;">
            $ • {{ props.price }}
          </div>

        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="lighten-2" variant="text" @click="cartStore.add(props.id)">
            <span class="material-symbols-outlined">shopping_cart</span>
            <h5>Añadir al Carro</h5>
          </v-btn>
        <v-dialog width="700">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="#520100" variant="tonal"> <h6>Ver Detalles</h6>  </v-btn>
          </template>
          <template v-slot:default="{ isActive }">

            <v-row>
              <v-col cols="6">
                <v-img :src="props.imgUrl"></v-img>
              </v-col>
              <v-col cols="6">
                <v-card :title="props.name">
                  <v-card-text>
                    <h4> {{ props.price }}</h4>
                  </v-card-text>
                  <v-card-text>
                    {{ props.description }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Cerrar" @click="isActive.value = false"></v-btn>

                    <v-btn text="Añadir al Carro" color="#520100" variant="tonal"
                      @click="cartStore.add(props.id)"></v-btn>
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
import { useWishlistStore } from '../stores/WishlistStore';

const loading = ref(false);
const is_selected = ref(false);

const props = defineProps({
  id: Number,
  name: String,
  description: String,
  rating: Number,
  price: Number,
  imgUrl: String,
});


const cartStore = useCartStore();

const rut = "203670605";
const wishlistStore = useWishlistStore();

import { onMounted } from 'vue';

let wishlist = ref({});
onMounted(async () => {
  await wishlistStore.fetchWishlist(rut).then((res) => { wishlist.value = res });
});

async function wished() {
  const found = await wishlistStore.findOne(props.id, rut);
  return found
}
wished();
const loved = ref(false);
function liked() {
  if (wishlistStore.formattedList.find(item => item.id === props.id)) {
    return false
  }
  return true
}

</script>
<style>
.items {
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: fit-content;
}

.productName {}
</style>