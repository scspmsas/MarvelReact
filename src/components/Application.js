import React from 'react'
import NavMenu from './SideBar'

export default class Application extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <NavMenu />
        {this.props.children}
      </div>
    )
  }
}