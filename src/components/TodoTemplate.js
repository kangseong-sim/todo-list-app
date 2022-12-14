import React from "react";
import styled from "styled-components";

const TodoTemplateStyled = styled.div`
  width: 350px;
  height: 60px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  
`

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateStyled>
      {children}
    </TodoTemplateStyled>
  );
};

export default TodoTemplate;