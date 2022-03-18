import React from 'react'
import { useModal } from '../../hooks/useModal'
import '../../styles/Modals.css'
import ModalTodoList from './ModalTodoList'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalsTodoList = ({ task, setTask, taskCompleted, setTaskCompleted }) => {

  const [isOpenList, openModalList, closeModalList] = useModal()

  const handlerDelete = (id) => {
    toast.error(' Task deleted successfully', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const filtro = task.filter(item => item.id !== id)
    setTask(filtro)
  }
  const handlerComplete = (id, index) => {
    toast.success('🦄 congratulations, it has been added to completed tasks!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const completado = task.map((item) => item.id === id ? { ...item, completed: !item.completed } : item)
    setTask(completado)

  }
  return (
    <div className='container-list'>
      <div className='container-list-info'>
        <h2>Task list</h2>
        <button type='button' className='buttonList' onClick={openModalList}  >Open</button>
        <ModalTodoList
          isOpenList={isOpenList}
          closeModalList={closeModalList}
        >
          <h2>Task list</h2>
          {
            (task.map((item, index) => (
              item.completed ? null :
                <ul key={index}>
                  <li className='li-list'>
                    <div className='container_list'>
                      <div className='container_list-1'>
                        {item.completed ? null : (<p className='container_list-1-tarea'>{item.tarea}</p>)}
                      </div>
                      <div className='container_list-btn'>
                        <button className='btn-eliminar' onClick={() => handlerDelete(item.id)} >
                          <i className="fa-solid fa-trash-can i-eliminar"></i>
                        </button>
                        <button className='btn-completado' onClick={() => handlerComplete(item.id)} >
                          <i className="fa-solid fa-circle-check i-completado"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>)
            ))
          }
        </ModalTodoList>
      </div>
      <ToastContainer />
    </div>
  )
}

export default ModalsTodoList