import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuItems from '../components/MenuItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    console.log("hi")
    return (
        <div className="wrap">
            <Header />
            <div className="container mt-4">
                <div id="title">
                    <img src={require("../images/left-pepper.PNG")} alt=""/>
                    <span className="notre-menu">Notre Menu</span>
                    <img src={require("../images/right-pepper.PNG")} alt=""/>
                    <hr className="horizontal-line"/>
                </div>
                <MenuItems />
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Home;
