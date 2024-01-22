import {
  Box,
  Button,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Create = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    // Fetch initial data
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCreate = () => {
    // Create new post
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newItem,
        body: "New post body",
        userId: 1, // Replace with a valid user ID
      }),
    })
      .then((response) => response.json())
      .then((newPost) => setData([...data, newPost]))
      .catch((error) => console.error("Error creating post:", error));

    setNewItem("");
  };

  const handleUpdate = (id, index) => {
    // Find the post to update
    const postToUpdate = data.find((item) => item.id === id);

    // Update post only if it exists
    if (postToUpdate) {
      const updatedItem = { ...postToUpdate, title: "Updated post title" };

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      })
        .then((response) => response.json())
        .then((updatedPost) => {
          const updatedData = [...data];
          updatedData[index] = updatedPost;
          setData(updatedData);
        })
        .catch((error) => console.error("Error updating post:", error));
    }
  };

  const handleDelete = (id) => {
    // Delete post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <Box>
      <Input
        placeholder="New item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button onClick={handleCreate}>Create</Button>

      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.title}</Td>
              <Td>
                <Button onClick={() => handleUpdate(item.id, index)}>
                  Update
                </Button>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Create;
