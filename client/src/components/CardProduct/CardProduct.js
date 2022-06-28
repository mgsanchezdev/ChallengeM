/* eslint-disable prefer-template */
/* eslint-disable react/jsx-curly-brace-presence */
import { Link } from 'react-router-dom';
import './CardProduct.css';

import Price from '../Price/Price';

export default function CardProduct({ properties }) {
  return (
    <div className="containerCardProduct">
      <div className="">
        <img
          aria-hidden
          src={properties.picture}
          width="180"
          height="auto"
          alt={properties.title + 'image'}
        />
      </div>
      <div className="">
        <Price
          price={properties.price.amount}
          cents={'00'}
          currency={properties.price.currency}
          shipping={properties.free_shipping}
        />
        <Link to={`/items/${properties.id}`} className="linkProduct">
          <h2 className="titleProduct">{properties.title}</h2>
        </Link>
      </div>
    </div>
  );
}
