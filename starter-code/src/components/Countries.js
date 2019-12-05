import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Countries.css';
import CountryDetails from './CountryDetails'

export default class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: this.props.countriesArr
    }

    console.log('COUNTRIES ARRAY', this.state.countries);
  }


  render() {
    console.log('IN RENDER')
    return (
      <div>
        <div className="title col-12">WikiCountries</div>

        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {
              this.state.countries.map( countryObj => {
                return (
                    <NavLink to={`/${countryObj.cca3}`} activeClassName="selected-link" >
                      <div className="list-group-item list-group-item-action">                 {countryObj.name.common}
                      </div>
                    </NavLink>
                )   
              })
            }
              
            
            </div>
          </div>

          <div className="country-details col-7">
            <Route exact path="/:countryCode" component={CountryDetails} />
          </div>
        </div>
      </div>
    )
  }
}



        