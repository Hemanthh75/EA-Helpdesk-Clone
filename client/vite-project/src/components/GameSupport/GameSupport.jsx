import React from 'react';
import './gamesupport.css'

const GameSupport = () => {
  return (
    <div className='game-support-container'>

        {/*game support input field and dropdown*/}
        <div className='game-support-input-filter'>
            <div className='game-support-input-container'>
              {/*game support input field*/}
              <input type="text" className='game-support-input' placeholder='Search for a game or product' />
            </div>

            {/*game support dropdown*/}
            <div className='game-support-filter-container'>
              <p className='game-support-filter-text'>View by:</p>
              <select className='game-support-filter-dropdown'>
                  <option className='game-support-filter-dropdown-item'>Recommended</option>
                  <option className='game-support-filter-dropdown-item'>A To Z</option>
                  <option className='game-support-filter-dropdown-item'>Z TO A</option>
                  <option className='game-support-filter-dropdown-item'>Oldest</option>
                  <option className='game-support-filter-dropdown-item'>Newest</option>
              </select>
            </div>
        </div>

        {/*Grid container for games*/}
        <div className='grid-container'>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
            <div className="grid-item">
              <img className='grid-item-image' src='/public/images/Games/EaAccount.png' />
              <div className='grid-item-text'>EA Account</div>
            </div>
        </div>

        {/*See More button */}
        <div className='game-support-see-more-button-container'>
          <button className='game-support-see-more-button'>See More</button>
        </div>


       

    </div>
  )
}

export default GameSupport