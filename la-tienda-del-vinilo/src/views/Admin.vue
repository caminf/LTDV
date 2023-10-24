<template>
  <v-container class="navbar">
    <h1 class="font-weight-bold text-h2 py-6">Administrador</h1>
    <v-card class="navbar">
      <v-tabs v-model="tab" bg-color="transparent" grow>
        <v-tab
          v-for="item in items"
          :key="item"
          :value="item"> {{ item }}</v-tab>
       </v-tabs>
         <v-window v-model="tab">
           <v-window-item
              v-for="item in items"
               :key="item"
               :value="item"> 
                  <div :style="{ backgroundColor: backgroundColors[item] }">
                  <component :is="getComponentForTab(tab)"></component>
                </div>
            </v-window-item>
         </v-window>
        </v-card>
      </v-container>
  </template>
  <script>
  import UsuariosRegistrado from '../components/RegisteredUsers.vue';
  import Pedido from '../components/AdminOrder.vue';
  import Stock from '../components/Stock.vue';
  import EstadoCompra from '../components/StatusPurchase.vue';



    export default {
      data() {
    return {
      tab: 'Usuarios registrados', //pestaña inicial
      items: ['Usuarios registrados', 'Pedidos', 'Estado Compras', 'Stock'],
      backgroundColors: {
      
    },
    };
  },
  components: {
    UsuariosRegistrado,
    Pedido,
    EstadoCompra,
    Stock,
  },
  methods: {
    getComponentForTab(tabName) {
      // Asocia cada pestaña a su componente correspondiente
      switch (tabName) {
        case 'Usuarios registrados':
          return 'UsuariosRegistrado';
        case 'Pedidos':
          return 'Pedido';
        case 'Estado Compras':
          return 'EstadoCompra';
        case 'Stock':
          return 'Stock';
        default:
          return 'Usuarios registrados'; //componente predeterminado 
      }
    },
  },
    }
  </script>
  <style>
  
  .navbar{
    height: 500px;
    width: 999px;
    margin-left: 20px;
    align-content: center;
  }
 
  </style>