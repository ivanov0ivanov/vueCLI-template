import { SET_QUERY } from "./mutation-types";

export default {
  setQuery({ commit }, query) {
    commit(SET_QUERY, query)
  }
}
