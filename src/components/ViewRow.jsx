import { useNavigate } from "react-router-dom";

export const ViewRow = ({ title, status, id }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td style={{ border: "1px solid black", padding: "0px 20px" }}>
        {title}
      </td>
      <td style={{ border: "1px solid black", padding: "0px 20px" }}>
        {status ? "YES" : "NO"}
      </td>
      <td style={{ border: "1px solid black", padding: "0px 20px" }}>
        <button
          onClick={() => {
            navigate(`todo/${id}`);
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
