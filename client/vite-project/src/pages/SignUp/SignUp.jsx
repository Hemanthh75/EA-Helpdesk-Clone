import React, { useEffect, useState } from "react";
import "./signup.css";
import axios from "axios";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => {
    return currentYear - i;
  });

  console.log(years);

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

  console.log(days);

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
            <img
              src="/Images/Signin/Google.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/fb.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/apple.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/Steam.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/xbox.png"
              alt=""
              className="social-login-logo"
            />
            <img
              src="/Images/Signin/ps.png"
              alt=""
              className="social-login-logo"
            />
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
