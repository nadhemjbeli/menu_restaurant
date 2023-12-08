import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Footer(props) {
    const [formValues, setFormValues] = useState({
        nomPrenom: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            });
            // const formData = new FormData();
            // formData.append('title', formValues);
            // formData.append('content', content);
            // formData.append('photo', photo);
            // const response = await axios.post('http://localhost:5000/api/contact/',formValues)
            //     .then((response) => {
            //         console.log(response.data)
            //         // set(response.data);
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
            // console.log(response)

            if (response.ok) {
                console.log('Form submitted successfully!');
                // Reset form after successful submission if needed
                setFormValues({
                    nomPrenom: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        try {
            // Assuming your form submission logic is successful
            // Display a success notification
            toast.success('Votre contact est envoyé avec succés!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000, // Notification will automatically close after 3 seconds
            });
        } catch (error) {
            // Handle errors here
            toast.error('Erreur en contact!!');
        }
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    return (
        <div className="footer">
            <h1 className="contact">Prendre Contact</h1>
            <div className="row">
                <div className="col-md-6 form-area">
                    <div className="col-md-11">
                        <form onSubmit={handleSubmit} id="contactElement">
                            <input
                                type="text"
                                name="nomPrenom"
                                placeholder="Nom et Prénom"
                                className="form-control"
                                value={formValues.nomPrenom}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Adresse Email"
                                className="form-control"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                placeholder="Votre message ici..."
                                className="form-control"
                                value={formValues.message}
                                onChange={handleChange}
                            />
                            <input type="submit" className="btn form-control envoyer" value="Envoyer"/>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 pre-circle">
                    <div className="circle">
                        <img src={require("../images/chilis.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;