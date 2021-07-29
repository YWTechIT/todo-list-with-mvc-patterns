import {Todo} from '../../../../../types';

const TodoItem = ({ id, text, done }: Todo) => {
  return (
    <>
      <li id={id}>
        <label >{text}</label>
      </li>
    </>
  );
};

export default TodoItem;
