import { createStore } from "redux";
import { reducer } from "./reducer";

const initState = { loading: false, error: false, todos: [], todoItem: {} };
export const store = createStore(reducer, initState);
