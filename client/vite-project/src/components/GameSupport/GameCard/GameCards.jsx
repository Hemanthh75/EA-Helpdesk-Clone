import React, { useState } from "react";
import "./gamecards.css";
import FeaturedProducts from "./FeaturedProducts";
import AllProducts from "./AllProducts";

const GameCards = () => {
  const [topProducts, setTopProducts] = useState(FeaturedProducts.slice(0, 15));

  //logic for filtering the non-featured items..
  const nonFeaturedProducts = AllProducts.filter((product) => {
    return !FeaturedProducts.some((featured) => featured.name === product.name);
  });

  console.log(nonFeaturedProducts);

  return (
    <div className="grid-container">
      {topProducts &&
        topProducts.map((product) => {
          return (
            <div className="grid-item">
              <img
                className="grid-item-image"
                src={`https://help.ea.com/eahelp/images/box-art/x2/${product.urlName}.jpg`}
              />
              <div className="grid-item-text-container">
                <p className="grid-item-text">{product.name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GameCards;
