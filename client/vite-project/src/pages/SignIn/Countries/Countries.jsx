import React, { useEffect, useState } from "react";
import './countries.css';
import axios from 'axios';


const Countries = ({sendDataToParent}) => {
    
    const[countries, setCountries] = useState([]);
    const[selectedCountry, setSelectedCountry] = useState({src: "https://flagcdn.com/w320/in.png", cc: "+91"});



    //Countries name, flag and phone code fetching....
    useEffect(() => {

        const fetchCountries = async() => {
            const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,idd");

            const data = response.data;

            data.sort((a,b) => a.name.common.localeCompare(b.name.common))
            setCountries(data);
        }

        fetchCountries()
    },[]);


    const handleListClick = (event) => {
        // Find the nearest parent 'li' element

        const listItem = event.target.closest("li.countries-list-item");
    
        if (listItem) {
            // Find the image inside the list item
            const imgElement = listItem.querySelector("img");
            const countryCode = listItem.querySelector(".country-code").textContent
            
            if (imgElement) {
                const imageSrc = imgElement.src; // Get the image source

                setSelectedCountry({
                    src: imageSrc,
                    cc: countryCode
                })
              //  console.log("Image source: ", imageSrc);
              //  console.log("Country code: ", countryCode);
            } else {
                console.log("No image found in this list item.");
            }
        } else {
            console.log("Click outside list items.");
        }


        sendDataToParent(selectedCountry);
    };
    //console.log(selectedCountry)

    //console.log(countries)

    return (
        <div className="countries-wrapper">
            <ul className="countries-list">
                {countries.map((country, index) => {
                    return <li key={index}  className="countries-list-item" onClick={handleListClick}>   
                              <img src={country.flags.png} style={{width:"32px", height:"24px"}}/> 
                                   <span className="countries-name-code">{country.name.common} 
                                     (<span className="country-code">{country.idd.root}{(country.idd.suffixes[0])}</span>)
                                    </span>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Countries;