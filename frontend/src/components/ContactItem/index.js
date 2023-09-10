import React from "react";
import "./index.css"

function ContactItem({id, name, number, onClickDelete}) {
    return (
        <li className="contact-list-item">
            <div className="contact-list-logo">{name[0].toUpperCase()}</div>
            <div className="contact-list-details">
                <div>
                    <h1>{name}</h1>
                    <p>Ph: {number}</p>
                </div>
                <button className="delete-button" onClick={() => onClickDelete(id)}>x</button>
            </div>
        </li>
    )
}

export default ContactItem;
