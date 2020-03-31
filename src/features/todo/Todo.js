import React, { useState } from 'react';

const Todo = ({ index, todo, updateTodoHandler, deleteTodoHandler }) => {
  const [isEditable, setIsEditable] = useState(false);
  const toggleMode = () => {
    setIsEditable(!isEditable);
  };

  const save = e => {
    e.preventDefault();
    const { target } = e;
    const { todoInput } = target;
    const { value } = todoInput;

    updateTodoHandler(index, { ...todo, name: value });
    toggleMode();
  };

  const remove = () => {
    deleteTodoHandler(index);
  };

  const { name } = todo;

  if (isEditable) {
    return (
      <>
        <form onSubmit={save}>
          <input type="text" name="todoInput" defaultValue={name} />
          <button type="submit">save</button>
        </form>
      </>
    );
  }

  return (
    <>
      <span>{todo.name}</span>
      <button onClick={toggleMode}>edit</button>
      <button onClick={remove}>delete</button>
    </>
  );
};

export default Todo;
