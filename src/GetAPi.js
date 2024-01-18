import { useEffect, useState } from "react";

function GetAPi() {
  const [toDos, setTodos] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        const data = await response.json();
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);
  return (
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Status</td>
      </tr>
      {toDos.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.completed ? "true" : "false"}</td>
        </tr>
      ))}
    </table>
  );
}
export default GetAPi;
