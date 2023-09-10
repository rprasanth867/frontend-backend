import React, {useState} from "react";
import axios from 'axios';
import "./index.css"

function AddContact({fetchData}) {
    const [newContact, setNewContact] = useState({});

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
            setNewContact({});
            alert('Success');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="add-contact-main">
            <h1 className="add-contact-header">Add Contact</h1>
            <div className="input-wrapper">
                <label className="name-label">Name</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <label>Number</label>
                <input type="number" name="number" onChange={handleChange} />
            </div>
            <button className="add-contact-btn" onClick={handleClick}>Add Contact</button>
        </div>
    )
}

export default AddContact;
