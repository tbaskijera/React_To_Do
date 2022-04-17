import React from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { id: Math.random() * 1000, text: inputText, completed: false },
      ]);
    }
    setInputText("");
  };

  return (
    <>
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          <i>
            <AiOutlinePlusCircle />
          </i>
        </button>
        <div></div>
      </form>
    </>
  );
};

export default Form;
