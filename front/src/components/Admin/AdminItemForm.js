import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "../header.css"
const AdminItemForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('image', image);
            // const newItem = { name, image, price };
            await axios.post('http://localhost:5000/api/menu', formData).then(response => {
                console.log(response.data);
                setName('');
                setImage('');
                setPrice(null);

                window.location = "/adminItemList"

            }).catch(error => {
                console.log(error.response.data);

            });
            // Optionally: handle success or reset form fields
            setName('');
            setImage('');
            setPrice('');
        } catch (error) {
            // Handle error
            console.error('Error creating item:', error);
        }
    };

    return (
        <div>
            <SideBar/>
            <Navbar/>
            <div id="addItem">
                <form onSubmit={handleSubmit}>
                    {/*<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />*/}
                    {/*<input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />*/}
                    {/*<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />*/}
                    {/*<button type="submit">Add Item</button>*/}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nom de produit
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Entrer Le Nom de produit"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prix" className="form-label">
                            Prix
                        </label>
                        <input
                            className="form-control"
                            id="prix"
                            placeholder="Enter content"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="photo" className="form-label">
                            Image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="photo"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>

    );
};

export default AdminItemForm;