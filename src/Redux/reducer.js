import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_SINGLE_TODO_ERROR,
  GET_SINGLE_TODO_LOADING,
  GET_SINGLE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS,
} from "./actionTypes";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING:
      return { ...state, loading: true };
    case ADD_TODO_SUCCESS:
      return { ...state, loading: false, todos: [...state.todos, payload] };
    case ADD_TODO_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TODO_LOADING:
      return { ...state, loading: true };
    case GET_TODO_SUCCESS:
      return { ...state, loading: false, todos: payload };
    case GET_TODO_ERROR:
      return { ...state, loading: false, error: true };
    case GET_SINGLE_TODO_LOADING:
      return { ...state, loading: true };
    case GET_SINGLE_TODO_SUCCESS:
      return { ...state, loading: false, todoItem: payload };
    case GET_SINGLE_TODO_ERROR:
      return { ...state, loading: false, error: true };
    case TOGGLE_TODO_LOADING:
      return { ...state, loading: true };
    case TOGGLE_TODO_SUCCESS:
      return { ...state, loading: false, todoItem: payload };
    case TOGGLE_TODO_ERROR:
      return { ...state, loading: false, error: true };
    case REMOVE_TODO_LOADING:
      return { ...state, loding: true };
    case REMOVE_TODO_SUCCESS:
      return { ...state, loding: false, todoItem: [] };
    case REMOVE_TODO_ERROR:
      return { ...state, loding: false, error: true };
    default:
      return state;
  }
};
