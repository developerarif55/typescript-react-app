import React from "react";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  RemoveTodo: RemoveTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, RemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleTodo={toggleTodo}
          RemoveTodo={RemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
