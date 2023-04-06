<template>
    <div>
      <v-dialog v-model="dialog" persistent max-width="290">
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Open Dialog
          </v-btn>
        </template> -->
        <v-card>
          <v-card-title class="text-h5">
            Delete
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>Confirm delet ?</v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="$emit('fechaModal')">
              Cancel
            </v-btn>
            <v-btn 
              color="green darken-1" 
              text 
              @click="handleDeleta()"
            >
              Exculir
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tarefa'],
    data() {
      return {
        dialog: true,
      }
    },
    methods: {
        handleDeleta(){
    
        this.$store.commit('removeTarefa',this.tarefa.id)
        this.$emit('fechaModal')
      }
    }
  }
  </script>
  
  <style></style>