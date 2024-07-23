import './App.css';
import { useState } from 'react';
import Nav from './Nav';

function App() {
  const [city, setCity] = useState('');
  const [wDetails, setWDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`https://api.weatherapi.com/v1/current.json?key=56cf9763848e43deba5132354242307&q=${city}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message);
        setWDetails(undefined);
        setLoading(false);
      });

    setCity('');
  };

  return (
    <>
      <Nav /> 
      <div className="App">
        <div className="box1">
          <h1 className='hl'>Weather App</h1>
          <div className="box2">
            <form action="" onSubmit={getData}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="Data"
                placeholder="Enter City Name"
              />
              <button className="sub">Submit</button>
            </form>

            <div className="inenner">
              {loading ? (
                <div className="loading">
                  <img 
                    src="https://cdn.pixabay.com/animation/2023/04/16/16/41/16-41-15-249_512.gif" 
                    alt="Loading" 
                    className="absul" 
                  />
                </div>
              ) : (
                wDetails ? (
                  <>
                    <h3 className="innerh3">
                      {wDetails.location.name} <span className="sp"></span>
                    </h3>
                    <h2 className="innerh2">{wDetails.current.temp_c} °C</h2>
                    <img 
                      src={wDetails.current.condition.icon} 
                      alt={wDetails.current.condition.text} 
                    />
                    <p>{wDetails.current.condition.text}</p>
                  </>
                ) : (
                  "No data found"
                )
              )}
            </div>
          </div>
        
       
        
        </div>
     
      </div>
    </>
  );
}

export default App;
