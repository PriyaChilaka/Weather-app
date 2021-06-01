export const setWeather = (forecasts) => {
    return {
        type: 'SET_WEATHER',
        payload:forecasts
    }
}