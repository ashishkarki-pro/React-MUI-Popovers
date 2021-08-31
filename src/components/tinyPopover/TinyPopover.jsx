import { useRef, useState } from 'react'
import { Popover, ArrowContainer } from 'react-tiny-popover'

export default function TinyPopover() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const clickMeButtonRef = useRef()

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['bottom']}
      padding={0}
      onClickOutside={() => setIsPopoverOpen(false)}
      ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={'antiquewhite'}
          arrowSize={10}
          arrowStyle={{ opacity: 0.9 }}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            style={{ backgroundColor: 'antiquewhite', opacity: 0.9 }}
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            Hi! I'm popover content. Here's my position: {position}.
            <br /> childRect:{JSON.stringify(childRect)},
            <br /> popoverRect:{JSON.stringify(popoverRect)}
            <br />{' '}
            <button onClick={() => setIsPopoverOpen(false)}>
              close popover
            </button>
          </div>
        </ArrowContainer>
      )}
    >
      <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        Click me!
      </button>
    </Popover>
  )
}
