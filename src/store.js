import { createStore } from "redux";

const initialState = {
  groceries: [],
  loading: true,
};

const store = createStore((state = initialState, action) => {
  if (action.type === "LOAD_GROCERIES") {
    state = { ...state, groceries: action.groceries };
  }

  if (action.type === "LOADED") {
    state = { ...state, loading: false };
  }

  if (action.type === "CREATE_GROCERIES") {
    state = { ...state, groceries: [...state.groceries, action.grocery] };
  }
  return state;
});

export default store;
