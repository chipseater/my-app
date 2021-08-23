import React, { useState, useEffect } from 'react'
import Card from "./Card"
import axios from "axios"

const Countries = () => {
    const [data, setData] = useState([])
    const [sortedData, setSortedData] = useState([])
    const [playOnce, setPlayOnce] = useState(true)
    const [rangeValue, setRangeValue] = useState(40)
    const [selectedRadio, setSelectedRadio] = useState('')
    const radios = ['Africa','America','Asia','Europe','Oceania']

    useEffect(() => {
        if (playOnce) {
            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
            .then((res) => {
                setData(res.data)
                setPlayOnce(false)
            })
        }
        const sortedArray = () => {
            const CountryObj = Object.keys(data).map((i) => data[i])
            const sortedArray = CountryObj.sort((a,b) => {
                return(b.population - a.population)
            })
            sortedArray.length = rangeValue
            setSortedData(sortedArray)
        }
        sortedArray()
    }, [data, rangeValue, playOnce])
    

    return(
        <div className="countries">
            <div className="sort-container">
                <input type="range" name="range-input"
                 value={rangeValue} min="1" max="250" className="range-input"
                 onChange={(event) => setRangeValue(event.target.value)} />
                <ul>
                    {radios.map((radio) => {
                        return(
                            <li key={radio}>
                                <input type="radio" name={radio} value={radio}
                                 id={radio} checked={radio === selectedRadio}
                                 onChange={(event) => setSelectedRadio(event.target.value)}/>
                                <label htmlFor={radio}>
                                    {radio}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>annuler la recherche</h5>}
            </div>
            <ul className="countries-list">
                {sortedData.filter((country) => country.region.includes(selectedRadio))
                 .map((country) => (
                    <span><Card country={country} key={country.name}/></span>
                ))}
            </ul>
        </div>
    )
}

export default Countries