// propertys
import { useState } from "react";

// components
import Menu from "./components/menu/Menu";
import ModalsTodoCompleted from "./components/modal completed/ModalsTodoCompleted";
import ModalsTodoList from "./components/modal list/ModalsTodoList";

// styles
import './styles/App.css'

// images
import logoImg from './images/logo-3.svg'

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);


  return (
    <div className="app text-center">
      <img className="img" src={logoImg} alt='Logo' />
      <div className="container ">
        <Menu
          input={input}
          setInput={setInput}
          task={task}
          setTask={setTask}
        />
      </div>
      <div className="modales">
        <ModalsTodoList
          task={task}
          setTask={setTask}
        />
        <ModalsTodoCompleted
          task={task}
          setTask={setTask} />
       
      </div>
    </div>

  );
}

export default App;
