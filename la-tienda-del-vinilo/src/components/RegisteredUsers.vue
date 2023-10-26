<template>
  <div>
    <v-table fixed-header height="400">
      <thead>
        <tr>
          <th class="text-center">Usuarios</th>
          <th class="text-center">Correo electronico</th>
          <th class="text-center">Nombre</th>
          <th class="text-center">Apellido</th>
          <th class="text-center">id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos" :key="item.name">
          <td class="text-center">{{ item.username }}</td>
          <td class="text-center">{{ item.email }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td class="text-center">{{ item.lastname }}</td>
          <td class="text-center">{{ item.id }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
  
<script>
import { usersData } from '../data/dataUsers.js';
export default {
  data() {
    return {
      datos: usersData,

    }
  },
}
</script>

../data/dataUsers.js

