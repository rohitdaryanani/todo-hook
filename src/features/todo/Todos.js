import React, { useState } from 'react';
import { uuid } from 'uuidv4';

const Todos = () => {
  const [todos, setTodo] = useState([]);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const { target } = event;
  //   const { task } = target;
  //   const { value } = task;
  //   if (value.trim() === '') return;

  //   const todo = {
  //     id: uuid(),
  //     name: value,
  //     completed: false,
  //     editable: false
  //   };
  //   setTodo([...todos, todo]);
  //   task.value = '';
  //   task.focus();
  // };

  // // const handleDelete = id => {
  // //   const updatedTodos = todos.filter(todo => todo.id !== id);
  // //   setTodo(updatedTodos);
  // // };

  // // const toggleEdit = id => {
  // //   const updatedTodos = todos.map(todo => {
  // //     if (todo.id === id) {
  // //       todo.editable = !todo.editable;
  // //       return todo;
  // //     }
  // //     return todo;
  // //   });
  // //   console.log(updatedTodos);
  // //   setTodo(updatedTodos);
  // // };

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default Todos;
