/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from "react";

interface InputProps {
  onInsert: (title: string) => void;
}

const Input = ({ onInsert }: InputProps) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(title);
    setTitle("");
  }, [title, onInsert]);

  return (
    <form onSubmit={onSubmit}>
      <input onChange={handleChange} value={title} />
      <button type="submit">일정추가</button>
    </form>
  );
};

export default Input;
