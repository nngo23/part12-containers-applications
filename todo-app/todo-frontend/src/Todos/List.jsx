import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        .map((todo) => (
          <Todo
            key={todo._id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))
        .reduce((acc, cur) => [...acc, <hr key={Math.random()} />, cur], [])}
    </>
  );
};

export default TodoList;
