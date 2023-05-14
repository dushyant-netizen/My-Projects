import React, { useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  const addTask = () => {
    setTodo([...todo,inputText])
  };

  return (
    <>
      <h1>TODO APP</h1>
      <input
        type="text"
        placeholder="Enter Your Task"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button className="btn" onClick={addTask}>
        Add
      </button>
 
 <ul>
  {
    todo.map((todos,i)=>(
     <li key={i}>{todos}</li>
    ))
  }
 </ul>


    </>
  );
};

export default Home;
