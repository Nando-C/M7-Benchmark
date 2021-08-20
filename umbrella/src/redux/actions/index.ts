import { Dispatch } from "react"
import { AnyAction } from "redux"
import { Forecast } from "../../types/Forecast"
import { FETCH_FORECAST } from "../actionTypes"

export const fetchForecastAction = (cityName:string) => {
    return async (dispatch: Dispatch<AnyAction>, getstate: ()=> Forecast) => {

        const APIKey = process.env.OPEN_WEATHER_API_KEY
        try {
            let resp = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&units=metric&appid=${APIKey}`)
            if (resp.ok) {
                let forecast = await resp.json()

                dispatch({
                    type: FETCH_FORECAST,
                    payload: forecast,
                })
            }
            } catch (error) {
            console.log(error)
        }
    }
}

