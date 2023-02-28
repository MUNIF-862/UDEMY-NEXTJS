import React from 'react'

function Modal(props) {
  function onConfirHandler() {
    props.onConfirm()
  }
  function onCancelHandler() {
    props.onCancel()
  }
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={onCancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={props.onConfirm}>
        Confirm
      </button>
    </div>
  )
}

export default Modal
