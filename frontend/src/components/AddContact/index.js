import React, {useState} from "react";
import axios from 'axios';
import "./index.css";

const initialData = {
    name: "",
    number: ""
};

function AddContact({fetchData}) {
    const [newContact, setNewContact] = useState(initialData);

    function handleChange(e) {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value
        });
    }

    async function handleClick() {
        try {
            await axios.post('http://localhost:5000/contact', newContact);
            fetchData();
            setNewContact(initialData);
            alert('Added successfully');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="add-contact-main">
            <h1 className="add-contact-header">Add Contact</h1>
            <div className="input-wrapper">
                <label className="name-label">Name</label>
                <input type="text" name="name" value={newContact.name} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <label>Number</label>
                <input type="number" name="number" value={newContact.number} onChange={handleChange} />
            </div>
            <button className="add-contact-btn" onClick={handleClick}>Add Contact</button>
        </div>
    )
}

export default AddContact;
