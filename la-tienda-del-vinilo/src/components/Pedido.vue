<template>
    <div>
      <h2>Pedidos</h2>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">N° de orden</th>
        <th class="text-left">Usuario</th>
        <th class="text-left">Datos</th>
        <th class="text-left">Precio</th>
        <th class="text-left">Direccion</th>
        <th class="text-left">Fecha</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datosU" :key="item.name">
          <td>{{ item.numero }}</td>
          <td>{{ item.usuario }}</td>
          <td>{{ item.datos }}</td>
          <td>{{ item.precio }}</td>
          <td>{{ item.direccion }}</td>
          <td>{{ item.fecha }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </template>
  
  <script>
  import { pedidosData } from '../data/dataPedidos.js';
  export default {
    data () {
      return {
        datosU: pedidosData
      }
    },
}
  </script>