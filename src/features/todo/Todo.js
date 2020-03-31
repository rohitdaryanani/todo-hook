import React, { useState } from 'react';

const Todo = ({
  index,
  todo,
  completedTask,
  updateCompletedTaskHandler,
  updateTodoHandler,
  deleteTodoHandler
}) => {
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

  const toggleCompleted = e => {
    const { target } = e;
    const { checked } = target;
    const completedValue = checked ? completedTask + 1 : completedTask - 1;

    updateTodoHandler(index, { ...todo, completed: checked });
    updateCompletedTaskHandler(completedValue);
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
      <input
        type="checkbox"
        name="todoCheck"
        defaultChecked={todo.completed}
        onClick={toggleCompleted}
      />
      <span>{todo.name}</span>
      <button onClick={toggleMode}>edit</button>
      <button onClick={remove}>delete</button>
    </>
  );
};

export default Todo;
