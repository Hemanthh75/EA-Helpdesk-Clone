import React, { useEffect, useState } from "react";
import "./gamecards.css";
import FeaturedProducts from "./FeaturedProducts";
import AllProducts from "./AllProducts";
import { useNavigate } from "react-router-dom";

const GameCards = ({ parentData, sendDataToParent }) => {
  //logic for filtering the non-featured items..
  const nonFeaturedProducts = AllProducts.filter((product) => {
    return !FeaturedProducts.some((featured) => featured.name === product.name);
  });

  const products = [...FeaturedProducts, ...nonFeaturedProducts];
  //console.log(products);

  const [topProducts, setTopProducts] = useState(products.slice(0, 15));
  const [isSearchItem, setIsSearchItem] = useState(true);
  const navigate = useNavigate();

  //Searching functionality
  const searchItem = () => {
    let searchTerm = parentData.searchTerm.toLowerCase();
    let searchItems = products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm);
    });

    if (searchItems.length === 0) {
      setIsSearchItem(false);
    } else {
      setTopProducts(searchItems.slice(0, 15 + parentData.seeMoreCount * 15));
      setIsSearchItem(true);
    }
  };

  //Recommended products
  const recommendedProducts = () => {
    const recommended = [...products];
    let searchTerm = parentData.searchTerm.toLowerCase();
    if (searchTerm.trim() === "") {
      setTopProducts(recommended.slice(0, 15 + parentData.seeMoreCount * 15));
    }
  };
  //Filtering A to Z

  const sortAtoZ = () => {
    const sortedArray = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    let searchTerm = parentData.searchTerm.toLowerCase();
    if (searchTerm.trim() === "") {
      setTopProducts(sortedArray.slice(0, 15 + parentData.seeMoreCount * 15));
    }
  };

  //Filtering Z to A
  const sortZtoA = () => {
    const sortedArray = [...products].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    let searchTerm = parentData.searchTerm.toLowerCase();

    if (searchTerm.trim() === "") {
      setTopProducts(sortedArray.slice(0, 15 + parentData.seeMoreCount * 15));
    }
  };

  //Filtering based on newest release
  const sortNewest = () => {
    const sortedArray = [...products].sort((a, b) => {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });

    setTopProducts(sortedArray.slice(0, 15 + parentData.seeMoreCount * 15));
  };
  //Filtering based on oldest release
  const sortOldest = () => {
    const sortedArray = [...products].sort((a, b) => {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });

    setTopProducts(sortedArray.slice(0, 15 + parentData.seeMoreCount * 15));
  };

  //Useeffect to render seemore products
  useEffect(() => {
    let searchTerm = parentData.searchTerm.toLowerCase();

    if (searchTerm.trim() === "") {
      recommendedProducts(); //rendering the top 15 recommended items
    } else {
      searchItem();
    }

    //logic to sort the items
    let selectedValue = parentData.dropdownvalue;

    //console.log(selectedValue);
    switch (selectedValue) {
      case "recommended":
        recommendedProducts();
        break;
      case "atoz":
        sortAtoZ();
        break;
      case "ztoa":
        sortZtoA();
        break;
      case "newest":
        sortNewest();
        break;
      case "oldest":
        sortOldest();
        break;
      default:
        recommendedProducts();
    }

    sendDataToParent(isSearchItem);
  }, [
    parentData.seeMoreCount,
    parentData.searchTerm,
    isSearchItem,
    parentData.dropdownvalue,
  ]);

  //console.log(seeMoreCount);
  //console.log(parentData.searchTerm);

  return (
    <>
      {isSearchItem ? (
        <div className="grid-container">
          {topProducts &&
            topProducts.map((product) => {
              return (
                <div
                  className="grid-item"
                  onClick={() => navigate("/help-top-issues")}
                >
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
      ) : (
        <div className="gc-no-results-container">
          <img
            src="/public/images/Games/noresult.png"
            alt="noresultsimage"
            style={{ marginBottom: "20px" }}
          />
          <h1>No results found</h1>
          <p>Try adjusting your search by changing your filters</p>
        </div>
      )}
    </>
  );
};

export default GameCards;
