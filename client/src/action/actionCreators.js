import { loadStores } from "./actionTypes";
export function sendStores(payload) {
  return {
    type: loadStores,
    payload,
  };
}
