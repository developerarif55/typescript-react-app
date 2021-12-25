import React, { useState } from "react";
interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
          className="my-btn"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
