import Backdrop from './components/Backdrop'
import Modal from './components/Modal'
import ToDo from './components/ToDo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo title='Basic React' />
      <ToDo title='Intermediate React' />
      <ToDo title='Advance React' />

      <Modal />
      <Backdrop />
    </div>
  )
}

export default App
