import React from 'react';
import Contacts from './Contacts';


class ContactList extends React.Component {
    render() {
        let contacts = this.props.contacts.map((contact, i) =>{
            return (
            <Contacts key={i} {...contact}/>
            )
        });
        return(
            <ul>
              {contacts}
            </ul>
        );
    }
}

export default ContactList;