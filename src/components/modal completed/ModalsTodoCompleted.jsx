import React from 'react'
import { useModal } from '../../hooks/useModal'
import '../../styles/Modals.css'
import ModalTodoCompleted from './ModalTodoCompleted'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalsTodoList = ({ task, setTask }) => {

    const [isOpenCompleted, openModalCompleted, closeModalCompleted] = useModal()
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

    return (
        <div className='container-completed'>
            <div className='container-completed-info'>
                <h2>Task completed</h2>
                <button type='button' className='buttonComplted' onClick={openModalCompleted}  >Open</button>
                <ModalTodoCompleted
                    isOpenCompleted={isOpenCompleted}
                    closeModalCompleted={closeModalCompleted}
                >
                    <h2>Task completed</h2>
                    {

                        (task.map((item, index) =>
                            item.completed ? <ul key={index}>
                                <li className='li-completed'>
                                    <div className='container_list'>
                                        <div className='container_list-1'>
                                            <p className='container_list-1-tarea'>{item.tarea}</p>
                                        </div>
                                        <div className='container_list-btn'>
                                            <button className='btn-eliminar' onClick={() => handlerDelete(item.id)} >
                                                <i className="fa-solid fa-trash-can i-eliminar"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul> : null
                        ))
                    }
                </ModalTodoCompleted>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ModalsTodoList