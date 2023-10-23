<template>
    <div>
      <h2>Usuarios registrados</h2>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Usuarios</th>
        <th class="text-left">Correo electronico</th>
        <th class="text-left">Estados de envio</th>
        <th class="text-left">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.name">
        <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.id }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </template>
  
  <script>
  import { usersData } from '../data/dataUsuarios.js';
  export default {
    data () {
      return {
        datos: usersData,
       
      }
    },
}
  </script>

