<template>
    <div>
      <h2>Estado de compras</h2>
      <v-table fixed-header
    height="300px">
    <thead>
      <tr>
        <th class="text-left">Nº de orden</th>
        <th class="text-left">Detalle</th>
        <th class="text-left">Usuario</th>
        <th class="text-left">Email</th>
        <th class="text-left">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in datos" :key="item.name">
        <td>{{ item.numeroDeOrden }}</td>
          <td>{{ item.detalle }}</td>
          <td>{{ item.usuario }}</td>
          <td>{{ item.email }}</td>
          <td>
            <v-select 
              :items="estados"
              v-model="item.estado"
              label="Selecciona estado"
              @change="cambiarEstado(item)"
            ></v-select>
          </td>
      </tr>
    </tbody>
  </v-table>
    </div>
</template>

<script>
import { stockPedido } from '../data/dataPedido.js';
export default {
  data () {
      return {
        datos: stockPedido,
        estados: ['Verificando pedido', 'En preparación', 'Listo para retiro'],
      }
    },

    methods: {
    cambiarEstado(item) {
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
  },
}
</script>

<style>

</style>