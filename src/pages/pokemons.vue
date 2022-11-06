<template>
    <div class="row">
        <div class="col-12 text-yellow text-weight-bolder text-center text-h2 q-my-md">
            pokemons
        </div>
        <div v-for="(pokemon, key) in pokemons" :key="key" class="col-lg-2 col-md-4 col-sm-6 col-xs-12 q-pa-sm">
            <q-card :style="setTypeColor(pokemon.types[0].type.name)">
                <q-card-section class="text-right">
                    <div class="row justify-between">
                        <q-rating
                        v-model="like"
                            max="1"
                            size="3em"
                            color="white"
                            color-selected="red-9"
                            icon="favorite_border"
                            icon-selected="favorite"
                            icon-half="favorite"
                            no-dimming
                        />
                        <q-btn color="white" text-color="black" :label="pokemon.id" round unelevated/>
                    </div>
                </q-card-section>

                <img class="q-pa-sm" :src="`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`" alt="">
                
                <q-card-section>
                    <div class="text-center text-h6">
                        {{pokemon.name}}
                    </div>
                    <div class="text-center">
                        {{ pokemon.types[0].type.name }}
                    </div>
                    
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default { 
    name: "PokemonsPage",
    data () { return {
        like: 0
    }},
    computed: {
        ...mapState("pokemons", ["pokemons","pokemonsColorTypes"])
    },
    methods: {
        ...mapActions("pokemons", ["ActionGetPokemons", "ActionClearStatePokemons"]),
        getPokemons() {
            this.ActionGetPokemons()
        },
        setTypeColor(type){
            switch (type) {
                case 'grass':
                    return "background-color: #3e9709"
                    break;
                case 'fire':
                    return "background-color: #f67f0b"
                    break;
                case 'water':
                    return "background-color: #0a7abc"
                    break;
                case 'normal':
                    return "background-color: #ccc9aa"
                    break;
                case 'flying':
                    return "background-color: #5eb9b2"
                    break;
                case 'bug':
                    return "background-color: #bddd6e"
                    break;
                case 'poison':
                    return "background-color: #a819d7"
                    break;
                case 'electric':
                    return "background-color: #fffa24"
                    break;
                case 'ground':
                    return "background-color: #e1d158"
                    break;
                case 'fighting':
                    return "background-color: #e81319"
                    break;
                case 'psychic':
                    return "background-color: #ec0e63"
                    break;
                case 'fairy':
                    return "background-color: #ffa0c2"
                    break;
                case 'ghost':
                    return "background-color: #8e55a4"
                    break;
                case 'rock':
                    return "background-color: #776a3e"
                    break;
                case 'ice':
                    return "background-color: #1995a1"
                    break;
                case 'dragon':
                    return "background-color: #8a55fd"
                    break;
                default:
                    return "background-color: red;"
                    break;
            }
        }
    },
    created() {
        this.ActionGetPokemons()
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
        console.log(this.pokemonsColorTypes)
    },
    unmounted() {
        this.ActionClearStatePokemons()
    },
}
</script>
