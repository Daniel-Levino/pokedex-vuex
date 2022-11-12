export default {
    SET_POKEMONS(state, payload){
        state.pokemons = payload
    },
    ADDTOARRAY_POKEMON(state, payload){
        state.pokemons.push(payload)
    },
    SET_STATESHOWGETTHISPOKEMONMODAL(state, payload){
        state.showGetThisPokemonModal = payload
    }
}
