<template>
    <v-container>
        <h1 class="font-weight-bold text-h2 py-6">Nuevos Productos</h1>       
   <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!Nombre || 'Campo obligatorio']"
            :error-messages="errorMessages"
            label="Nombre del producto"
            required
          ></v-text-field>
          <v-text-field
            ref="Stocl"
            v-model="stock"
            :rules="[
              () => !!stock || 'Campo obligatorio',
              addressCheck
            ]"
            label="Numero del stock"
            required
          ></v-text-field>
          <v-text-field
            ref="precio"
            v-model="precio"
            :rules="[() => !!precio || 'Campo Obligatio',
             addressCheck]"
            label="Precio del producto"
            placeholder="El Paso"
            required
          ></v-text-field>
          <v-file-input
                accept="image/*"
                label="Ingrese el archivo de la imagen"
            ></v-file-input>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
            <router-link class="button" to="/Admin"> <v-btn variant="text">
            Cancelar
          </v-btn></router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              location="left"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            variant="text"
            @click="submit"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
 export default {
    data: () => ({
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Campo necesario`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>

<style>

</style>