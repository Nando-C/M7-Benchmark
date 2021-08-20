import { createStore } from "redux";
import { Forecast } from "../../types/Forecast";

const initialState: Forecast = {

    city: {
        id: 0,
        name: '',
        coord: {
            lon: 0,
            lat: 0,
        },
        country: '',
        population: 0,
        timezone: 0,
    },
    cod: '',
    message: 0,
    cnt: 0,
    list: {
        dt: 0,
        sunrise: 0,
        sunset: 0,
        temp: {
            day: 0,
            min: 0,
            max: 0,
            night: 0,
            eve: 0,
            morn: 0,
        },
        feels_like: {
            day: 0,
            night: 0,
            eve: 0,
            morn: 0,
        },
        pressure: 0,
        humidity: 0,
        weather: {
            id: 0,
            main: '',
            description: '',
            icon: '',
        },
        speed: 0,
        deg: 0,
        gust: 0,
        clouds: 0,
        pop: 0,
        rain: 0,
    }

}

const configureStore = createStore(Reducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() )