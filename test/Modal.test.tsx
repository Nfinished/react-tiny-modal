import React from 'react'

import { render, fireEvent, screen, cleanup, waitForElementToBeRemoved } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Modal, ModalProps } from '../src'

type WrapperProps = Partial<ModalProps>
const Wrapper: React.FC<WrapperProps> = overrides => {
  const [showModal, setShowModal] = React.useState(true)

  const props = {
    isOpen: showModal,
    onClose: () => setShowModal(false),
    ...overrides,
  }

  return (
    <div data-testid="container">
      <Modal data-testid="modal" {...props}>
        <button onClick={() => setShowModal(false)} data-testid="closeButton">
          click me to close!
        </button>
      </Modal>
    </div>
  )
}

afterEach(cleanup)

describe('Modal', () => {
  describe('Mounting', () => {
    it('should be in the dom', () => {
      render(<Wrapper />)

      expect(screen.getByTestId('modal')).toBeInTheDocument()
    })
  })

  describe('Unmounting', () => {
    it('Unmounts on close', () => {
      render(<Wrapper />)
      waitForElementToBeRemoved(screen.queryByTestId('modal'))

      fireEvent.click(screen.getByTestId('closeButton'))
    })
  })
})
