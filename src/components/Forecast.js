import  { useState } from 'react';
const Forecast = () => {
    
   let [responseObj, setResponseObj] = useState({});
    function getForecast() {

    }
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
    )
}
export default Forecast