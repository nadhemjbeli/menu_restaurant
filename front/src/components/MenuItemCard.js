import React from 'react';

const MenuItemCard = ({ item }) => {
    const { name, price, image } = item;
    return (
        <div className="card">
            {/*<img src={require(`../images/${image}`)} className="card-img-top" alt={name} />*/}
            <img src={`http://localhost:5000/${(image)}`} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} DT</p>
                {/* Add additional details if necessary */}
            </div>
        </div>
    );
};

export default MenuItemCard;
