import React, { useState } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";

const initialTodos: Todo[] = [
  {
    text: "How to use TypeScript",
    complete: false,
  },
  {
    text: "you will learn TypeScript",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // add toggle function
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // add todo function
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  // remove todo
  const RemoveTodo = (id: any) => {
    const newTodoList = todos.filter((todo) => todo !== id);
    setTodos(newTodoList);
  };
  return (
    <div className="App">
      <div className="TodoContainer">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          RemoveTodo={RemoveTodo}
        />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
