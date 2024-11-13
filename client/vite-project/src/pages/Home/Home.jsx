import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import GameSupport from '../../components/GameSupport/GameSupport';
import ManageAccount from '../../components/ManageAccount/ManageAccount';

const Home = () => {

  {/*Managing the game support and manage account components using usestate */}
  const[isActive, setIsActive] = useState(true);

  const handleGameSupport = (event) => {
      event.preventDefault();
      setIsActive(true);
  }

  const handleManageAccount = (event) => {
      event.preventDefault();
      setIsActive(false)
  }

  {/*In the above functions when we try to get the value of isActive inside the function using console log we won't the current value
    this is because the setState is asynchronous and it holds the previous value, so we are logging it below in the useeffect. 

  useEffect(() => {
    console.log(isActive)
  },[isActive])

  */}

  return (
    <div className='home-container'>

        {/* Importing Navbar */}
        <Navbar />

        {/* Creating the container below the homepage */}
        <div className='homepage-header-container'>
            <h1 className='homepage-header-text'>EA HELP: Official Support | United States <br />
              <span className='homepage-header-text-para2'>What do you need help with?</span>
            </h1>
        </div>


        {/* Creating the game support and manage account container*/}
        <div className='game-support-manage-account'>

            <div className='game-support-manage-account-buttons'>
              <button className={isActive ? 'active-game-support-button' : 'game-support-button'} onClick={handleGameSupport}>Game support</button>
              <button className={isActive ?'manage-account-button' : 'active-manage-account-button'} onClick={handleManageAccount}>Manage account</button>
            </div>
            {/*Conditionally rendering the game support and manage account container*/}

            {isActive ? <GameSupport /> : <ManageAccount />}

        </div>


    </div>
  )
}

export default Home