import React, { Component } from 'react'

import AddContact from '../components/forms/AddContact'
const uuidv4 = require('uuid/v4')

class AddContactContainer extends Component {
  state = {
    id: uuidv4(),
    firstName: '',
    lastName: ''
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { id, firstName, lastName } = this.state
    return (
      <AddContact
        id={id}
        firstName={firstName}
        lastName={lastName}
        onInputChange={this.handleInputChange}
      />
    )
  }
}

export default AddContactContainer
