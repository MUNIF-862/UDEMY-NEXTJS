import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

function ToDo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler() {
    console.log(props.title)
    setModalIsOpen(true)
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
    </div>
  )
}

export default ToDo
