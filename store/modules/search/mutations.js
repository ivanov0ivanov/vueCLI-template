import { SET_QUERY } from "./mutation-types";

export default {
  [SET_QUERY](state, query) {
      state.query = query;
  }
}
