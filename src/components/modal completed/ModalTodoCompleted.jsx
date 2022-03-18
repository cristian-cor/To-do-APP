import React from 'react'
import '../../styles/Modal.css'
const ModalTodoCompleted = ({ children,isOpenCompleted,closeModalCompleted  }) => {
  return (
    <article className={`modalList ${isOpenCompleted && "is-open"}`}>
    <div className='modalList-container'>
    <button type='button' onClick={closeModalCompleted} className='buttonCloseCompleted'> Close </button>
      {children}
    </div>
  </article>
  )
}

export default ModalTodoCompleted