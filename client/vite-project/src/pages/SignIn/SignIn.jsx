import React from "react";
import './signin.css'

const SignIn = () => {
    return(
        <div className="sign-in-container">
            <div className="sign-in-wrapper">
                <img className="sign-in-logo" src="/Images/Signin/EALogo.png" alt="" />

                
                <div className="sign-in-panel">
                    <h1 className="sign-in-panel-heading">
                        Sign in to your EA Account
                    </h1>

                    <div className="social-logins">
                        <img src="/Images/Signin/Google.png" alt="" className="social-login-logo" />
                        <img src="/Images/Signin/fb.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/Steam.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/xbox.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/ps.png" alt="" className="social-login-logo"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn;