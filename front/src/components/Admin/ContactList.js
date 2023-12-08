import React, {useEffect, useState} from 'react';
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import axios from "axios";
import {Link} from "react-router-dom";

function ContactList(props) {
    const [contacts, setContacts] = useState([]);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const confirmDeleteContact = (contactId) => {
        setConfirmDelete(contactId);
    };

    const cancelDelete = () => {
        setConfirmDelete(null);
    };
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/contact');
            setContacts(response.data); // Assuming response.data contains the list of contacts
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };
    const handleDelete = async (contactId) => {
        try {
            await axios.delete(`http://localhost:5000/api/contact/${contactId}`);
            // If successful, update the contacts state to reflect the change
            setContacts(contacts.filter(contact => contact._id !== contactId));
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };
    const handleConfirmDelete = () => {
        if (confirmDelete) {
            handleDelete(confirmDelete);
            setConfirmDelete(null);
        }
    };
    return (
        <div>
            <SideBar/>
            <Navbar/>
            <div id="listContact">
                <h2>Contact List - Admin Panel</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact._id}>
                            <td>{contact.nomPrenom}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            <td>
                                <button onClick={() => confirmDeleteContact(contact._id)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {confirmDelete && (
                <div className="modal fade show" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" onClick={cancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this contact?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {confirmDelete && <div className="modal-backdrop fade show"></div>}
        </div>
    );
}

export default ContactList;