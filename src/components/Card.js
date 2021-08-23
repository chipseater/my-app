import React from 'react';

const Card = (props) => {
    const {country} = props // ça veut juste dire "const country = props.country"

    function numberFormat(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <li className="card">
            <img src={country.flag} alt="flag"/>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>{numberFormat(country.population)} hab.</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;