import React, { useState } from 'react'

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const ReactstrapPopover = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen)
  }

  return (
    <div>
      <Button id="mypopover" type="button">
        Click to Launch Popover
      </Button>

      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="mypopover"
        toggle={togglePopover}
      >
        <PopoverHeader>This is popover title</PopoverHeader>
        <PopoverBody>This is simple popover content</PopoverBody>
      </Popover>
    </div>
  )
}

export default ReactstrapPopover
