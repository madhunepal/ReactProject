import logo from './logo.svg';
import './App.css';
import Header from './MyComp/Header';
import {Footer} from './MyComp/Footer';
import {Todos} from './MyComp/Todos';
import  {Todo} from "./MyComp/Todo";
function App() {
  return (
    <>
    <Header/>
    <Todos/>
    <Todo/>
    <Footer/>
    </>
    
  );
}

export default App;
