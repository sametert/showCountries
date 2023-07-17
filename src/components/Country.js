import React, {useState,useEffect} from 'react'
import axios from 'axios';


function Country({setBorder}) {
    const [country, setCountry] = useState([]);
    const [loading,setLoading]  = useState(true);


    useEffect(() => {
        axios('https://restcountries.com/v3.1/name/turkey')
            .then(res => setCountry(res.data))
            .finally(() => setLoading(false))
    }, [])



  return (
   <>
    {loading &&  <h1>Loading...</h1>}
  
    <h1>Country</h1>
    {
        country.map((country,i) =>
            <div key={i} className='country' onLoad={setBorder(country.borders.toString())}>
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

    
    </>
  )
}

export default Country