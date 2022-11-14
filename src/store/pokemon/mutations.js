export default {
    SET_POKEMONS(state, payload){
        state.pokemons = payload
    },
    ADDTOARRAY_POKEMON(state, payload){
        state.pokemons.push(payload)
    },
    SET_STATESHOWGETTHISPOKEMONMODAL(state, payload){
        state.showGetThisPokemonModal = payload
    },
    SET_TRIES(state, payload){
        var rand = Math.floor(Math.random() * 5) + 1
        // console.log("tries",rand);
        state.tries = rand
    },
    DECREMENTTRIESSTATE(state, payload){
        // console.log("tries = ", state.tries);
        state.tries = state.tries-1
        // console.log("tries - 1 = ", state.tries);
    },
    REMOVEPOKEMONFROMARRAY(state, payload){
        console.log("payload = ", payload);
        state.pokemons.forEach((el, index) => {
            console.log("el = ",el.item);
            if(el.item == payload){
                console.log("entrou");
                state.pokemons.splice(index,1)
            }
        });
    }
}
