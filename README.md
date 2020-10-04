# react-tiny-modal

A super tiny, fully typed, zero dependency modal.

[![npm version](https://img.shields.io/npm/v/react-tiny-modal?style=flat-square)](https://www.npmjs.com/package/react-tiny-modal)
[![npm license](https://img.shields.io/npm/l/react-tiny-modal?style=flat-square)](https://github.com/Nfinished/react-tiny-modal/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-tiny-modal?style=flat-square)](https://bundlephobia.com/result?p=react-tiny-modal)
![requires react >=16.8](https://img.shields.io/npm/dependency-version/react-tiny-modal/peer/react?style=flat-square)
[![dependencies](https://img.shields.io/david/nfinished/react-tiny-modal?style=flat-square)](https://david-dm.org/nfinished/react-tiny-modal)

[![maintainability](https://img.shields.io/codeclimate/maintainability/Nfinished/react-tiny-modal?style=flat-square)](https://codeclimate.com/github/Nfinished/react-tiny-modal)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/Nfinished/react-tiny-modal?style=flat-square)](https://codeclimate.com/github/Nfinished/react-tiny-modal)

React Tiny Modal has absolutely zero opinions about style or content, bring your own! It's just here to deal with the silly portaling, animations, and clicking outside so you don't have to.

## API:

**isOpen** : `boolean`
<br/>Guess.

---

**className** : `string`
<br/>ClassNames to be applied to the modal background. Change the color, add a blur, etc.

---

**portalElement** : `Element`
<br/>An element to portal into to attach the modal. _Optional._

---

**onClose** : `React.MouseEventHandler<HTMLDivElement>`
<br/>Fires when the modal background is clicked. _Optional._

---


## Usage:

```tsx
import { Modal } from 'react-tiny-modal'

const [showModal, setShowModal] = React.useState(false)

...

<button onClick={() => setShowModal(true)}>open the modal!</button>

<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <button onClick={() => setShowModal(false)}>close the modal!</button>
</Modal>
```
