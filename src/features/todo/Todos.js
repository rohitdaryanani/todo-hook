import React, { useState } from "react";

function Todos({ todos, deleteTodo, toggleEdit }) {
  return todos.map(todo => {
    return (
      <li key={todo.id}>
        {todo.editable ? (
          <span>
            <input
              type="text"
              value={todo.name}
              onChange={e => e.target.value}
            />
            <button onClick={() => toggleEdit(todo.id)}>{"save"}</button>
            <button onClick={() => deleteTodo(todo.id)}>cancel</button>
          </span>
        ) : (
          <span>
            {todo.name}
            <button onClick={() => toggleEdit(todo.id)}>{"edit"}</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </span>
        )}
      </li>
    );
  });
}

export { Todos };
