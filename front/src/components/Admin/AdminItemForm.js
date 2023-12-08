import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "../header.css"
const AdminItemForm = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newErrors = {};
            const formData = new FormData();
            formData.append('name', name);
            formData.append('price', price);
            formData.append('image', image);
            console.log("name")
            console.log(name)
            if (!name) {
                newErrors.name = 'Name is required';
            } else newErrors.name= null
            if (!image) {
                newErrors.image = 'image is required';
            } else newErrors.image= null

            if (price <= 0) {
                newErrors.price = 'Price must be a strictly positive number';
            } else if (isNaN(price)) {
                newErrors.price = 'Price must be a number';
            }
            else newErrors.price = null

            if (!newErrors.name && !newErrors.price && !newErrors.image) {
                console.log("no errors!")
                await axios.post('http://localhost:5000/api/menu', formData).then(response => {
                    console.log(response.data);
                    setName('');
                    setImage('');
                    setPrice(null);

                    window.location = "/adminItemList"

                }).catch(error => {
                    console.log(error.response.data);


                });
            } else {
                console.log(errors)
                setErrors(newErrors);
            }
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
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            placeholder="Entrer Le Nom de produit"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prix" className="form-label">
                            Prix
                        </label>
                        <input
                            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                            id="prix"
                            placeholder="Enter content"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {errors.price && <div className="text-danger">{errors.price}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="photo" className="form-label">
                            Image
                        </label>
                        <input
                            type="file"
                            className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                            id="photo"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        {errors.image && <div className="text-danger">{errors.image}</div>}
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </div>

    );
};

export default AdminItemForm;