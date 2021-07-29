import {Todo} from '../../../../../types';

interface TodoItemProps extends Todo {
  onRemove: (id: string) => void;
}

const TodoItem = ({ id, text, done, onRemove }: TodoItemProps) => {
  return (
    <>
      <li id={id} onClick={() => {onRemove(id)}}>
        <label >{text}</label>
      </li>
    </>
  );
};

export default TodoItem;
