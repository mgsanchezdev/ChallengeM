import React from 'react';
import { DESCRIPTION_ARTICULO, BTN_COMPRAR } from '../consts/consts';
import './carDetailsProduct.css';

function CardDetailsProduct({ detailsProducts }) {
  return (
    <div className="containerAllDetails">
      <div className="containerDetailsProduct">
        <div className="containerImgPrice">
          <img
            src={detailsProducts?.picture}
            alt={detailsProducts?.title}
            className="imgDetailsProduct"
          />
          <div className="containerPriceTitle">
            <p className="titleDetailsProduct">{detailsProducts?.title}</p>
            <p className="priceProduct">
              {detailsProducts?.price.currency} {detailsProducts?.price.amount}
            </p>
            <button className="btnCompra" type="button">
              {BTN_COMPRAR}
            </button>
          </div>
        </div>
      </div>
      <div className="containerAllDescription">
        <h2 className="titleDescriptionDetailsProduct">
          {DESCRIPTION_ARTICULO}
        </h2>
        <p className="descriptionDetailsProduct">
          {detailsProducts?.description}
        </p>
      </div>
    </div>
  );
}

export default CardDetailsProduct;
