import React from "react";

//Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  // console.log(todos);
  // console.log("setTodos in TodoList.js", setTodos);

  return (
    <div className="todo-container" >
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
