import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import MenuItemCard from './MenuItemCard';
import axios from "axios";

const MenuItems = () => {
    // State to hold menu items fetched from API/JSON
    const [menuItems, setMenuItems] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/menu')
            .then((response) => {
                console.log(response.data)
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Adjust the scroll position when the button appears
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Simulated fetch operation (Replace with actual API call)
    useEffect(() => {
        // Simulated menu data
        const mockMenuData = [
            { id: 1, name: 'Uno Fajitas', price: '10', image: 'image1.png' },
            { id: 2, name: 'Duo Fajitas', price: '12', image: 'image2.png' },
            // Add more items as needed
        ];
        setMenuItems(mockMenuData);
    }, []);

    return (
        <div className="row" id="targetElement">
            <h2 className="fagitas">Nos Fagitas</h2>
            {items.map((item) => (
                <div key={item.id} className="col-md-4 mb-3">
                    <MenuItemCard item={item} />
                </div>
            ))}
            <div className="scroll-btn">
                {isVisible && (
                    <button onClick={scrollToTop} className="btn btn-up">
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "white"}}/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default MenuItems;
