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
                        <img src="/Images/Signin/apple.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/Steam.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/xbox.png" alt="" className="social-login-logo"/>
                        <img src="/Images/Signin/ps.png" alt="" className="social-login-logo"/>
                    </div>
                    
                    <div className="social-logins-divider">
                       <span>or</span>
                    </div>
                   
                </div>
                
                <form action="" className="signin-form">
                    <label className="sigin-phone-email-label">PHONE OR EMAIL</label>
                    <input type="text" placeholder="Enter your phone or email" className="sigin-input"/>
                    <div className="sigin-checkbox">
                        <input type="checkbox"  className="signin-checkbox-input"/>
                        <label>Remember Me</label>
                    </div>

                    <button className="sigin-page-next-btn">NEXT</button>
                    
                </form>

                <div className="sigin-forgot-newacc">
                    <a href="" >Forgot yout password, or need to create a new one?</a>
                </div>
                
                <button className="sigin-in-page-create-btn">CREATE ACCOUNT</button>

            </div>

        </div>
    )
}

export default SignIn;