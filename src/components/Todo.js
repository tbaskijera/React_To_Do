import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, todos, setTodos, text }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const checkHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id)
          return {
            ...item,
            completed: !item.completed,
          };
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-content ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={checkHandler} className="check-btn">
        <i>
          <AiOutlineCheck />
        </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i>
          <AiOutlineDelete />
        </i>
      </button>
    </div>
  );
};

export default Todo;
