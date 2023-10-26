<template>
  <div>
    <v-table fixed-header height="380px">
      <thead>
        <tr>
          <th class="text-center">Nombre del producto</th>
          <th class="text-center">Stock</th>
          <th class="text-center">Precio</th>
          <th class="text-center">Detalle</th>
          <th class="text-center">Id</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos" :key="item.name">
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.amount }}</td>
          <td class="text-center">{{ item.price }}</td>
          <td class="text-center">
            <v-avatar class="ma-1" size="40" rounded="0">
              <v-img :src="item.detail"/>
            </v-avatar>
          </td>
          <td class="text-center">{{ item.id }}</td>
          <td class="text-center" style="width: 250px;">
            <v-btn color="#F8E3E3" @click="editProduct(item)" density="compact">Editar</v-btn>
            <v-btn color="error" variant="text" @click="deleteProduct(item)" density="compact">Eliminar</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <td>
      <router-link class="button" to="/AddProduct"><v-btn color="#F8E3E3" class="ma-4">Agregar
          Productos</v-btn></router-link>
    </td>
  </div>
</template>

<script>
import { stockData } from '../data/dataStock.js';
export default {
  data() {
    return {
      datos: stockData,

    }
  },
  methods: {
    editProduct(producto) {

    },
    deleteProduct(producto) {

    },
  },
}
</script>

<style></style>