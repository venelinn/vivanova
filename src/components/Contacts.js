import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
//import 'whatwg-fetch'

import "./Contacts.scss"

const Form = styled.form`
  &::before {
    content: '';
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Modal = styled.div`
  background: #f1f1f1;
  color: #000;
  padding: 2em;
  border-radius: 2px;
  transition: 0.2s all;
  text-align: center;
  margin-top: 2rem;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="contact-form">
        <Form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot"
          overlay={this.state.showModal}
          onClick={this.closeModal}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>
          <Fade bottom>
          <p className="form-field">
            <label>
              <span>Name</span>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                name="name"
                type="text"
                placeholder="Name" minLength="2" />
            </label>
          </p>
          <p className="form-field">
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                placeholder="Email"  />
              </label>
          </p>
          <p className="form-field">
            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
                rows="5"
                cols="5"></textarea>
            </label>
          </p>
          <p className="form-field">
            <button className="submitform" type="submit">Send</button>
          </p>
          </Fade>
          <Modal visible={this.state.showModal}>
            <p>
              Thank you for reaching out. I will get back to you as soon as
              possible.
            </p>
          </Modal>
        </Form>
      </div>
    )
  }
}

export default Contacts
