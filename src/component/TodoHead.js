import React from "react";
import styled from "styled-components";

const TodoHeadstyled = styled.div`

  padding-bottom: 10px ;
  h1 {
    font-size: 24px;
    border-bottom: 1px solid;
    padding-bottom: 10px ;
  }
  .day {
    font-size: 22px;
    font-weight: bold;
    border-bottom: 1px solid;
    padding-bottom: 10px ;
  }


`

const TodoHead = () => {
  
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    month: 'long',
    weekday: 'long',
    day: 'numeric'
  });

  return (
    <TodoHeadstyled>
      <h1> {dateString} </h1>
      <div className="day"> {dayName} (오늘) </div>
    </TodoHeadstyled>
  )
};

export default TodoHead;