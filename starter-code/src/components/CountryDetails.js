import React from 'react';
import countriesArray from '../countries.json';
import { NavLink } from 'react-router-dom';

const getCountryByCode = (code) => {
  const result = countriesArray.find( country => country.cca3 === code);
  return result
}

function CountryDetails(props) {

  const { countryCode } = props.match.params;

  const foundCountry = getCountryByCode(countryCode);
  console.log('COUNTRY OBJ', foundCountry);

    return (
      <div>
        <h2>{foundCountry.name.common}</h2>

        <h3>Capital</h3>
        <p>{foundCountry.capital}</p>

        <h3>Area</h3>
        <p>{foundCountry.area}</p>

        <h3>Border</h3>
        <ul>
          { foundCountry.borders.map( border => {
            return <NavLink to={`/${border}`}><li>{getCountryByCode(border).name.common}</li></NavLink>
            })
          }
         
          
        </ul>
      </div>
    )
// //activeClassName="selected-link" className="list-group-item list-group-item-action"
}

export default CountryDetails;