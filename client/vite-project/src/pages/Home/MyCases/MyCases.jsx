import React from "react";
import './mycases.css'
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const MyCases = () => {
    return (
            <>
                <Navbar />

                {/* Creating the my cases page container */}
               <div className="my-cases-container">
                    <div className="my-cases-content">
                        <div className="my-cases-content-description">
                            <p>Please sign into your EA Account to proceed</p>
                        </div>

                        <div className="my-cases-content-inputs">

                        </div>
                   </div>

                </div>
                <Footer />
            </>
      
    )
}

export default MyCases;