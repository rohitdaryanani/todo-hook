import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodo] = useState(
    JSON.parse(window.localStorage.getItem('todos')) || []
  );

  useEffect(() => window.localStorage.setItem('todos', JSON.stringify(todos)), [
    todos
  ]);

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
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const deleteTodoHandler = index => {
    const todosCopy = [...todos];
    /**
     * need to check if the deleted item task is completed if yes then minus from
     * the compledted task state
     */
    todosCopy.splice(index, 1);
    setTodo(todosCopy);
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
              updateTodoHandler={updateTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
            />
          </li>
        ))}
      </ul>
      completed:{todos.filter(todo => todo.completed).length}
    </div>
  );
};

export default Todos;
