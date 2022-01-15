import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleTodoError,
  getSingleTodoLoading,
  getSingleTodoSuccess,
  removeTodoError,
  removeTodoLoading,
  removeTodoSuccess,
  toggleTodoError,
  toggleTodoLoading,
  toggleTodoSuccess,
} from "../Redux/actionCreators";

export const SingleTodo = () => {
  const { loading, error, todoItem } = useSelector((state) => state);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      dispatch(getSingleTodoLoading());
      let res = await fetch(`http://localhost:3001/todos/${id}`);
      res = await res.json();
      dispatch(getSingleTodoSuccess(res));
    } catch (e) {
      dispatch(getSingleTodoError(e));
    }
  };

  const handleToggle = async () => {
    try {
      dispatch(toggleTodoLoading());
      let res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...todoItem,
          status: !todoItem.status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      res = await res.json();
      console.log("toggle res", res);
      dispatch(toggleTodoSuccess(res));
    } catch (e) {
      console.log(e);
      dispatch(toggleTodoError());
    }
  };

  const handleRemove = async () => {
    try {
      dispatch(removeTodoLoading());
      let res = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
      res = await res.json();
      console.log(res);
      dispatch(removeTodoSuccess());
    } catch (e) {
      dispatch(removeTodoError(e));
    }
  };

  return loading ? (
    <h1>...Loading</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : !todoItem.id ? (
    <h1>This item doesn't exist</h1>
  ) : (
    <table style={{ width: "fit-content", margin: "auto" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Title
          </th>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Completed
          </th>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Toggle Status
          </th>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid black", padding: "0px 20px" }}>
            {todoItem.title}
          </td>
          <td style={{ border: "1px solid black", padding: "0px 20px" }}>
            {todoItem.status ? "Done" : "Undone"}
          </td>
          <td
            style={{ border: "1px solid black", padding: "0px 20px" }}
            onClick={handleToggle}
          >
            Toggle Status
          </td>
          <td
            style={{ border: "1px solid black", padding: "0px 20px" }}
            onClick={handleRemove}
          >
            Delete
          </td>
        </tr>
      </tbody>
    </table>
  );
};
