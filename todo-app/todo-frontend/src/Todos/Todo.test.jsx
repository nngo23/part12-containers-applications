import React from "react";
import { render } from "@testing-library/react";
import { jest, test } from "@jest/globals";
import Todo from "./Todo";

test("Todo renders without crash", () => {
  const todo = { text: "Testing todo", done: false };
  const completeTodo = jest.fn();
  const deleteTodo = jest.fn();

  render(
    <Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />,
  );
});
