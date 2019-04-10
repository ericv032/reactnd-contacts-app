import React, { Component } from 'react'

class ContactList extends Component {

  render() {
    //console.log('Props', this.props)
    return(

      <div>
        <ol className='class-list'>
          {this.props.contacts.map((contact) => (
              <li key={contact.id} className='contact-list-item'>
             
             <div className='contact-avatar' 
             
             style={{
               backgroundImage:`URL(${contact.avatarURL})`
             }}>
             </div>

             <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
             </div>
             <button className="contact-remove">Remove</button>
              
              </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ContactList