// here will be all of my typescript code
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  RemoveTodo: RemoveTodo;
}
const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, RemoveTodo }) => {
  return (
    <div className="todolist_bt">
      <div>
        <label
          style={
            todo.complete
              ? { textDecoration: "line-through", color: "#7AB99F" }
              : undefined
          }
        >
          <input
            type="checkbox"
            onClick={() => {
              toggleTodo(todo);
            }}
            checked={todo.complete}
          />
          {todo.text}
        </label>
      </div>
      <span
        className="cross"
        onClick={() => {
          RemoveTodo(todo);
        }}
      >
        X
      </span>
    </div>
  );
};

export default TodoListItem;
