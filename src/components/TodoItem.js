import React from "react";
import styled from "styled-components";
import {MdDone, MdDelete} from 'react-icons/md'
import { useTodoDispatch } from "../reducer.js";

const Remove = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  color: #dcdcdc;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #787878;
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
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: 'CHECK',
      id
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id
    });
  };
  
  
  
  
  
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