import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {name, capital, population} = props.country;


    return (
        <div className='country'>
            <h2 className="country-name">{name}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <Link to={`/country/${name}`}>
                <button className="main-button">VIEW DETAILS</button>
            </Link>
            
        
    
        
        </div>
    );
};

export default Country;