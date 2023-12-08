import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import {useParams} from "react-router-dom";

const AdminUpdateItem = ({ itemId }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const { id } = useParams(); // Get the item ID from the URL params
    const [errors, setErrors] = useState({});
    // const [item, setItem] = useState({});
    useEffect(() => {
        // Fetch the specific item data based on ID
        console.log(id)
        const fetchItem = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/menu/${id}`); // Replace with your API endpoint
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name); // Update state with the fetched item data
                    setPrice(data.price); // Update state with the fetched item data
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [id]);
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            // Validate form fields
            const newErrors = {};

            if (!name) {
                newErrors.name = 'Name is required';
            } else newErrors.name= null

            if (!price) {
                newErrors.price = 'Price is required';
            } else if (price<=0) {
                newErrors.price = 'Prix Doit etre positif';
            } else if (isNaN(price)) {
                newErrors.price = 'Price must be a number';
            }
            else newErrors.price = null

            // Handle image validation if needed

            if (!errors.name && !errors.price) {
                console.log("no errors!")
                // Proceed with the form submission/update logic
                // For example, make a fetch request to update the item
                const response = await axios.put(`http://localhost:5000/api/menu/put/${id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then(data=>{
                    console.log(data.data)
                    window.location = "/adminItemList"
                });
            } else {
                console.log(errors)
                setErrors(newErrors);
            }


            // console.log(response.data);
            // Handle success, redirect, or show a success message
        } catch (error) {
            console.error('Error updating item:', error);
            // Handle error, show an error message
        }
    };

    return (
        <div>
            <SideBar/>
            <Navbar/>
            <div className="container col-md-8" id="updateItem">
                <h2 className="mb-4">Update Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input type="number" className="form-control" id="price" value={price}
                               onChange={(e) => setPrice(e.target.value)}/>
                        {errors.price && <div className="text-danger">{errors.price}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input type="file" className="form-control" id="image" accept="image/*"
                               onChange={handleImageChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default AdminUpdateItem;
