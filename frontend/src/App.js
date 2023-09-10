import { useEffect, useState } from "react";
import axios from "axios";

import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import './App.css';


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() =>  {
    fetchData();
  }, [])

  const fetchData = async () => {
      try {
          const res = await axios.get('http://localhost:5000/contacts');
          setContacts(res.data.data);
      } catch (err) {
          console.error(err);
      }
  };

  const handleClickDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contact/${id}`);
      fetchData();
      alert('Deleted');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="main-container">
      <AddContact fetchData={fetchData} />
      <Contacts contacts={contacts} onClickDelete={handleClickDelete} />
    </div>
  );
}

export default App;
