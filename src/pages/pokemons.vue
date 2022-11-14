<template>
    <div class="row">
        <div class="col-12 text-yellow text-weight-bolder text-center text-h2 q-my-md">
            pokemons
        </div>
        <div v-if="pokemons.length>0" class="col-12">
            <div class="row">
                <div v-for="(pokemon, key) in pokemons" :key="key" class="col-lg-2 col-md-4 col-sm-6 col-xs-12 q-pa-md">
                    <q-card class="pokemon-card pointer" :style="GetPokemonColor(pokemon.types[0].type.name)" @click="getThisPokemon(pokemon)">
                        <q-card-section class="text-right">
                            <div class="row justify-between">
                                <q-rating
                                v-model="like"
                                    readonly
                                    max="1"
                                    size="3em"
                                    color="white"
                                    color-selected="red-9"
                                    icon="star_border"
                                    icon-selected="star"
                                    no-dimming
                                />
                                {{ pokemon.index}}
                                <q-btn color="white" text-color="black" :label="pokemon.id" round unelevated/>
                            </div>
                        </q-card-section>
        
                        <img class="q-pa-sm" :src="`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`" alt="">
                        
                        <q-card-section>
                            <div class="text-center text-h6">
                                {{ pokemon.name }}
                            </div>
                            <div class="text-center">
                                {{ pokemon.types[0].type.name }}
                            </div>
                            
                        </q-card-section>
                    </q-card>
                </div>
            </div>
            
        </div>
        <div v-else class="col-12 text-white text-center text-h1 q-pa-xl">
            No More Pokemons
        </div>
        <GetThisPokemonModal/>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import GetThisPokemonModal from "../components/getThisPokemonModal.vue"

export default { 
    name: "PokemonsPage",
    data () { return {
        like: 0
    }},
    components: {
        GetThisPokemonModal
    },
    computed: {
        ...mapState("pokemons", ["pokemons","pokemonsColorTypes"]),
        ...mapGetters("pokemons", ["GetPokemonColor"]),
    },
    methods: {
        ...mapActions("pokemons", ["ActionGetPokemons", "ActionClearStatePokemons", "ActionSetStateShowGetThisPokemonModal"]),
        getPokemons() {
            this.ActionGetPokemons()
        },
        getThisPokemon(pokemon) {
            this.ActionSetStateShowGetThisPokemonModal({pokemon: Object.assign({},pokemon), show: true})
            console.log(Object.assign({},pokemon).name)
        }
    },
    created() {
        this.ActionGetPokemons()
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    unmounted() {
        this.ActionClearStatePokemons()
    },
}
</script>
<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
