import React from 'react';
import Stars from '@material-ui/icons/Stars';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';



function CheckoutProduct({ id, title, image, price, rating }) {
const [{}, dispatch] = useStateValue();

console.log(id, title, image, price, rating);
  const removeFromBasket = () => {

    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  }

    return (
        <div className="checkoutProduct">
          <img className="checkoutProduct__image" src={image} alt=""/>
          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div style={{display: 'flex'}} className="checkoutProduct__rating">
              {
                Array(rating)
                .fill()
                .map((_) => (
                  <p><Stars /></p>
                ))
              }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
          </div>
        </div>
    );
};

export default CheckoutProduct;
