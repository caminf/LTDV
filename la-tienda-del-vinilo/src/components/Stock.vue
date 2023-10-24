<template>
   <div>
      <h2>Stock de productos</h2>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Nombre del producto</th>
        <th class="text-left">Stock</th>
        <th class="text-left">Precio</th>
        <th class="text-left">Detalle</th>
        <th class="text-left">id</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in datos" :key="item.name">
        <td>{{ item.nombre }}</td>
          <td>{{ item.cantidad }}</td>
          <td>{{ item.precio }}</td>
          <td>
            <v-avatar  style="width: 64px; height: 64px;">
                 <img :src="item.imagen"/>
                </v-avatar>
          </td>
          <td>{{ item.id }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
</template>

<script>
import { stockData } from '../data/dataStock.js';
export default {
    data () {
      return {
        datos: stockData,
    
      }
    },

}
</script>

<style>

</style>