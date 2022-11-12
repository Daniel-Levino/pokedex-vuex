<template>
    <q-dialog
        :model-value="showGetThisPokemonModal"
        @before-hide="hide()"
    >
      <q-card style="width: 600px; height: 600px;">
        <q-card-section>
          <div class="text-h6 text-center">Get This Pokemón</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
import {mapActions, mapState} from "vuex"

export default {
    name: 'GetThisPokemonModal',
    data() {
        return {
            show: true
        }
    },
    computed: {
        ...mapState('pokemons',['showGetThisPokemonModal'])
    },
    beforeMount() {
        console.log(this.showGetThisPokemonModal);
    },
    methods: {
        ...mapActions('pokemons', ["ActionSetStateShowGetThisPokemonModal"]),
        hide(){
            this.ActionSetStateShowGetThisPokemonModal(false)
        }
    }
}
</script>
