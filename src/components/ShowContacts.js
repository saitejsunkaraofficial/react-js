import React from 'react'

const ShowContacts = (props) => {
    const showList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <i className="trash alternate outline icon" style={{color:'red',marginTop:'6px', marginBottom:'18px'}}></i>
                </div>
            </div>
        );
    });
    return (
        <div className="ui celled list">
            {showList}
        </div>
    )
}

export default ShowContacts
