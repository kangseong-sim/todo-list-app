import React from "react";
import styled from "styled-components";

const TodoTemplateStyled = styled.div`
  width: 500px;
  height: 60px;
  padding: 5%;
  


`

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateStyled>
      {children}
    </TodoTemplateStyled>
  );
};

export default TodoTemplate;