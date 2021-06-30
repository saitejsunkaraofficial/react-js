import React from 'react';
import ShowContacts from './ShowContacts';

const ContactList = () => {
    const contacts = [
        {
            "name":"Sai Tej",
            "email":"saitej@gmail.com",
            id:1
        },
        {
            "name":"Sai Chand",
            "email":"saichand@gmail.com",
            id:2
        }
    ];
    return (
        <div style={{marginTop:'20px'}}>
            <ShowContacts contacts={contacts} />
        </div>
    )
};

export default ContactList
