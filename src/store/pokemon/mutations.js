export default {
    SET_POKEMONS(state, payload){
        state.pokemons = payload
    },
    ADDTOARRAY_POKEMON(state, payload){
        state.pokemons.push(payload)
    }
}
