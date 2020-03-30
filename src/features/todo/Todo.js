import React, { useState } from "react";
import { uuid } from "uuidv4";
import { Todos } from "./Todo";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const todo = {
      id: uuid(),
      name: task,
      completed: false,
      editable: false
    };
    setTodo([...todos, todo]);
    setTask("");
  };

  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodo(updatedTodos);
  };

  const toggleEdit = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.editable = !todo.editable;
        return todo;
      }
      return todo;
    });
    console.log(updatedTodos);
    setTodo(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          name="task"
          onChange={e => setTask(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        <Todos
          todos={todos}
          deleteTodo={handleDelete}
          toggleEdit={toggleEdit}
        />
      </ul>
    </div>
  );
}

export { Todo };
