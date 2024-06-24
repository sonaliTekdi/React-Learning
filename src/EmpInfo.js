import { useEffect, useState } from "react";

function EmpInfo() {
  const [empdata, setempData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:3500/users");
        const data = await response.json();
        setempData(data);
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
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
      </tr>
      {empdata.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </table>
  );
}
export default EmpInfo;
