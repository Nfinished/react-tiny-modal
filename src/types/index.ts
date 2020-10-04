export interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean
  onClose?: React.MouseEventHandler
  portalElement?: Element
}
