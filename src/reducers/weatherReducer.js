const initState = {
    forecasts: []
}
export const weatherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_WEATHER ':
            return {
                ...state,
                forecasts:action.payload
            }
        default:
            return state
    }
}