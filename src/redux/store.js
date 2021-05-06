import { createStore } from "redux";
import reducer from "./reducer.js";

const saveToLocalStorage = (state) => {
  let jsonState = JSON.stringify(state);
  localStorage.setItem("state", jsonState);
};

const loadFromLocalStorage = () => {
  const parsedState = localStorage.getItem("state");
  if (parsedState === null) {
    return undefined;
  } else {
    return JSON.parse(parsedState);
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState); /*Overwrites reducer*/

store.subscribe(() => saveToLocalStorage(store.getState())); /* Every time the store changes, all updates are saved to localStorage*/

export default store;
