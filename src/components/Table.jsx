import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/actionCreators";
import { ViewRow } from "./ViewRow";

export const ViewTable = () => {
  const { loading, error, todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      dispatch(getTodoLoading());
      let res = await fetch("http://localhost:3001/todos");
      res = await res.json();
      dispatch(getTodoSuccess(res));
      console.log("get data is triggered", res);
    } catch (e) {
      dispatch(getTodoError(e));
    }
  };

  return loading ? (
    <h1>...Loading</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : (
    <table style={{ margin: "50px auto" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Title
          </th>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Completed
          </th>
          <th style={{ border: "1px solid black", padding: "0px 20px" }}>
            Update
          </th>
        </tr>
      </thead>
      <tbody>
        {console.log(todos)}
        {todos.map((e) => (
          <ViewRow key={e.id} {...e} />
        ))}
      </tbody>
    </table>
  );
};
