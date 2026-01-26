import { useEffect, useState } from "react";
import apiClient from "../util/apiClient";

import List from "./List";
import Form from "./Form";

const TodoView = () => {
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    const { data } = await apiClient.get("/todos");
    console.log("Fetched todos:", data);
    setTodos(Array.isArray(data) ? data : data.todos || []);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const createTodo = async (todo) => {
    const { data } = await apiClient.post("/todos", todo);
    setTodos([...todos, data]);
  };

  const deleteTodo = async (todo) => {
    await apiClient.delete(`/todos/${todo._id}`);
    refreshTodos();
  };

  const completeTodo = async (todo) => {
    await apiClient.put(`/todos/${todo._id}`, {
      text: todo.text,
      done: true,
    });
    refreshTodos();
  };

  return (
    <>
      <h1>Todos</h1>
      <Form createTodo={createTodo} />
      <List todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </>
  );
};

export default TodoView;
