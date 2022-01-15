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

// todo: ^^^^^^^^^^^^^^^^^^^^^^^ADD todo^^^^^^^^^^^^^^^^^
export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = (res) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: res,
  };
};

export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};

// todo: ^^^^^^^^^^^^^^^^^^^^^^^GET todo^^^^^^^^^^^^^^^^^
export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const getTodoSuccess = (res) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: res,
  };
};

export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
};

// todo: ^^^^^^^^^^^^^^^^^^^^^^^GET todo^^^^^^^^^^^^^^^^^
export const getSingleTodoLoading = () => {
  return {
    type: GET_SINGLE_TODO_LOADING,
  };
};

export const getSingleTodoSuccess = (res) => {
  return {
    type: GET_SINGLE_TODO_SUCCESS,
    payload: res,
  };
};

export const getSingleTodoError = (err) => {
  return {
    type: GET_SINGLE_TODO_ERROR,
    payload: err,
  };
};

// todo: ^^^^^^^^^^^^^^^^^^^^^^^REMOVE todo^^^^^^^^^^^^^^^^^
export const removeTodoLoading = () => {
  return {
    type: REMOVE_TODO_LOADING,
  };
};

export const removeTodoSuccess = (res) => {
  return {
    type: REMOVE_TODO_SUCCESS,
    payload: res,
  };
};

export const removeTodoError = (err) => {
  return {
    type: REMOVE_TODO_ERROR,
    payload: err,
  };
};

// todo: ^^^^^^^^^^^^^^^^^^^^^^^TOGGLE todo^^^^^^^^^^^^^^^^^
export const toggleTodoLoading = () => {
  return {
    type: TOGGLE_TODO_LOADING,
  };
};

export const toggleTodoSuccess = (res) => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: res,
  };
};

export const toggleTodoError = (err) => {
  return {
    type: TOGGLE_TODO_ERROR,
    payload: err,
  };
};
