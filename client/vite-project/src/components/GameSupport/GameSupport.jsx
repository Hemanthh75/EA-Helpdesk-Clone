import React, { useEffect, useState } from "react";
import "./gamesupport.css";
import GameCards from "./GameCard/GameCards";

const GameSupport = () => {
  const [seeMoreCount, setSeeMoreCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownvalue, setDropdownValue] = useState("recommended");
  const [childData, setChildData] = useState(null);
  const handleClick = () => {
    setSeeMoreCount(seeMoreCount + 1);
  };

  //console.log(seeMoreCount);
  //console.log(searchTerm);

  const parentData = {
    seeMoreCount: seeMoreCount,
    searchTerm: searchTerm,
    dropdownvalue: dropdownvalue,
  };

  const handleDataFromChild = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  //console.log(childData);

  const handledropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className="game-support-container">
      {/*game support input field and dropdown*/}
      <div className="game-support-input-filter">
        <div className="game-support-input-container">
          {/*game support input field*/}
          <input
            type="text"
            className="game-support-input"
            placeholder="Search for a game or product"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/*game support dropdown*/}
        <div className="game-support-filter-container">
          <p className="game-support-filter-text">View by:</p>
          <select
            className="game-support-filter-dropdown"
            onChange={handledropdownChange}
          >
            <option
              className="game-support-filter-dropdown-item"
              value="recommended"
            >
              Recommended
            </option>
            <option className="game-support-filter-dropdown-item" value="atoz">
              A To Z
            </option>
            <option className="game-support-filter-dropdown-item" value="ztoa">
              Z TO A
            </option>
            <option
              className="game-support-filter-dropdown-item"
              value="oldest"
            >
              Oldest
            </option>
            <option
              className="game-support-filter-dropdown-item"
              value="newest"
            >
              Newest
            </option>
          </select>
        </div>
      </div>

      {/*Grid container for games*/}

      <GameCards
        parentData={parentData}
        sendDataToParent={handleDataFromChild}
      />

      {/*See More button */}

      {childData && (
        <div className="game-support-see-more-button-container">
          <button
            className="game-support-see-more-button"
            onClick={handleClick}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default GameSupport;
