import React, { useEffect, useState } from "react";

function Courses() {
  const fromStyle = {
    border: "1px solid #000",
    backgroundColor: "#eee",
    width: "30%",
    padding: "10px",
  };
  const [data, setData] = useState([]);
  const initialFormData = {
    title: "",
    status: "",
  };
  const [formData, setFormData] = useState({
    initialFormData,
  });
  const [deleteData, setDeleteData] = useState([]);
  const [editId, setEditId] = useState(null);

  async function getcourses() {
    try {
      const response = await fetch("http://localhost:3400/get/courses");
      const coursesData = await response.json();
      setData(coursesData);
    } catch (error) {}
  }

  useEffect(() => {
    getcourses();
  }, []);

  async function submitData(event) {
    event.preventDefault();
    try {
      const payload = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      };
      const response = await fetch(
        "http://localhost:3400/create/courses",
        payload
      );
      if (response) {
        getcourses();
        setFormData(initialFormData);
      }
      const coursesData = await response.json();
      setFormData(coursesData);
    } catch (error) {}

    if (editId) {
      try {
        const payload = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        };

        const response = await fetch(
          `http://localhost:3400/update/courses/${editId}`,
          payload
        );

        if (response) {
          getcourses();
          setFormData(initialFormData);
          setEditId(null);
        }
      } catch (error) {
        console.error("Error updating course:", error);
      }
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function deleteCourse(id) {
    try {
      const payload = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      };
      const response = await fetch(
        `http://localhost:3400/delete/courses/${id}`,
        payload
      );
      if (response) {
        getcourses();
      }
      const deleteCourseData = await response.json();
      setDeleteData(deleteCourseData);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }

  const editCourse = (id) => {
    const course = data.find((item) => item.id === id);
    setFormData({ title: course.title, status: course.status });
    setEditId(id);
  };

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="border-class">
          {data.map((item) => (
            <tr key={item?.id}>
              <td>{item?.id}</td>
              <td>{item?.title}</td>
              <td>{item?.status}</td>
              <td>
                <button onClick={() => deleteCourse(item?.id)}>Delete</button>
                <button onClick={() => editCourse(item?.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form style={fromStyle} onSubmit={submitData}>
        <label htmlFor="title">Course Title</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="status">Status</label>
        <br />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default Courses;
