import React from "react";
import { useState } from "react";

import Button from "./components/Button";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";


const Todo = () => {
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(["learn html", "learn css", "learn js"]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (indexToBeEdited == null) {
      setTodos([...todos, todo]);
    } else {
      todos[indexToBeEdited] = todo;
      setTodos([...todos]);
      setIndexToBeEdited(null);
    }
    setTodo("");
  };
  const handleedit = (index) => {
    setIndexToBeEdited(index);
    setTodo(todos[index]);
  };
  const handledelete = (indextobedeleted) => {
    const newTodos = todos.filter((todo, i) => i != indextobedeleted);
    setTodos(newTodos);
  };
  function Title({ title, count }) {
    return (
      <h1>
        {title} ({count})
      </h1>
    );
  }
  
  

  return (
    <>
        <Title title="React Todo App" count={todos.length} />

<TodoForm  todo={todo} handlesubmit={handlesubmit} setTodo={setTodo} indexToBeEdited={indexToBeEdited}/>
      <TodoList handleedit={handleedit} handledelete={handledelete} todos={todos}/>
    </>
  );
};

export default Todo;
