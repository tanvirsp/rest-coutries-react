import React, { useEffect, useState } from 'react';
import './Home.css';
import Countries from '../Country/Country';

const Home = () => {
        const [countries, setCountries] = useState([])
    
        useEffect(() =>{
        const url = "https://restcountries.eu/rest/v2/all";
        fetch (url)
        .then(res => res.json())
        .then(data => setCountries(data))
    } , [])

    return (
        <div className="country-container">
    
            {
                countries.map(country => <Countries country={country} key ={country.alpha3Code}></Countries>)
            }
           
            
        </div>
    );
};

export default Home;