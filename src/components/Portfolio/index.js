import React from 'react';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import './portfolio.scss';
// https://416serg.me/building-a-custom-accessible-image-lightbox-in-gatsbyjs/
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLightbox: false,
      selectedImage: null,
      moreData: null
    };
  }

  render() {
    const items = this.props.folio.projects;
    const { selectedImage, showLightbox, moreData } = this.state;
    return (
      <>
        <div className='portfolio-content'>
          <Fade cascade bottom delay={600}>
          <div className='stack'>
            {items.map((item, index) => (
              <div className='bgrid folio-item' key={index}>
                <div
                  key={index}
                  className='folio-item__link'
                  type='button'
                  onClick={() =>
                    this.setState({
                      showLightbox: true,
                      selectedImage: item.image,
                      moreData: {
                        name: item.name,
                        url: item.url,
                        description: item.description,
                        types: item.types
                      }
                    })
                  }
                >
                  <Img fluid={item.image.fluid} />
                  <span className='folio-item-table'>
                    <span className='folio-item-cell'>
                      <h3 className='folio-title'>{item.name}</h3>
                      <span className='folio-types'>{item.types}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          </Fade>
        </div>
        {showLightbox && (
          <Dialog
            className='modal'
            onDismiss={() => this.setState({ showLightbox: false })}
          >
            <div className='modal__header'>
              <Img fluid={selectedImage.fluid} />
            </div>
            <div className='modal__content'>
              <div className='modal__content__name'>
                <a
                  href={moreData.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Visit'
                >
                </a>
              </div>
              <p>{moreData.description}</p>
              <div className='modal__categories'>{moreData.types}</div>
            </div>
            <div className='modal__footer'>
              {moreData.url ? (
              <a href={moreData.url} target='_blank' rel='noopener noreferrer'>Visit</a>
              ) : ''}
              <button
                type='button'
                onClick={() => this.setState({ showLightbox: false })}
              >
                Close
              </button>
            </div>
          </Dialog>
        )}
      </>
    );
  }
}


export default Portfolio;
