import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let local = JSON.parse(localStorage.getItem("todos"));
        setTodos(local);
      }
    };

    getLocal();
  }, []);

  useEffect(() => {
    const saveLocally = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("i am save!");
    };

    if (isMounted.current) {
      saveLocally();
    } else {
      isMounted.current = true;
    }
  }, [todos]);

  return (
    <div>
      <header>Yet another ToDo app</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
