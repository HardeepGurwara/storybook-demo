import React from "react";

import TodoContainer from "../TodoContainer.js";
export default {
  title: "TodoContainer",
  component: TodoContainer,
};

export const NormalTodo = () => (
  <TodoContainer
    todos={["teach react", "take out dogs", "take out the cats"]}
  />
);
