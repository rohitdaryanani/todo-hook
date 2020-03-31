import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodo] = useState([]);
  const [completedTask, setCompletedTask] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    const { target } = event;
    const { task } = target;
    const { value } = task;
    if (value.trim() === '') return;

    const todo = {
      id: uuid(),
      name: value,
      completed: false
    };
    setTodo([...todos, todo]);
    task.value = '';
    task.focus();
  };

  const updateTodoHandler = (index, newTodo) => {
    const todosCopy = [...todos];
    /**
     * instead of doing 
     *  const todo = todosCopy[index];
        todo.name = newTodo.name;
        todo.completed = newTodo.completed;
        we remove the todo at specific index and replace with newTodo
     */
    todosCopy.splice(index, 1, newTodo);
    setTodo(todosCopy);
  };

  const deleteTodoHandler = index => {
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodo(todosCopy);
  };

  const updateCompletedTaskHandler = val => {
    setCompletedTask(val);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <Todo
              todo={todo}
              index={index}
              completedTask={completedTask}
              updateTodoHandler={updateTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
              updateCompletedTaskHandler={updateCompletedTaskHandler}
            />
          </li>
        ))}
      </ul>
      completed:{completedTask}
    </div>
  );
};

export default Todos;
