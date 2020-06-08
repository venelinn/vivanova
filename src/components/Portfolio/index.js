import React, { Component } from "react"
//import PropTypes from 'prop-types'
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"
import { FacebookShareButton, FacebookIcon } from 'react-share'
import "react-image-lightbox/style.css"

import "./portfolio.scss"

const prevIndex = state => (state.index - 1) % state.images.length
const nextIndex = state =>
  (state.index + state.images.length + 1) % state.images.length

class Portfolio extends Component {
  constructor(props) {
    const items = props.folio.projects
    const fullSize = items.map(item => item.image.fluid.src)
    super(props)

    this.state = {
      index: 0,
      isOpen: false,
      images: fullSize,
      box: items,
    }

    this.renderLightBox = this.renderLightBox.bind(this)
    this.openLightBox = this.openLightBox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
    this.movePrev = this.movePrev.bind(this)
    this.moveNext = this.moveNext.bind(this)
  }

  openLightBox(index) {
    this.setState({
      index: index,
      isOpen: true,
    })
  }

  renderLightBox() {
    const { images } = this.state
    return (
      <Lightbox
        mainSrc={images[this.state.index]}
        nextSrc={images[nextIndex(this.state)]}
        prevSrc={images[prevIndex(this.state)]}
        onCloseRequest={this.closeLightbox}
        onMovePrevRequest={this.movePrev}
        onMoveNextRequest={this.moveNext}
        imageLoadErrorMessage="Impossible de charger cette image"
        nextLabel="Next Image"
        prevLabel="Previous Image"
        zoomInLabel="Zoom in"
        zoomOutLabel="Zoom out"
        closeLabel="Close"
        toolbarButtons={[
          <FacebookShareButton url={images[this.state.index]} className={'socialShareButtons'}>
            <FacebookIcon size={32} round/>
          </FacebookShareButton>
      ]}
      />
    )
  }

  closeLightbox() {
    this.setState({ isOpen: false })
  }

  movePrev() {
    this.setState(prevState => ({
      index: prevIndex(prevState),
    }))
  }

  moveNext() {
    this.setState(prevState => ({
      index: nextIndex(prevState),
    }))
  }

  render() {
    //console.log(this.state.box.map(item => item));
    return (
      <>
        <div className="portfolio">
          <Fade cascade bottom duration={1000} delay={500}>
            <div className="stack">
              {this.state.box.map((thumb, index) => {
                return (
                  <div
                    className="bgrid folio-item"
                    key={index}
                    data-type={thumb.type}
                  >
                    <div
                      className="folio-item__link"
                      type="button"
                      role="button"
                      key={index}
                      tabIndex={0}
                      onClick={() => this.openLightBox(index)}
                      onKeyDown={() => this.openLightBox(index)}
                    >
                      <Img
                        fixed={thumb.image.fixed}
                        width={thumb.image.fixed.width}
                        height={thumb.image.fixed.height}
                      />
                      <span className="folio-item-table">
                        <span className="folio-item-cell">
                          <h3 className="folio-title">{thumb.name}</h3>
                          <span className="folio-types">{thumb.type}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Fade>
        </div>
        {this.state.isOpen && this.renderLightBox()}
      </>
    )
  }
}

export default Portfolio

// Portfolio.propTypes = {
//   images: PropTypes.array.isRequired,
//   thumbs: PropTypes.array.isRequired,
// }
