import React,{useState,useEffect} from 'react'
import axios from 'axios';

function NeighbourCountry({border}) {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    axios(`https://restcountries.com/v3.1/alpha?codes=${border}`)
      .then(res => setBorderCountries(res.data))
  }, [])

  return (

   
    <div className='borderCountries'>
       <h1>Border Countries</h1>
      {
        borderCountries.map((country,i) =>
            <div key={i} >
                <div className='card'>
                    <header className='card-header'>
                        <img src={country.flags.png} alt={country.flags.alt} />
                    </header>
                    <div className='card-body'>
                        <h2>{country.name.common}</h2>
                        <p>Capital city: {country.capital[0]}</p>
                        <p>Population: {(country.population/1000000).toFixed(3)}m</p>
                    </div>
                </div>
            </div>
        )
      }

    </div>
  )
}

export default NeighbourCountry