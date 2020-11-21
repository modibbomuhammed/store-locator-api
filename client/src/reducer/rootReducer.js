import { loadStores } from "../action/actionTypes";

const initialState = {
  stores: [],
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case loadStores:
      return { stores: payload };
    default:
      return state;
  }
}
