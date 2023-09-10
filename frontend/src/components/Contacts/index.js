import React from "react";
import ContactItem from "../ContactItem";
import "./index.css";

function Contacts({contacts, onClickDelete}) {

    return (
        <ul>
            {contacts.length === 0 && (
                <p className="no-contacts">No contacts</p>
            )}
            {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onClickDelete={onClickDelete} />
            ))}
        </ul>
    )
}

export default Contacts;
