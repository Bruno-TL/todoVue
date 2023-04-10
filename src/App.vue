<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer v-model="drawer" app>
      
    </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" app>
      <v-img src="https://picsum.photos/1920/1080?random" dark class="text-center">

        <v-list>
          <v-avatar size="100">
            <img
              src="https://imgs.search.brave.com/cQEQgy4HT3TzDRVwUizfyIP6h3-83c40OqWKWvKIrHU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWcu/ZWNhcnRlbGVyYS5j/b20vbm90aWNpYXMv/NjA3MDAvNjA3MzQt/bS5qcGc"
              alt="Ricky">
          </v-avatar>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Vue.js
              </v-list-item-title>
              <v-list-item-subtitle>
                Lista de Tarefas
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-img>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
    <v-app-bar color="#fcb69f" dark src="https://picsum.photos/1920/1080?random" app prominent height="185">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.6)"></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title class="mt-16">
          <InputTarefa />
        </v-app-bar-title>
      </center>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/tarefas/InputTarefa.vue';

export default {
  components: {
    InputTarefa
  },
  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/sobre' },
    ]
  }),
}
</script>
