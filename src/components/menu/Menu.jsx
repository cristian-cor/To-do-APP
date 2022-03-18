// depensences
import {v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styles
import '../../styles/Menu.css'


const Menu = ({input, setInput, task, setTask}) => {

  const handlerChange = (event) => {
    setInput(event.target.value)
  }
  const handlerSubmit = (event) => {
    toast.success('🦄  congrats added to to do list', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    event.preventDefault();
    setTask([...task, {id: uuidv4(), tarea: input, completed: false}]);
    setInput('')
  }

  return (
    <div className='menuContainer'>
      <div className='menuContainer-create'>
        <h2>Create new task</h2>
        <form onSubmit={handlerSubmit}>
          <input
            className='inputSearch'
            type='text'
            name='tarea'
            placeholder='Create new task'
            onChange={handlerChange}
            value={input}
            required
            />
          <button
            className='buttonAdd'
            type='submit'
          >
            Add
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Menu