import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

function ToDo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function deleteHandler() {
    console.log(props.title)
    setModalIsOpen(true)
  }

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop />}
      {modalIsOpen && <Modal />}
    </div>
  )
}

export default ToDo
