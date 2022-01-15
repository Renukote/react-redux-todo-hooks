import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { SingleTodo } from "./pages/todoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo/:id" element={<SingleTodo />}></Route>
        <Route path="*" element={<h1>404 page not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
