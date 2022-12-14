import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from "../reducer.js";

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
  transform: translate(500%,20%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex; 
  align-items: center;
  justify-content: center; 

  
`;

const InsertFormPositioner = styled.div`
  
  /* bottom: 0; */
  /* position: absolute; */
`;

const InsertForm = styled.form`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 25px;
  padding-bottom: 72px;
  
  border-top: 1px solid #e9ecef;

  .close {
    padding-bottom: 15px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;



function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    nextId.current += 1;
    setOpen(false);
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
           <div className='close'>X</div> 
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
}

export default React.memo(TodoCreate);