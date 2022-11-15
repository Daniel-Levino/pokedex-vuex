import { API } from "../../http/Connection";

export const ActionGetPokemons = ({ dispatch, commit }, payload) => {
  var url = "/pokemon?limit=20&offset=0";
  var pokemons = [];
  var rand;
  dispatch("ActionClearStatePokemons");

  return new Promise(async (resolve, reject) => {
    for (var i = 0; i <= 5; i++) {
      rand = Math.floor(Math.random() * 150) + 1;
      await API.get(`/pokemon/${rand}`)
        .then((response) => {
          //console.log("ActionGetPokemons", response.data);
          response.data.item = i;
          commit("ADDTOARRAY_POKEMON", response.data);
          //pokemons.push(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    }
    //console.log(pokemons);
  });
};

export const ActionClearStatePokemons = ({ dispatch, commit }, payload) => {
  commit("SET_POKEMONS", []);
};

export const ActionSetStateShowGetThisPokemonModal = (
  { dispatch, commit },
  payload
) => {
  commit("SET_STATESHOWGETTHISPOKEMONMODAL", payload);
  commit("SET_TRIES");
};

export const ActionDecrementTries = ({ dispatch, commit }, payload) => {
  commit("DECREMENTTRIESSTATE");
};

export const ActionRemovePokemonFromArray = ({ dispatch, commit }, payload) => {
  commit("REMOVEPOKEMONFROMARRAY", payload);
  dispatch("ActionSetStateShowGetThisPokemonModal", {
    pokemon: null,
    show: false,
  });
};
