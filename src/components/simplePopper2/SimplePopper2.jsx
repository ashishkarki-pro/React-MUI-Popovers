import { makeStyles, Popover } from '@material-ui/core'
import React, { useState } from 'react'
import { PopoverContent } from '../popoverContent/PopoverContent'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[ 1 ],
    margin: '0.005rem auto',

    // '&:after': {
    //   content: '""',
    //   position: 'absolute',
    //   right: '45%',
    //   top: '-1px',
    //   // backgroundColor: 'black',
    //   borderTop: 'none',
    //   borderRight: '15px solid transparent',
    //   borderLeft: '15px solid transparent',
    //   borderBottom: `15px solid green`,
    // }
  }
}))

export default function SimplePopper2() {
  const classes = useStyles()
  const [ anchorEl, setAnchorEl ] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleClose = (_) => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  return (
    <div className={ classes.SimplePopper }>
      <button type="button" onClick={ handleClick } className="">
        Toggle Popper with MUI Popper
      </button>

      <Popover
        id={ id }
        open={ open }
        onClose={ handleClose }
        anchorEl={ anchorEl }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'center',
        } }
        transformOrigin={ {
          vertical: 'top',
          horizontal: 'center',
        } }
        classes={ { paper: classes.paper } }
      >
        <PopoverContent />
      </Popover>
    </div>
  )
}
