import { setWeather } from '../actions/weatherAction';
import Forecast from './Forecast';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Weather() {
    const dispatch = useDispatch()
    const forecasts = useSelector(state => state.forecasts)
    const [query, setQuery] = useState('Gothenburg')
    console.log('Weather',forecasts)
    async function fetchWeather() {
        console.log('Fetching')
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1dc27327c1655e53a85e6e5a889fccee`)
        console.log('response', response)
        const data = await response.json()
        console.log('data:', data)
        dispatch(setWeather(data))
    }
    useEffect(() => {
		console.log('useEffect: ', forecasts);
	}, [forecasts]);

  useEffect(() => {
    console.log(query);
  }, [query]);
    
    return (
        <main>
            {forecasts.coord ? (
                <Forecast forecasts={forecasts} />
            ) : (
                    <p>Awaiting fetch data</p>
            )}
            <input id="location" type="text" className="search-bar" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
            <button onClick={fetchWeather}>Search!</button>
        </main>
    )
}
export default Weather