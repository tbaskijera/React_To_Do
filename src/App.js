import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      saveLocally();
    } else {
      isMounted.current = true;
    }
  }, [todos]);

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  const saveLocally = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("i am save!");
  };

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
