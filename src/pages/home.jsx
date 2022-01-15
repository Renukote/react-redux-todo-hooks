import { useSelector } from "react-redux";
import { Input } from "../components/Input";
import { ViewTable } from "../components/Table";

export const Home = () => {
//   const { todos } = useSelector((state) => state);
  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <Input />
      <ViewTable />
    </div>
  );
};
