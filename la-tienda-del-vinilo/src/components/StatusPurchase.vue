<template>
  <div>
    <v-table fixed-header height="380px">
      <thead>
        <tr>
          <th class="text-center">Nº de orden</th>
          <th class="text-center">Detalle</th>
          <th class="text-center">Usuario</th>
          <th class="text-center">Email</th>
          <th class="text-center">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in datos" :key="item.name" style="">
          <td class="text-center">{{ item.orderNumber }}</td>
          <td class="text-center">{{ item.detail }}</td>
          <td class="text-center">{{ item.user }}</td>
          <td class="text-center">{{ item.email }}</td>
          <td class="text-center">
            <v-select :items="state" v-model="item.state" @change="changeStatus(item)" variant="underlined"
              density="compact" style="width: 160px;"></v-select>
          </td>
        </tr>
      </tbody>
    </v-table>
    <td>
      <v-btn class="ma-4" color="#F8E3E3" @click="SaveStatus(item)">Guardar</v-btn>
    </td>
  </div>
</template>

<script>
import { stockOrder } from '../data/dataPurchaseStatus.js';
export default {
  data() {
    return {
      datos: stockOrder,
      estados: ['Verificando', 'En preparación', 'Listo para retiro'],
      state: ['Verificando', 'En preparación', 'Listo para retiro'],
    }
  },

  methods: {
    changeStatus(item) {
      // índice del elemento 
      const index = this.datos.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        // actualiza el estado del elemento en datos
        this.datos[index].estado = item.estado;

        this.$snackbar.show({
          message: 'Estado actualizado exitosamente',
          color: 'success',
        });
      } else {
        console.error('No se pudo encontrar el elemento correspondiente');
      }
    },
    SaveStatus(item) {
      const index = this.datos.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        stockOrder[index].estado = item.estado;
        this.$snackbar.show({
          message: 'Estado guardado exitosamente',
          color: 'success',
        });
      } else {
        console.error('No se pudo encontrar el elemento correspondiente');
      }
    },
  },
}
</script>

<style></style>../data/dataPurchaseStatus.js
