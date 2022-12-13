import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoList from './component/TodoList';
import TodoHead from './component/TodoHead';
import TodoCreate from './component/TodoCreate';
import { useState } from 'react';
import dummyTodos from './dummydata';

const App = () => {

  const [todos, setTodos] = useState(dummyTodos);

  return (
  <TodoTemplate> 
    <TodoHead />
    <TodoList todos={todos}/> 
    <TodoCreate/>
  </TodoTemplate> 
  );
};


export default App;
