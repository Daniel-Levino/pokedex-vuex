import state from './state'
// import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

export const store = {
  namespaced: true,
  //getters,
  mutations,
  actions,
  state
}
