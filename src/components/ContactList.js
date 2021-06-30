import React, {useState} from 'react';
import ShowContacts from './ShowContacts';

const ContactList = () => {
    const [contacts, setcontacts] = useState([]);
    return (
        <div style={{marginTop:'20px'}}>
            <ShowContacts contacts={contacts} />
        </div>
    )
};

export default ContactList
