import React, { useEffect, useState } from "react";
import "./signin.css";
import Countries from "./Countries/Countries";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [error, setError] = useState("");
  const [countriesList, setCountriesList] = useState(false);
  const [dataFromChild, setDataFromChild] = useState({
    src: "https://flagcdn.com/w320/in.png",
    cc: "+91",
  });

  const navigate = useNavigate();

  //setting the inputvalue
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    //Condition to check if the input value is purely numbers or consisting of strings.
    if (/^\d+$/.test(inputValue)) {
      setDropdown(true);
    } else {
      setDropdown(false);
      setCountriesList(false);
    }

    //console.log(inputValue, dropdown)
  }, [inputValue]);

  //setting countrieslist state

  const handleCountriesList = (event) => {
    event.preventDefault();
    setCountriesList(!countriesList);
  };

  useEffect(() => {
    console.log(countriesList);
  }, [countriesList]);

  //Function which triggers after clicking next button.

  const handleNext = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!dropdown && !emailRegex.test(inputValue)) {
      setError("Email address is invalid");
    } else if (dropdown && inputValue.length < 10) {
      setError("Phone number is invalid");
    } else {
      setError("");
      console.log(inputValue);
      navigate("/sign-in-password", { state: { inputValue, dataFromChild } });
    }
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    setCountriesList(false);
  };

  // console.log("Hey Im Parent:", dataFromChild)

  return (
    <div className="sign-in-container">
      <div className="sign-in-wrapper">
        <img className="sign-in-logo" src="/Images/Signin/EALogo.png" alt="" />

        <div className="sign-in-panel">
          <h1 className="sign-in-panel-heading">Sign in to your EA Account</h1>

          <div className="social-logins">
            <a
              target="_blank"
              href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&include_granted_scopes=true&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.birthday.read&client_id=362119112335-os5rn4jm29pjnmcd8oj4va28a30lokhm.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsignin.ea.com%2Fp%2Fjuno%2FcallbackGoogle&state=eyJlIjoiZTQ2NjY1MDgxM3MxIiwiZWIiOmZhbHNlLCJlcCI6Imdvb2dsZSIsImlyIjoiaHR0cHMlM0ElMkYlMkZhY2NvdW50cy5lYS5jb20lM0E0NDMlMkZjb25uZWN0JTJGYXV0aCUzRmRpc3BsYXklM0R3ZWIyJTI1MkZsb2dpbiUyNnJlc3BvbnNlX3R5cGUlM0Rjb2RlJTI2dGhlbWUlM0RlYWhlbHAlMjZyZWRpcmVjdF91cmklM0RodHRwcyUyNTNBJTI1MkYlMjUyRmhlbHAuZWEuY29tJTI1MkZzc28lMjUyRmxvZ2luJTI1MkYlMjZsb2NhbGUlM0Rlbl9VUyUyNm5vbmNlJTNEbm9uY2UlMjZjbGllbnRfaWQlM0RvcmlnaW5fQ0UiLCJ0cyI6MTczMjg3MDgwNjU0NSwicm0iOmZhbHNlLCJsaSI6ZmFsc2V9.UVpQbHNqaDZXT2RFUUhZbW1waVg5akR3WC1hdzFoWnd4bXR6SUptYzFhTQ&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow"
            >
              <img
                src="/Images/Signin/Google.png"
                alt="Google"
                className="social-login-logo"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/login.php?skip_api_login=1&api_key=447403318669358&kid_directed_site=0&app_id=447403318669358&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv4.0%2Fdialog%2Foauth%3Fscope%3Demail%26client_id%3D447403318669358%26redirect_uri%3Dhttps%253A%252F%252Fsignin.ea.com%252Fp%252Fjuno%252FcallbackFacebook%26state%3DeyJlIjoiZTQ2NjY1MDgxM3MxIiwiZWIiOmZhbHNlLCJlcCI6ImZiIiwiaXIiOiJodHRwcyUzQSUyRiUyRmFjY291bnRzLmVhLmNvbSUzQTQ0MyUyRmNvbm5lY3QlMkZhdXRoJTNGZGlzcGxheSUzRHdlYjIlMjUyRmxvZ2luJTI2cmVzcG9uc2VfdHlwZSUzRGNvZGUlMjZ0aGVtZSUzRGVhaGVscCUyNnJlZGlyZWN0X3VyaSUzRGh0dHBzJTI1M0ElMjUyRiUyNTJGaGVscC5lYS5jb20lMjUyRnNzbyUyNTJGbG9naW4lMjUyRiUyNmxvY2FsZSUzRGVuX1VTJTI2bm9uY2UlM0Rub25jZSUyNmNsaWVudF9pZCUzRG9yaWdpbl9DRSIsInRzIjoxNzMyODc1MTI0MTU1LCJybSI6ZmFsc2UsImxpIjpmYWxzZX0.Z0Y3SURIU0Vla0hfX3Q1SGtzZHpRZ1VqWW0yVFZlNXktb0tMMmhHdmF1cw%26response_type%3Dtoken%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3ade0efa-5a16-4d16-9012-a07b6a79f536%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsignin.ea.com%2Fp%2Fjuno%2FcallbackFacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DeyJlIjoiZTQ2NjY1MDgxM3MxIiwiZWIiOmZhbHNlLCJlcCI6ImZiIiwiaXIiOiJodHRwcyUzQSUyRiUyRmFjY291bnRzLmVhLmNvbSUzQTQ0MyUyRmNvbm5lY3QlMkZhdXRoJTNGZGlzcGxheSUzRHdlYjIlMjUyRmxvZ2luJTI2cmVzcG9uc2VfdHlwZSUzRGNvZGUlMjZ0aGVtZSUzRGVhaGVscCUyNnJlZGlyZWN0X3VyaSUzRGh0dHBzJTI1M0ElMjUyRiUyNTJGaGVscC5lYS5jb20lMjUyRnNzbyUyNTJGbG9naW4lMjUyRiUyNmxvY2FsZSUzRGVuX1VTJTI2bm9uY2UlM0Rub25jZSUyNmNsaWVudF9pZCUzRG9yaWdpbl9DRSIsInRzIjoxNzMyODc1MTI0MTU1LCJybSI6ZmFsc2UsImxpIjpmYWxzZX0.Z0Y3SURIU0Vla0hfX3Q1SGtzZHpRZ1VqWW0yVFZlNXktb0tMMmhHdmF1cw%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
            >
              <img
                src="/Images/Signin/fb.png"
                alt="Facebook"
                className="social-login-logo"
              />
            </a>

            <a target="_blank" href="">
              <img
                src="/Images/Signin/apple.png"
                alt="Apple"
                className="social-login-logo"
              />
            </a>

            <a
              target="_blank"
              href="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fresponse_type%3Dtoken%26client_id%3DDD604350%26state%3DeyJlIjoiZTQ2NjY1MDgxM3MxIiwiZWIiOmZhbHNlLCJlcCI6InN0ZWFtIiwiaXIiOiJodHRwcyUzQSUyRiUyRmFjY291bnRzLmVhLmNvbSUzQTQ0MyUyRmNvbm5lY3QlMkZhdXRoJTNGZGlzcGxheSUzRHdlYjIlMjUyRmxvZ2luJTI2cmVzcG9uc2VfdHlwZSUzRGNvZGUlMjZ0aGVtZSUzRGVhaGVscCUyNnJlZGlyZWN0X3VyaSUzRGh0dHBzJTI1M0ElMjUyRiUyNTJGaGVscC5lYS5jb20lMjUyRnNzbyUyNTJGbG9naW4lMjUyRiUyNmxvY2FsZSUzRGVuX1VTJTI2bm9uY2UlM0Rub25jZSUyNmNsaWVudF9pZCUzRG9yaWdpbl9DRSIsInRzIjoxNzMyODc1MjI1MTE4LCJybSI6ZmFsc2UsImxpIjpmYWxzZX0.dllnSVVlWTFkd3NhMWIwRl9ESXBuR2diTDZvT0xjU1YyMExsNE5DUE9VZw"
            >
              <img
                src="/Images/Signin/Steam.png"
                alt="Steam"
                className="social-login-logo"
              />
            </a>

            <a
              target="_blank"
              href="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fresponse_type%3Dtoken%26client_id%3DDD604350%26state%3DeyJlIjoiZTQ2NjY1MDgxM3MxIiwiZWIiOmZhbHNlLCJlcCI6InN0ZWFtIiwiaXIiOiJodHRwcyUzQSUyRiUyRmFjY291bnRzLmVhLmNvbSUzQTQ0MyUyRmNvbm5lY3QlMkZhdXRoJTNGZGlzcGxheSUzRHdlYjIlMjUyRmxvZ2luJTI2cmVzcG9uc2VfdHlwZSUzRGNvZGUlMjZ0aGVtZSUzRGVhaGVscCUyNnJlZGlyZWN0X3VyaSUzRGh0dHBzJTI1M0ElMjUyRiUyNTJGaGVscC5lYS5jb20lMjUyRnNzbyUyNTJGbG9naW4lMjUyRiUyNmxvY2FsZSUzRGVuX1VTJTI2bm9uY2UlM0Rub25jZSUyNmNsaWVudF9pZCUzRG9yaWdpbl9DRSIsInRzIjoxNzMyODc1MjI1MTE4LCJybSI6ZmFsc2UsImxpIjpmYWxzZX0.dllnSVVlWTFkd3NhMWIwRl9ESXBuR2diTDZvT0xjU1YyMExsNE5DUE9VZw"
            >
              <img
                src="/Images/Signin/xbox.png"
                alt="Xbox"
                className="social-login-logo"
              />
            </a>

            <a
              target="_blank"
              href="https://signin.ea.com/p/juno/redirectPsn?execution=e466650813s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fdisplay%3Dweb2%252Flogin%26response_type%3Dcode%26theme%3Deahelp%26redirect_uri%3Dhttps%253A%252F%252Fhelp.ea.com%252Fsso%252Flogin%252F%26locale%3Den_US%26nonce%3Dnonce%26client_id%3Dorigin_CE"
            >
              <img
                src="/Images/Signin/ps.png"
                alt="PlayStation"
                className="social-login-logo"
              />
            </a>
          </div>

          <div className="social-logins-divider">
            <span>or</span>
          </div>
        </div>

        <form action="" className="signin-form">
          <label className="sigin-phone-email-label">PHONE OR EMAIL</label>

          <div className="sigin-mobile">
            {dropdown && (
              <div
                className="sigin-mobile-dropdown"
                onClick={handleCountriesList}
              >
                <img
                  src={dataFromChild.src}
                  style={{ width: "32px", height: "24px" }}
                />
                <span
                  style={{
                    color: "white",
                    padding: "5px 5px",
                    overflow: "hidden",
                  }}
                >
                  {dataFromChild.cc}
                </span>
              </div>
            )}
            <input
              type="text"
              value={inputValue}
              placeholder="Enter your phone or email"
              className="sigin-input"
              onChange={handleChange}
              style={{ color: "white" }}
            />
          </div>

          {countriesList && (
            <div style={{ zIndex: 999 }}>
              <Countries sendDataToParent={handleDataFromChild} />
            </div>
          )}

          <div className="sigin-checkbox">
            <input type="checkbox" className="signin-checkbox-input" />
            <label>Remember Me</label>
          </div>

          <button className="sigin-page-next-btn" onClick={handleNext}>
            NEXT
          </button>
          {/*Showing error message */}
        </form>

        {error && (
          <div className="error-message" style={{ color: "red" }}>
            {error.toUpperCase()}
          </div>
        )}

        <div className="sigin-forgot-newacc">
          <a href="">Forgot yout password, or need to create a new one?</a>
        </div>

        <button className="sigin-in-page-create-btn">CREATE ACCOUNT</button>
      </div>
    </div>
  );
};

export default SignIn;
