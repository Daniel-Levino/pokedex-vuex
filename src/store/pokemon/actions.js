import { API } from "../../http/Connection"

export const ActionGetPokemons = ({dispatch, commit}, payload) => {
    var url = '/pokemon?limit=20&offset=0'
    API.get(url)
    .then(response => {
        console.log("ActionGetPokemons", response.data.results);

        commit("SET_POKEMONS", response.data.results)
    })
    .catch(error => {})
    
}
