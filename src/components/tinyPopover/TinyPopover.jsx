import { useState } from 'react'
import { Popover } from 'react-tiny-popover'

export default function TinyPopover() {
    const [ isPopoverOpen, setIsPopoverOpen ] = useState(false)
    const content = '<div>Hi! I\'m popover content.</div>'

    return <Popover
        isOpen={ isPopoverOpen }
        content={ content }
    >
        <button onClick={ () => setIsPopoverOpen(!isPopoverOpen) }>
            Click me!
        </button>
    </Popover>
}