import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Modal } from '../'

import 'bulma/css/bulma.css'
import './styles.css'

const App = () => {
  const [showModal, setShowModal] = React.useState(true)
  return (
    <>
      <div>I'm behind the modal</div>
      <button className="button" onClick={() => setShowModal(true)}>
        click me
      </button>
      <Modal onClose={() => setShowModal(false)} isOpen={showModal}>
        <p>
          hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!hello!
        </p>
        <button className="button" onClick={() => setShowModal(false)}>
          click me to close!
        </button>
      </Modal>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
