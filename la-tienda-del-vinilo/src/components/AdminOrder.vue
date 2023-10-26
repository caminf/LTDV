<template>
  <div>
    <v-table fixed-header height="380px">
      <thead>
        <tr>
          <th class="text-center">N° de orden</th>
          <th class="text-center">Usuario</th>
          <th class="text-center">Datos</th>
          <th class="text-center">Precio</th>
          <th class="text-center">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos" :key="item.name">
          <td class="text-center">{{ item.number }}</td>
          <td class="text-center">{{ item.user }}</td>
          <td class="text-center">{{ item.data }}</td>
          <td class="text-center">{{ item.price }}</td>
          <td class="text-center">{{ item.date }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
  
<script>

import { dataOrders } from '../data/dataAdminOrders.js';
export default {
  data() {
    return {
      datos: dataOrders
    }
  },
}
</script>../data/dataOrders.js../data/dataStatusPurchase.js../data/dataAdminOrders.js
