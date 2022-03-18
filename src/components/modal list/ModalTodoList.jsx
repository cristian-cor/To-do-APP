import React from 'react'
import '../../styles/Modal.css'
const ModalTodoList = ({ children, isOpenList, closeModalList }) => {
  return (
    <article className={`modalList ${isOpenList && "is-open"}`}>
      <div className='modalList-container'>
        <button type='button'  onClick={closeModalList} className='buttonCloseList'> Close</button>
        {children}
      </div>
    </article>
  )
}

export default ModalTodoList