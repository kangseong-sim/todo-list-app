import React, {useState} from "react";
import styled from "styled-components";
import { MdAdd } from 'react-icons/md';
import dummyTodos from "../dummydata";

const CircleButton = styled.button`
  background: #b4b4b4;
  &:hover {
    background: #dcdcdc;
  }
  &:active {
    background: #dcdcdc;
  }

  cursor: pointer;
  width: 60px;
  height: 60px;
  font-size: 60px;
  position: absolute;
  left: 80%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  
`;

const InsertFormPositioner = styled.div`
  
  height: 50%;


`;

const InsertForm = styled.form`
  
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  border: none;
  &:active {
    border: none;
  }
  width: 100%;
  height: auto;
  font-size: 20px;
  box-sizing: border-box;
`;

const TodoCreate = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
     const todo = {
        id: dummyTodos.length,
        text: value,
        done: false
      };
    
      dummyTodos.length += 1;
    setOpen(false);
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할일 제목"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;