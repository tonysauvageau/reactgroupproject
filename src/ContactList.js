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
            <div>
                <div className="row grey darken-4 white-text no-margin-bottom">
                    <div className="col s6">Name</div>
                    <div className="col s6">Number</div>
                </div>
                {contacts}
            </div>
        );
    }
}

export default ContactList;