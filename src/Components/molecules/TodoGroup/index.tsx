/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { TODO_CONST } from "../../../Config";
import { Todo } from "../../../types";
import TodoItems from "./TodoItems";

const TodoGroup = () => {
    const [todos, setTodos] = useState<Todo[]>(TODO_CONST);

    return(
        <TodoItems todos = {todos}/>
    )
}

export default TodoGroup;