import React, { useEffect, useState } from "react";
import "./signup.css";
import axios from "axios";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => {
    return currentYear - i;
  });

  // console.log(years);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [countries, setCountries] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [days, setDays] = useState([]);

  //Fetching the countriesss

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name"
      );

      const data = response.data;
      data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      setCountries(data);
    };

    fetchCountries();
  }, []);

  //Date, year and month dropdown functionality

  //function to calculate number of days based on

  const calculateDays = (year, month) => {
    const daysInMonth = new Date(year, month, 0).getDate(); //This will return the last day of the month.
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  useEffect(() => {
    setDays(calculateDays(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);

  //console.log(days);

  const age = currentYear - selectedYear;
  //console.log(selectedYear);
  //console.log(age);

  return (
    <div className="sign-up-container">
      <div className="sign-up-wrapper">
        <img className="sign-up-logo" src="/Images/Signin/EALogo.png" alt="" />

        <div className="sign-up-panel">
          <h1 className="sign-up-panel-heading">Create your EA Account</h1>

          <p className="sign-up-panel-text" style={{ color: "white" }}>
            Use one of your existing accounts below, or start from the
            beginning.
          </p>

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

          <form className="social-logins-signup-form">
            <label className="social-logins-signup-label">COUNTRY/REGION</label>
            <div className="social-logins-signup-country">
              <select className="social-logins-signup-dropdown">
                {countries &&
                  countries.map((country, index) => {
                    return (
                      <option
                        key={index}
                        style={{ backgroundColor: "white", color: "black" }}
                      >
                        {country.name.common}
                      </option>
                    );
                  })}
              </select>
            </div>

            <label className="social-logins-signup-label">DATE OF BIRTH</label>
            <div className="social-logins-signup-dob">
              <select
                className="social-logins-signup-dob-month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              >
                {months.map((month, index) => {
                  return (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select className="social-logins-signup-dob-date" name="" id="">
                {days &&
                  days.map((day) => {
                    return (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    );
                  })}
              </select>
              <select
                className="social-logins-signup-dob-year"
                name=""
                id=""
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              >
                {years &&
                  years.map((year, index) => {
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
              </select>
            </div>

            <button className="social-logins-signup-next-button">NEXT</button>
          </form>

          <div className="sign-up-bottom-links">
            <p
              style={{
                color: "white",
                fontSize: "18px",
                marginTop: "20px",
              }}
            >
              Already have an account?{" "}
              <a href="" style={{ color: "#235fe3" }}>
                Sign in
              </a>
            </p>

            <a
              href=""
              style={{
                color: "#235fe3",
                fontSize: "18px",
              }}
            >
              Do you want to create an EA Account for your child?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
