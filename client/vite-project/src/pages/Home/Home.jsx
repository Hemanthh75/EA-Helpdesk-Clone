import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import GameSupport from '../../components/GameSupport/GameSupport';
import ManageAccount from '../../components/ManageAccount/ManageAccount';
import Footer from '../../components/Footer/Footer';

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


         {/*Community block container and featured games*/}

         <div className='home-community-featured'>
          {/*Community block container*/}
            <div className="home-community-container">
                  <div className='home-community-container-text'>
                      <h1 className='home-community-container-text-heading'>Get Help From the Community</h1>
                      <p className='home-community-container-text-para'>Find gameplay tips, and level up by answering player questions 24/7</p>
                  </div>
                  <div className='home-community-container-button-container'>
                    <button className='home-community-container-button'>GO</button>
                  </div>
              </div>

               {/*featured games container*/}
               <div className='home-featured-container'>
                    <div className="home-featured-left">
                        <h1 className='home-featured-left-heading'>Keep up with the latest EA games and news</h1>
                        <p className='home-featured-left-text'>Get closer to your favorite games and checkout exclusive stories from the world of EA.</p>
                        <button className='home-featured-left-button'>GO</button>
                    </div>
                    <div className='home-featured-left-eatext-container'><p className='home-featured-left-eatext'>EA.COM</p></div>
                    <div className="home-featured-right">
                        <img src="/public/Images/EABanner.png" alt="EA Banner" className='home-featured-right-Image' />
                    </div>
               </div>
          </div>

      

        {/*Footer container*/}
        <Footer />

    </div>
  )
}

export default Home