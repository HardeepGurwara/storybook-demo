import React, { useState } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1> todo-list</h1>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          {" "}
          add
        </button>
      </form>
      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
