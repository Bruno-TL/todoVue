import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {id:1, titulo: "Comprar braços mecânico", concluido: false },
      {id:2, titulo: "Comprar mesa para o setup", concluido: false },
      {id:3, titulo: "Comprar cadeira presidente ", concluido: false },
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state,titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo, 
          concluido: false
        })
      }
    },
    removeTarefa(state,id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id != id)
    },
    editaTarefa(state, novaTarefa){
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == novaTarefa.id)[0]
      tarefa.titulo = novaTarefa.titulo
    }
  },
  actions: {
  },
  modules: {
  }
})
