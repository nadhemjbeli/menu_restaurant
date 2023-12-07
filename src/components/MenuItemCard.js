import React from 'react';

const MenuItemCard = ({ item }) => {
    const { title, price, image } = item;
    return (
        <div className="card">
            <img src={require(`../images/${image}`)} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price} DT</p>
                {/* Add additional details if necessary */}
            </div>
        </div>
    );
};

export default MenuItemCard;
