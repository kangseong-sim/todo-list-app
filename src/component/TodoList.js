import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import dummyTodos from "../dummydata";

const TodoListstyled = styled.div`

  padding-top: 20px;
  
`;



const TodoList = ( {todos} ) => {

  


  return (
    <TodoListstyled>
      {dummyTodos.map(todo => (
        <TodoItem
          id = {todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </TodoListstyled>
  );
};

export default TodoList;