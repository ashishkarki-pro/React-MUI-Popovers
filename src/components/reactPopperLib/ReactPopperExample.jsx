import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { stringify } from 'flatted'

const ReactPopperExample = () => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles, attributes, state } = usePopper(
    referenceElement,
    popperElement,
    {
      modifiers: [
        { name: 'arrow', enabled: false, options: { element: arrowElement } },
      ],
    },
  )

  console.log(`state is ${stringify(state)}`)
  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element.
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  )
}

export default ReactPopperExample
