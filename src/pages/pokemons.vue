<template>
    <div class="row">
        <div class="col-12 text-center text-h2">
            pokemons
        </div>
        <div v-for="(pokemon, key) in pokemons" :key="key" class="col-4 q-pa-sm">
            <q-card>
                <img :src="`https://cdn.traction.one/pokedex/pokemon/${key+1}.png`" alt="">
                
                <q-card-section>
                    {{key+1}}. {{pokemon.name}}
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default { 
    name: "PokemonsPage",
    data () { return {}},
    computed: {
        ...mapState("pokemons", ["pokemons"])
    },
    methods: {
        ...mapActions("pokemons", ["ActionGetPokemons"]),
        getPokemons() {
            this.ActionGetPokemons()
        }
    },
    created() {
        this.ActionGetPokemons()
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    unmounted() {console.log("unmounted")},
}
</script>
