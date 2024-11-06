import React, { useEffect, useState } from 'react'

import './Style.css';
const Tempapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Panipat");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9b485ee51f735a1266f6bca2d58c2ddc`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCity(data.main);
    };

    fetchApi();

  }, [search]);


  return (
    <>
      <div className="box" >
        <div className='inputData'>

          <input
            type="search"
            placeholder='Search Your City'
            className='inputField'
            onChange={(event) => { setSearch(event.target.value); }}
          />
        </div>

       { !city ?(
            <p className='error-msg'> City Not Found </p>)
             :(
              <div>
              <div className="info">
              <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
              </h2>
              <h1 className='temp'>
                {city.temp}°Cel 
              </h1>
              <h3 className='tempmin_max'> Min :{city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
              
                </div>
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            </div>
          
            )
}
        

       </div>
    </>

  )
}


export default Tempapp;