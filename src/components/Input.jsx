import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
} from "../Redux/actionCreators";

export const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    try {
      dispatch(addTodoLoading());
      fetch("http://localhost:3001/todos", {
        method: "POST",
        body: JSON.stringify({ status: false, title: text }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((d) => d.json())
        .then((res) => dispatch(addTodoSuccess(res)));
    } catch (e) {
      dispatch(addTodoError(e));
    }
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>ADD Todo</button>
    </div>
  );
};
