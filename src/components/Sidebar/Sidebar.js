import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer'
import './Sidebar.css'

const Sidebar = (props) => {

  const {isOpen} = props

  return (
    <Drawer
      anchor="left"
      open={isOpen}
    >
      <div
        className="root"
      >
        Sidebar
      </div>
    </Drawer>
  )
}

export default Sidebar
