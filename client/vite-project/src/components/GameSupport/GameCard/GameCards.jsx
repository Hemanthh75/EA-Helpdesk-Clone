import React, { useEffect, useState } from "react";
import "./gamecards.css";
import FeaturedProducts from "./FeaturedProducts";
import AllProducts from "./AllProducts";

const GameCards = ({ seeMoreCount }) => {
  //logic for filtering the non-featured items..
  const nonFeaturedProducts = AllProducts.filter((product) => {
    return !FeaturedProducts.some((featured) => featured.name === product.name);
  });

  const products = [...FeaturedProducts, ...nonFeaturedProducts];
  //console.log(products);

  const [topProducts, setTopProducts] = useState(products.slice(0, 15));

  //Useeffect to render seemore products
  useEffect(() => {
    setTopProducts(products.slice(0, 15 + seeMoreCount * 15));
  }, [seeMoreCount]);
  console.log(seeMoreCount);

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
