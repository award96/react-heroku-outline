import React from 'react'
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
        className="sidebar-root"
      >
        <div
          className="item"
        >
          query
        </div>
        <div
          className="item"
        >
          data processing
        </div>
        <div
          className="item"
        >
          graph type
        </div>
        <div
          className="item"
        >
          button
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar
