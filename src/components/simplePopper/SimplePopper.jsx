import React, { useState } from 'react'
import { Popover } from '@material-ui/core'

import { PopoverContent } from '../popoverContent/PopoverContent'
import classes from './SimplePopper.module.scss'

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleClose = (_) => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div className={classes.SimplePopper}>
      <button type="button" onClick={handleClick} className="">
        Toggle Popper with MUI Popper
      </button>

      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={classes.popover}
      >
        <PopoverContent />
      </Popover>
    </div>
  )
}
