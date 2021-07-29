/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import { TODO_CONST } from "../../../Config";
import { Todo } from "../../../types";
import Input from "../../atoms/Input";
import TodoItems from "./TodoItems";

const TodoGroup = () => {
  const [todos, setTodos] = useState<Todo[]>(TODO_CONST);

  const onInsert = useCallback(
    (title: string) => {
      const newTodo: Todo = {
        id: String(todos.length + 1),
        text: title,
        done: false,
      };
      setTodos(todos.concat(newTodo));
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: string) => {
      const newTodo = todos.filter((todo) => todo.id !== id);
      setTodos(newTodo);
    },
    [todos]
  );

  return (
    <>
      <Input onInsert={onInsert} />
      <TodoItems todos={todos} onRemove={onRemove}/>
    </>
  );
};

export default TodoGroup;
