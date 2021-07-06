import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = () => {
        
    const {countryName} = useParams();
    

    const [country, setCountry] =useState({});
    const {name, topLevelDomain, alpha2Code, capital, region, population, area, timezones, flag} = country;

    const history = useHistory();
    
    const goHome =() => {
        history.push('/');
    }
    
    useEffect(() =>{
        const url =`https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then( data => setCountry(data[0]))
    },[])

    

    return (
        <div className="country-detail">      
            <button onClick={goHome} className="main-button">Go Back</button>
            <table>
                <tbody>
                    <tr><td>Country Name </td><td>{name}</td></tr>
                    <tr><td>Top Level Domain </td><td>{topLevelDomain}</td></tr>
                    <tr><td>Alpha 2 Code </td><td>{alpha2Code}</td></tr>
                    <tr><td>Capital </td><td>{capital}</td></tr>
                    <tr><td>Population </td><td>{population}</td></tr>
                    <tr><td>Region</td><td>{region}</td></tr>
                    <tr><td>Area</td><td>{area}</td></tr>
                    <tr><td>Timezones</td><td>{timezones}</td></tr>
                </tbody>
            </table>
            <img src={flag} alt="" />
        </div>
    );
};

export default CountryDetail;