import React, { Component } from 'react'
import ListContacts from './ListContacts'
import PropTypes from 'prop-types'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact';



class App extends Component {

    state = {

     contacts: [],
     screen: 'list'

    }

    componentDidMount() {
      ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        })) 
      })
    }

    removeContact = (contact) => {

    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {

        return c.id !== contact.id

      })

    }))
  }

 
  render() {
    return (
      <div>
         
      {this.state.screen === 'list' && <ListContacts
      contacts={this.state.contacts} 
      onDeleteContact={this.removeContact}
      />}
     {this.state.screen === 'create' && <CreateContact />}
      </div>
    
    )
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default App
