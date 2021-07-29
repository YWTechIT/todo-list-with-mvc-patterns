import { Todo } from "../../../../types";
import TodoItem from "./TodoItem";

interface TodoItemsProps {
  todos: Todo[];
  onRemove: (id: string) => void;
}

const TodoItems = ({ todos, onRemove }: TodoItemsProps) => {
  return (
    <>
      <ol>
        {todos.map((todo: Todo) => (
          <TodoItem {...todo} key={todo.id} onRemove={onRemove}/>
        ))}
      </ol>
    </>
  );
};

export default TodoItems;
