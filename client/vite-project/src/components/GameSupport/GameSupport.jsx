import React from 'react';
import './gamesupport.css'

const GameSupport = () => {
  return (
    <div className='game-support-container'>
        <div className='game-support-input-filter'>
            <input type="text" className='game-support-input' placeholder='Search for a game or product' />
            <div className='game-support-filter'>
              <p>View by:</p>
              <select>
                  <option>Recommended</option>
                  <option>A To Z</option>
                  <option>Z TO A</option>
                  <option>Oldest</option>
                  <option>Newest</option>
              </select>
            </div>
        </div>
    </div>
  )
}

export default GameSupport