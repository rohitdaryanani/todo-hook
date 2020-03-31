import React, { useState } from 'react';

const Todo = ({
  index,
  todo,
  completedTaskCount,
  updateCompletedTaskCountHandler,
  updateTodoHandler,
  deleteTodoHandler
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const toggleMode = () => {
    setIsEditable(!isEditable);
  };

  const save = event => {
    event.preventDefault();
    const { target } = event;
    const { todoInput } = target;
    const { value } = todoInput;

    updateTodoHandler(index, { ...todo, name: value });
    toggleMode();
  };

  const remove = () => {
    deleteTodoHandler(index);
  };

  const toggleCompleted = event => {
    const { target } = event;
    const { checked } = target;
    const completedValue = checked
      ? completedTaskCount + 1
      : completedTaskCount - 1;

    updateTodoHandler(index, { ...todo, completed: checked });
    updateCompletedTaskCountHandler(completedValue);
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
