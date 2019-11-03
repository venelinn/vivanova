import React from "react"

import "./Hamburger.scss"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <div className="hamburger ">
        <div className="hamburger-wrapper">
          <div className="hbutton">
            <button className="button-hamburger">
              <div className="background-hamburger background-is-white "></div>
              <div className="background-hamburger white background-is-white inactive"></div>
              <div className="icon-hamburger background-is-white false">
                <div className="line-center"></div>
              </div>
              <div className="icon-close background-is-white "></div>
            </button>
          </div>
        </div>
        <button className="click-layer"></button>
      </div>
    )
  }
}

export default Menu
