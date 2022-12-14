import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data.json";

function ProductDetail() {
  const current = useParams();
  const founditem = Data.find((element) => element.id === parseInt(current.id));

  return (
    <>
      <div className="main-detail">
        <div className="top-duo">
          <div className="top-duo__media">
            <img src={founditem.src} alt={founditem.name} />
          </div>
          <div className="top-duo__name">
            <div className="top-duo__name__item-name">{founditem.name}</div>
            <div className="top-duo__name__item-price">{`Precio $${founditem.price}`}</div>
            <div className="stock">En stock</div>
            <div className="description">
              <p>{founditem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
