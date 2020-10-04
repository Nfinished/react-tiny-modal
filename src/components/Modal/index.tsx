import React from 'react'
import ReactDOM from 'react-dom'
import { useOnClickOutside } from '../../hooks'

import { ModalProps } from '../../types'
import { combineClassNames } from '../../utils'

import './styles.css'

export const Modal: React.FC<ModalProps> = ({
  className,
  isOpen,
  onClose = () => {},
  portalElement = document.body,
  onAnimationEnd,
  children,
  ...rest
}) => {
  const [shouldRender, setShouldRender] = React.useState(isOpen)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (isOpen) setShouldRender(true)
  }, [isOpen])

  useOnClickOutside(ref, onClose)

  const handleAnimationEnd: React.AnimationEventHandler<HTMLDivElement> = e => {
    onAnimationEnd && onAnimationEnd(e)
    if (!isOpen) setShouldRender(false)
  }

  if (!shouldRender) return null
  return ReactDOM.createPortal(
    <div
      className={combineClassNames('_rtm-container', isOpen && '_rtm-container--open', className)}
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      <div ref={ref}>{children}</div>
    </div>,
    portalElement,
  )
}
