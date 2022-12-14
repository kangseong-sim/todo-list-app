import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './reducer.js';

const App = () => {

  
  return (
  <TodoProvider>
    <TodoTemplate> 
      <TodoHead />
      <TodoList /> 
      <TodoCreate/>
    </TodoTemplate> 
  </TodoProvider>  
  );
};


export default App;
