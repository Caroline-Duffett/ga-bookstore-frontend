import React from 'react';

const Item = props => {
  return (
    <div className="shopping-cart_item">
      <img className="cart-img" src={props.cover_art} alt={`${props.title} book`} />
      <div>
        <h3>{props.title}</h3>
        <h3>${props.price}</h3>
        <button className="remove-item-btn" onClick={() => props.removeItem(props.id)}>
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Item;