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
          Edit
        </v-card-title>
        <v-divider></v-divider>
        <!-- <v-card-text>Informe o título</v-card-text> -->
        <v-text-field label="New title"  outlined class="px-3 mt-2" v-model="titulo"></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancel
          </v-btn>
          <v-btn 
            color="green darken-1" 
            text 
            @click="handleEditar()"
          >
            Edit
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
      titulo:null
    }
  },
  created(){
    this.titulo = this.tarefa.titulo
  },
  methods: {
    handleEditar(){
      let novaTarefa = {
        titulo: this.titulo,
        id: this.tarefa.id
      }
      this.$store.dispatch('editaTarefa',novaTarefa)
      this.$emit('fechaModal')
    }
  }
}
</script>

<style></style>