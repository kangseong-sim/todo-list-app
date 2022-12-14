import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import dummyTodos from "../static/dummydata";
import { useTodoState } from "../reducer.js";

const TodoListstyled = styled.div`

  padding-top: 20px;
  padding-bottom: 50px;
  
`;



const TodoList = ( ) => {

  const todos = useTodoState();


  return (
    <TodoListstyled>
      {todos.map(todo => (
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