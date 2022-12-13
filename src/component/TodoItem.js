import React from "react";
import styled from "styled-components";
import dummyTodos from "../dummydata";
import {MdDone, MdDelete} from 'react-icons/md'

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemstyled = styled.div`
display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  flex: 1;
  font-size: 22px;
  font-weight: semibold;
  color: #495057;
`;

const TodoItem = ( {id, done, text} ) => {
  
  const onToggle = () => {
    return dummyTodos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }

  const onRemove = () => {
    return dummyTodos.filter(todo => todo.id !== id);

  }
  
  
  
  
  
  return (
    <TodoItemstyled>
      <CheckBox done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemstyled>
  )

};

export default TodoItem;