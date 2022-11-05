import { API } from "../../http/Connection"
import store from 'vuex'
export const ActionGetPokemons = ({dispatch, commit}, payload) => {
    var url = '/pokemon?limit=10&offset=0'
    API.get(url)
    .then(response => {
        console.log("ActionGetPokemons", response.data);
        console.log(store)
        commit(SET_POKEMONS, payload)
    })
    .catch(error => {})
    
}
