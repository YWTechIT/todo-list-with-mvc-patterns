import { Todo } from "../../../../types";
import TodoItem from "./TodoItem";

interface TodoItemsProps {
  todos: Todo[];
}

const TodoItems = ({ todos }: TodoItemsProps) => {
  return (
    <>
      <ol>
        {todos.map((todo: Todo) => (
          <TodoItem {...todo} key={todo.id}/>
        ))}
      </ol>
    </>
  );
};

export default TodoItems;
