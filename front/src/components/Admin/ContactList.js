import React, {useEffect, useState} from 'react';
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import axios from "axios";

function ContactList(props) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/contact');
            setContacts(response.data); // Assuming response.data contains the list of items
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };
    return (
        <div>
            <SideBar/>
            <Navbar/>
            <div id="listContact">
                <h1>Contact List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td>{contact.nomPrenom}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactList;