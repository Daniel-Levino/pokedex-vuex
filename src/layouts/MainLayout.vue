<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #121212">
    <q-header>
      <q-toolbar class="bg-yellow justify-between">
        <q-btn round flat to="/">
          <q-avatar>
            <img src="../assets/img/pokebola.png">
          </q-avatar>
        </q-btn>
        <div class="text-h5 text-uppercase text-weight-bolder text-red">Quasar Pokedex</div>
        <q-btn round flat to="/mypokedex">
          <q-avatar>
            <img src="../assets/img/pokedex.png">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>
